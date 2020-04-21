import csv
import json
from shapely.geometry import shape, Point
from data.community_measures.QC.detectDuplicate import detectDuplicate
from data.community_measures.QC.QC import QCFilter


def groupProcessing(filenames, boundaryfile):

    URLs = {}

    filename_boundaries_wales = filenames["boundaries_wales"]
    filename_boundaries_LA = filenames["boundaries_LA"]
    filename_csv = filenames["csv"]
    filename_demographics = filenames["demographics_legacy"]

    varNm_geog_areaID =  boundaryfile['ID_name']
    varNm_geog_areaNm = boundaryfile['area_name']

    # Import welsh boundaries
    # load GeoJSON file containing sectors
    wales_identified = False
    with open(filename_boundaries_wales) as boundaries:
        boundaries_js = json.load(boundaries)

        features = boundaries_js["features"]
        for feature in features:
            properties = feature["properties"]
            if properties["ctry19cd"] == "W92000004":
                polygon = shape(feature["geometry"])
                wales_identified = True
                # print("BOUNDARY GEOJSON: Welsh borders found and imported.")

    # load welsh LSOAs only from LSOA boundary file
    LA_polygons = []
    LAs_identified = 0
    welshLAs = []
    wrongAreaIDcode=[]

    with open(filename_boundaries_LA) as LAs:
        LAs_js = json.load(LAs)

        features = LAs_js["features"]
        for feature in features:
            properties = feature["properties"]

            # Construct point from coords
            point = shape(feature["geometry"]).representative_point()
            #print(point)

            # Check polygon for Wales to see if it contains the point
            if polygon.contains(point):

                LAs_identified += 1
                try:
                    LA_polygons.append(
                        {
                            "area_name": properties[varNm_geog_areaNm],
                            "areaID": properties[varNm_geog_areaID],
                            "LA_shape": shape(feature["geometry"]),
                            "LA_groupCount": 0,
                            "LA_groups": [],
                        }
                    )
                    welshLAs.append(feature)
                except:
                    wrongAreaIDcode.append([properties.keys()])
    print("ERROR (assimilator): Wrong AreaID code for {} features (keys available: {})".format(len(wrongAreaIDcode),wrongAreaIDcode[0]))

    # Open the demographics CSV
    with open(filename_csv, newline="", encoding="utf-8") as f:

        # print("OPENING groups CSV: ", filename_csv)
        # Initialise reader
        groups_QC = csv.DictReader(f)

        # groups_unfiltered
        # groups_QC = QCFilter(groups_unfiltered, "QC/groupsSampleReviewed.csv")

        # Initialise variables
        groups = []
        welshGroups = 0
        nonWelshGroups = 0
        exceptions = 0
        exceptions_names = []
        display0 = 0
        rowCount = 0
        pointsInLAs = 0
        geomWelshGrps = []
        duplicates = 0
        unacceptableDisplayCodes = ["DUPLICATE", "NOT GROUP", "NOT LOCAL"]

        # Build json from csv
        for row in groups_QC:
            rowCount += 1

            # Skip row if header
            if row["Title"] == "Title":
                continue

            # Skip row if set not to display
            elif row["Display"] in unacceptableDisplayCodes:
                display0 += 1
                continue

            else:
                # try:

                # Convert long/lat strings into numbers
                long = float(row["Lng"])
                lat = float(row["Lat"])

                # Construct point from coords
                point = Point(long, lat)

                # Check polygon for Wales to see if it contains the point
                if polygon.contains(point):

                    geoJSON = {
                        "type": "Feature",
                        "geometry": {"type": "Point", "coordinates": [long, lat]},
                        "properties": {
                            "Location": row["Location"],
                            "Title": row["Title"],
                            "URL": row["URL"],
                            "Display": row["Display"],
                            "Source": row["Source"],
                            "Notes": row["Notes"],
                        },
                    }

                    welshGroups += 1
                    groups.append(geoJSON)
                else:
                    nonWelshGroups += 1

                for LA_ply in LA_polygons:
                    if LA_ply["LA_shape"].contains(point):

                        duplicateTest = detectDuplicate(
                            LA_ply["areaID"], row["URL"], URLs
                        )

                        if duplicateTest[0] == False:
                            geomWelshGrps.append(
                                [
                                    row["Location"],
                                    row["Title"],
                                    LA_ply["area_name"],
                                    LA_ply["areaID"],
                                    row["URL"],
                                    row["Notes"],
                                ]
                            )

                            LA_ply["LA_groupCount"] += 1
                            LA_ply["LA_groups"].append(row["Title"])
                            pointsInLAs += 1
                            URLs = duplicateTest[1]

                        else:
                            duplicates += 1
                            # print("Duplicate detected and excluded: ", row)

                # except:
                #     print("EXCEPTION. Unable to check if polygon cotnains point: ", row["Title"])
                #     exceptions+=1
                #     exceptions_names.append(row["Title"])
                #     continue

    # Build dictionary for demographics
    output = []
    demographics = {}
    with open(filename_demographics, newline="") as f:
        reader = csv.DictReader(f)

        for row in reader:

            demographics[row["areaID"]] = {
                "pop": float(row["WIMD_rank"].replace(",", "",)),
                "pop_elderly": float(row["language"].replace(",", "",)),
                #"pop": float(row["WIMD_rank"].replace(",", "",)),
                #"pop_elderly": float(row["language"].replace(",", "",)),
            }

    # Count groups per area
    for LA in welshLAs:
        properties = LA["properties"]
        areaID_name = properties[varNm_geog_areaID]
        pop = demographics[areaID_name]["pop"]
        pop_elderly = demographics[areaID_name]["pop_elderly"]

        # print('LA:', lad18cd, pop, pop_elderly)

        for LA_p in LA_polygons:
            if areaID_name == LA_p["areaID"]:
                groupCount = LA_p["LA_groupCount"]
                groupCount_pop = groupCount / pop
                groupCount_elderly = groupCount / (pop_elderly / 100 * pop)
                # print("MATCH: LA_p: ",areaID_name, LA_p["lad18cd"])
                break
            else:
                continue

        #print("LA:", lad18cd, groupCount, groupCount_pop, groupCount_elderly)

        properties["groupCount"] = groupCount
        properties["groupCount_pop"] = groupCount_pop
        properties["groupCount_elderly"] = groupCount_elderly

        # print("output",lad18cd)
        output.append(LA)

    print("Message (groupProcessing): {} groups identified".format(pointsInLAs))

    message = [
        ("#####################################################"),
        ("100% COMPLETE"),
        ("#####################################################"),
        ("################ GEOGRAPHICAL BORDERS ###############"),
        ("WELSH BORDER IDENTIFIED: ", wales_identified),
        ("NUMBER OF LA BOUNDARIES IDENTIFIED: ", LAs_identified),
        ("############## COMMUNITY SUPPORT GROUPS #############"),
        ("TOTAL: ", rowCount),
        ("WELSH: ", welshGroups),
        ("NON-WELSH :", nonWelshGroups),
        ("EXCLUDED (see 'Display' vals): ", display0),
        ("DUPLICATES: ", duplicates),
        ("EXCEPTIONS / ERRs: ", exceptions),
        ("GROUPS THROWING ERRORS: ", exceptions_names),
        ("################### COUNT PER LA ##################"),
        ("LAs: ", len(LA_polygons)),
        ("GROUPS LOCALISED TO LAs: ", pointsInLAs),
        ("LAs in output: ", len(output)),
        ("#####################################################"),
    ]

    return (groups, output, geomWelshGrps, URLs, message)
