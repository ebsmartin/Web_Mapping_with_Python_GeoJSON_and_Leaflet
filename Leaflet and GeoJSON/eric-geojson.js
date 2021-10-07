var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.095802 , 40.576495],
                    [-105.086280, 40.576430]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across campus.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.086280, 40.576430],
                    [-105.0852299921629, 40.5752922200477]
                ]
            },
            "properties": {
                "popupContent": "This is a the path to the LSC.",
                "underConstruction": false
            },
            "id": 2
        }
    ]
};

var covidTesting = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -105.09554996176513, 40.5736192106931
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Moby Parking Lot Saliva Screening: For CSU students, faculty and staff only."
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                   -105.07777148221388, 40.56952463078195
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "College Ave. Saliva Screening: For CSU students, faculty and staff only."
            },
            "id": 52
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                   -105.0867176787321, 40.5566889585142
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "South Campus Saliva Screening: For CSU students, faculty and staff only."
            },
            "id": 54
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -105.13473598815807, 40.577199679442806
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Foothills Saliva Screening: For CSU students, faculty and staff only."
            },
            "id": 55
        }, 
		 {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -105.08880825714813, 40.57550068985545
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Moby Saliva Screening: For CSU students, faculty and staff only."
            },
            "id": 56
        }
    ]
};

var recCenter = {
    "type": "Feature",
    "properties": {
        "popupContent": "This is the Student Recreation Center",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [-105.09063702807387, 40.57544760962186],
                    [-105.0906477690316, 40.57518110475684],
                    [-105.0907157950972, 40.57516478809797],
                    [-105.09047233338875, 40.5749010015607],
                    [-105.09006059667595, 40.57483029571414],
                    [-105.09004627539898, 40.57476774817225],
                    [-105.08961305677072, 40.57478678438683],
                    [-105.08960947645147, 40.57504785192626],
                    [-105.08909391048063, 40.57503697413246],
                    [-105.08909033016141, 40.575439451325416],  
                ],[
                    [-105.08928008708122, 40.57554550910155],
                    [-105.08883970781447, 40.57554007024534],
                    [-105.08882180621826, 40.57597245793573],
                    [-105.08927650676199, 40.57596973852504],
                ]
            ]
        ]
    }
};
