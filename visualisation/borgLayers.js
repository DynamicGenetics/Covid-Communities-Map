var layers=[{name: 'language', shownByDefault: False, ref: '../data/bias_language.geojson', layerSpec: {id: 'language', source: 'language', type: 'fill', paint: {'fill-color': {property: 'language', stops: [[0.0, 'rgb(0.0,0,0)'], [6.699999999999999, 'rgb(28.333333333333332,0,0)'], [13.399999999999999, 'rgb(56.666666666666664,0,0)'], [20.099999999999998, 'rgb(85.0,0,0)'], [26.799999999999997, 'rgb(113.33333333333333,0,0)'], [33.5, 'rgb(141.66666666666666,0,0)'], [40.199999999999996, 'rgb(170.0,0,0)'], [46.89999999999999, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'communityCohesion', shownByDefault: False, ref: '../data/community_cohesion+deprivation.geojson', layerSpec: {id: 'communityCohesion', source: 'communityCohesion', type: 'fill', paint: {'fill-color': {property: 'communityCohesion', stops: [[0.0, 'rgb(0.0,0,0)'], [0.04005816855555549, 'rgb(28.333333333333332,0,0)'], [0.08011633711111098, 'rgb(56.666666666666664,0,0)'], [0.12017450566666646, 'rgb(85.0,0,0)'], [0.16023267422222195, 'rgb(113.33333333333333,0,0)'], [0.20029084277777745, 'rgb(141.66666666666666,0,0)'], [0.24034901133333292, 'rgb(170.0,0,0)'], [0.2804071798888884, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'deprivation_30', shownByDefault: False, ref: '../data/community_cohesion+deprivation.geojson', layerSpec: {id: 'deprivation_30', source: 'deprivation_30', type: 'fill', paint: {'fill-color': {property: 'deprivation_30', stops: [[0.0, 'rgb(0.0,0,0)'], [6.555555555555555, 'rgb(28.333333333333332,0,0)'], [13.11111111111111, 'rgb(56.666666666666664,0,0)'], [19.666666666666664, 'rgb(85.0,0,0)'], [26.22222222222222, 'rgb(113.33333333333333,0,0)'], [32.77777777777778, 'rgb(141.66666666666666,0,0)'], [39.33333333333333, 'rgb(170.0,0,0)'], [45.888888888888886, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'vulnerable_pct', shownByDefault: False, ref: '../data/covid_vulnerable.geojson', layerSpec: {id: 'vulnerable_pct', source: 'vulnerable_pct', type: 'fill', paint: {'fill-color': {property: 'vulnerable_pct', stops: [[0.0, 'rgb(0.0,0,0)'], [1.966666666666667, 'rgb(28.333333333333332,0,0)'], [3.933333333333334, 'rgb(56.666666666666664,0,0)'], [5.900000000000001, 'rgb(85.0,0,0)'], [7.866666666666668, 'rgb(113.33333333333333,0,0)'], [9.833333333333336, 'rgb(141.66666666666666,0,0)'], [11.800000000000002, 'rgb(170.0,0,0)'], [13.76666666666667, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'pop_density', shownByDefault: False, ref: '../data/covid_vulnerable.geojson', layerSpec: {id: 'pop_density', source: 'pop_density', type: 'fill', paint: {'fill-color': {property: 'pop_density', stops: [[0.0, 'rgb(0.0,0,0)'], [284.4, 'rgb(28.333333333333332,0,0)'], [568.8, 'rgb(56.666666666666664,0,0)'], [853.1999999999999, 'rgb(85.0,0,0)'], [1137.6, 'rgb(113.33333333333333,0,0)'], [1422.0, 'rgb(141.66666666666666,0,0)'], [1706.3999999999999, 'rgb(170.0,0,0)'], [1990.7999999999997, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'pop_elderly', shownByDefault: False, ref: '../data/covid_vulnerable.geojson', layerSpec: {id: 'pop_elderly', source: 'pop_elderly', type: 'fill', paint: {'fill-color': {property: 'pop_elderly', stops: [[0.0, 'rgb(0.0,0,0)'], [1.4827871066666665, 'rgb(28.333333333333332,0,0)'], [2.965574213333333, 'rgb(56.666666666666664,0,0)'], [4.448361319999999, 'rgb(85.0,0,0)'], [5.931148426666666, 'rgb(113.33333333333333,0,0)'], [7.4139355333333326, 'rgb(141.66666666666666,0,0)'], [8.896722639999998, 'rgb(170.0,0,0)'], [10.379509746666665, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'pop', shownByDefault: False, ref: '../data/covid_vulnerable.geojson', layerSpec: {id: 'pop', source: 'pop', type: 'fill', paint: {'fill-color': {property: 'pop', stops: [[0.0, 'rgb(0.0,0,0)'], [33785.0, 'rgb(28.333333333333332,0,0)'], [67570.0, 'rgb(56.666666666666664,0,0)'], [101355.0, 'rgb(85.0,0,0)'], [135140.0, 'rgb(113.33333333333333,0,0)'], [168925.0, 'rgb(141.66666666666666,0,0)'], [202710.0, 'rgb(170.0,0,0)'], [236495.0, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'covid_per100k', shownByDefault: False, ref: '../data/covid_cases.geojson', layerSpec: {id: 'covid_per100k', source: 'covid_per100k', type: 'fill', paint: {'fill-color': {property: 'covid_per100k', stops: [[0.0, 'rgb(0.0,0,0)'], [37.02222222222222, 'rgb(28.333333333333332,0,0)'], [74.04444444444444, 'rgb(56.666666666666664,0,0)'], [111.06666666666666, 'rgb(85.0,0,0)'], [148.08888888888887, 'rgb(113.33333333333333,0,0)'], [185.1111111111111, 'rgb(141.66666666666666,0,0)'], [222.13333333333333, 'rgb(170.0,0,0)'], [259.1555555555555, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'long', shownByDefault: False, ref: '../data/groupCount.geojson', layerSpec: {id: 'long', source: 'long', type: 'fill', paint: {'fill-color': {property: 'long', stops: [[0.0, 'rgb(0.0,0,0)'], [0.22338777777777777, 'rgb(28.333333333333332,0,0)'], [0.44677555555555554, 'rgb(56.666666666666664,0,0)'], [0.6701633333333333, 'rgb(85.0,0,0)'], [0.8935511111111111, 'rgb(113.33333333333333,0,0)'], [1.116938888888889, 'rgb(141.66666666666666,0,0)'], [1.3403266666666667, 'rgb(170.0,0,0)'], [1.5637144444444444, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'lat', shownByDefault: False, ref: '../data/groupCount.geojson', layerSpec: {id: 'lat', source: 'lat', type: 'fill', paint: {'fill-color': {property: 'lat', stops: [[0.0, 'rgb(0.0,0,0)'], [0.2034444444444448, 'rgb(28.333333333333332,0,0)'], [0.4068888888888896, 'rgb(56.666666666666664,0,0)'], [0.6103333333333344, 'rgb(85.0,0,0)'], [0.8137777777777792, 'rgb(113.33333333333333,0,0)'], [1.017222222222224, 'rgb(141.66666666666666,0,0)'], [1.2206666666666688, 'rgb(170.0,0,0)'], [1.4241111111111135, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'st_areashape', shownByDefault: False, ref: '../data/groupCount.geojson', layerSpec: {id: 'st_areashape', source: 'st_areashape', type: 'fill', paint: {'fill-color': {property: 'st_areashape', stops: [[0.0, 'rgb(0.0,0,0)'], [565188051.4583178, 'rgb(28.333333333333332,0,0)'], [1130376102.9166355, 'rgb(56.666666666666664,0,0)'], [1695564154.3749533, 'rgb(85.0,0,0)'], [2260752205.833271, 'rgb(113.33333333333333,0,0)'], [2825940257.291589, 'rgb(141.66666666666666,0,0)'], [3391128308.7499065, 'rgb(170.0,0,0)'], [3956316360.2082243, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'st_lengthshape', shownByDefault: False, ref: '../data/groupCount.geojson', layerSpec: {id: 'st_lengthshape', source: 'st_lengthshape', type: 'fill', paint: {'fill-color': {property: 'st_lengthshape', stops: [[0.0, 'rgb(0.0,0,0)'], [65665.35010841119, 'rgb(28.333333333333332,0,0)'], [131330.70021682238, 'rgb(56.666666666666664,0,0)'], [196996.05032523358, 'rgb(85.0,0,0)'], [262661.40043364477, 'rgb(113.33333333333333,0,0)'], [328326.75054205593, 'rgb(141.66666666666666,0,0)'], [393992.10065046715, 'rgb(170.0,0,0)'], [459657.4507588784, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'groupCount', shownByDefault: False, ref: '../data/groupCount.geojson', layerSpec: {id: 'groupCount', source: 'groupCount', type: 'fill', paint: {'fill-color': {property: 'groupCount', stops: [[0.0, 'rgb(0.0,0,0)'], [2.111111111111111, 'rgb(28.333333333333332,0,0)'], [4.222222222222222, 'rgb(56.666666666666664,0,0)'], [6.333333333333334, 'rgb(85.0,0,0)'], [8.444444444444445, 'rgb(113.33333333333333,0,0)'], [10.555555555555555, 'rgb(141.66666666666666,0,0)'], [12.666666666666668, 'rgb(170.0,0,0)'], [14.777777777777779, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'groupCount_pop', shownByDefault: False, ref: '../data/groupCount.geojson', layerSpec: {id: 'groupCount_pop', source: 'groupCount_pop', type: 'fill', paint: {'fill-color': {property: 'groupCount_pop', stops: [[0.0, 'rgb(0.0,0,0)'], [3.0175542246553237e-05, 'rgb(28.333333333333332,0,0)'], [6.035108449310647e-05, 'rgb(56.666666666666664,0,0)'], [9.052662673965972e-05, 'rgb(85.0,0,0)'], [0.00012070216898621295, 'rgb(113.33333333333333,0,0)'], [0.00015087771123276618, 'rgb(141.66666666666666,0,0)'], [0.00018105325347931943, 'rgb(170.0,0,0)'], [0.00021122879572587266, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}, {name: 'groupCount_elderly', shownByDefault: False, ref: '../data/groupCount.geojson', layerSpec: {id: 'groupCount_elderly', source: 'groupCount_elderly', type: 'fill', paint: {'fill-color': {property: 'groupCount_elderly', stops: [[0.0, 'rgb(0.0,0,0)'], [0.0001173360999902538, 'rgb(28.333333333333332,0,0)'], [0.0002346721999805076, 'rgb(56.666666666666664,0,0)'], [0.0003520082999707614, 'rgb(85.0,0,0)'], [0.0004693443999610152, 'rgb(113.33333333333333,0,0)'], [0.000586680499951269, 'rgb(141.66666666666666,0,0)'], [0.0007040165999415228, 'rgb(170.0,0,0)'], [0.0008213526999317766, 'rgb(198.33333333333331,0,0)']]}, 'fill-opacity': 0.16666666666666666}, filter: ['==', '$type', 'Polygon']}}]