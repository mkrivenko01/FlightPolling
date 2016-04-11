/*
This is empty on purpose! Your code to build the resume will go here.
 */

var TestRequest = {
                  "request": {
                    "slice": [
                      {
                        "origin": "SFO",
                        "destination": "PSP",
                        "date": "2017-02-27",
                        "maxStops": 1
                      },
                      {
                        "origin": "PSP",
                        "destination": "SFO",
                        "date": "2017-03-05",
                        "maxStops": 1
                      }
                    ],
                    "passengers": {
                      "adultCount": 1,
                      "infantInLapCount": 0,
                      "infantInSeatCount": 0,
                      "childCount": 0,
                      "seniorCount": 0
                    },
                    "solutions": 20,
                    "refundable": false
                  }
                };


var TestReturn = {
                  "kind": "qpxExpress#tripsSearch",
                  "trips": {
                   "kind": "qpxexpress#tripOptions",
                   "requestId": "TSOSHKZyzrBIyRUue0O5pg",
                   "data": {
                    "kind": "qpxexpress#data",
                    "airport": [
                     {
                      "kind": "qpxexpress#airportData",
                      "code": "DEN",
                      "city": "DEN",
                      "name": "Denver International"
                     },
                     {
                      "kind": "qpxexpress#airportData",
                      "code": "IAD",
                      "city": "WAS",
                      "name": "Washington Dulles International"
                     },
                     {
                      "kind": "qpxexpress#airportData",
                      "code": "IAH",
                      "city": "HOU",
                      "name": "Houston George Bush Intercont."
                     },
                     {
                      "kind": "qpxexpress#airportData",
                      "code": "LAX",
                      "city": "LAX",
                      "name": "Los Angeles International"
                     },
                     {
                      "kind": "qpxexpress#airportData",
                      "code": "MCO",
                      "city": "ORL",
                      "name": "Orlando International"
                     },
                     {
                      "kind": "qpxexpress#airportData",
                      "code": "ORD",
                      "city": "CHI",
                      "name": "Chicago O'Hare"
                     },
                     {
                      "kind": "qpxexpress#airportData",
                      "code": "SEA",
                      "city": "SEA",
                      "name": "Seattle/Tacoma Sea/Tac"
                     },
                     {
                      "kind": "qpxexpress#airportData",
                      "code": "SFO",
                      "city": "SFO",
                      "name": "San Francisco International"
                     }
                    ],
                    "city": [
                     {
                      "kind": "qpxexpress#cityData",
                      "code": "CHI",
                      "name": "Chicago"
                     },
                     {
                      "kind": "qpxexpress#cityData",
                      "code": "DEN",
                      "name": "Denver"
                     },
                     {
                      "kind": "qpxexpress#cityData",
                      "code": "HOU",
                      "name": "Houston"
                     },
                     {
                      "kind": "qpxexpress#cityData",
                      "code": "LAX",
                      "name": "Los Angeles"
                     },
                     {
                      "kind": "qpxexpress#cityData",
                      "code": "ORL",
                      "name": "Orlando"
                     },
                     {
                      "kind": "qpxexpress#cityData",
                      "code": "SEA",
                      "name": "Seattle"
                     },
                     {
                      "kind": "qpxexpress#cityData",
                      "code": "SFO",
                      "name": "San Francisco"
                     },
                     {
                      "kind": "qpxexpress#cityData",
                      "code": "WAS",
                      "name": "Washington"
                     }
                    ],
                    "aircraft": [
                     {
                      "kind": "qpxexpress#aircraftData",
                      "code": "319",
                      "name": "Airbus A319"
                     },
                     {
                      "kind": "qpxexpress#aircraftData",
                      "code": "320",
                      "name": "Airbus A320"
                     },
                     {
                      "kind": "qpxexpress#aircraftData",
                      "code": "738",
                      "name": "Boeing 737"
                     },
                     {
                      "kind": "qpxexpress#aircraftData",
                      "code": "739",
                      "name": "Boeing 737"
                     },
                     {
                      "kind": "qpxexpress#aircraftData",
                      "code": "753",
                      "name": "Boeing 757"
                     }
                    ],
                    "tax": [
                     {
                      "kind": "qpxexpress#taxData",
                      "id": "ZP",
                      "name": "US Flight Segment Tax"
                     },
                     {
                      "kind": "qpxexpress#taxData",
                      "id": "AY_001",
                      "name": "US September 11th Security Fee"
                     },
                     {
                      "kind": "qpxexpress#taxData",
                      "id": "US_001",
                      "name": "US Transportation Tax"
                     },
                     {
                      "kind": "qpxexpress#taxData",
                      "id": "XF",
                      "name": "US Passenger Facility Charge"
                     }
                    ],
                    "carrier": [
                     {
                      "kind": "qpxexpress#carrierData",
                      "code": "AS",
                      "name": "Alaska Airlines Inc."
                     },
                     {
                      "kind": "qpxexpress#carrierData",
                      "code": "UA",
                      "name": "United Airlines, Inc."
                     },
                     {
                      "kind": "qpxexpress#carrierData",
                      "code": "VX",
                      "name": "Virgin America Inc."
                     }
                    ]
                   },
                   "tripOption": [
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3234.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE003",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 432,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 432,
                         "flight": {
                          "carrier": "UA",
                          "number": "261"
                         },
                         "id": "GY89zv0ifdM3NWNA",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LV5YDjAi1DMYe4LF",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T07:23-08:00",
                           "departureTime": "2016-11-19T06:00-08:00",
                           "origin": "SFO",
                           "destination": "LAX",
                           "originTerminal": "3",
                           "destinationTerminal": "7",
                           "duration": 83,
                           "onTimePerformance": 80,
                           "mileage": 337,
                           "secure": true,
                           "connectionDuration": 57
                          },
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L4NZZWP6OtINrMyR",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T16:12-05:00",
                           "departureTime": "2016-11-19T08:20-08:00",
                           "origin": "LAX",
                           "destination": "MCO",
                           "originTerminal": "7",
                           "duration": 292,
                           "onTimePerformance": 90,
                           "mileage": 2212,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 476,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 160,
                         "flight": {
                          "carrier": "UA",
                          "number": "1191"
                         },
                         "id": "GihDktjCIyhA7vq0",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LFZ3RVhVm7ytVd2-",
                           "aircraft": "739",
                           "arrivalTime": "2016-11-26T10:39-06:00",
                           "departureTime": "2016-11-26T08:59-05:00",
                           "origin": "MCO",
                           "destination": "IAH",
                           "destinationTerminal": "C",
                           "duration": 160,
                           "onTimePerformance": 80,
                           "mileage": 852,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 51
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 265,
                         "flight": {
                          "carrier": "UA",
                          "number": "496"
                         },
                         "id": "GzJPNAyRyNuH1ol1",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L297oJV1rMhgFudE",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T13:55-08:00",
                           "departureTime": "2016-11-26T11:30-06:00",
                           "origin": "IAH",
                           "destination": "SFO",
                           "originTerminal": "C",
                           "destinationTerminal": "3",
                           "duration": 265,
                           "onTimePerformance": 70,
                           "mileage": 1632,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "QFA07AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GzJPNAyRyNuH1ol1"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GihDktjCIyhA7vq0"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GY89zv0ifdM3NWNA"
                        }
                       ],
                       "baseFareTotal": "USD714.41",
                       "saleFareTotal": "USD714.41",
                       "saleTaxTotal": "USD94.29",
                       "saleTotal": "USD808.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD53.59"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 278.14WFA07AFN UA X/HOU UA SFO Q ORLSFO27.91 389.76QFA07AFN USD 714.41 END ZP SFO LAX MCO IAH XT 53.59US 16.00ZP 11.20AY 13.50XF SFO4.50 MCO4.50 IAH4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "QFA07AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GzJPNAyRyNuH1ol1"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GihDktjCIyhA7vq0"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GY89zv0ifdM3NWNA"
                        }
                       ],
                       "baseFareTotal": "USD714.41",
                       "saleFareTotal": "USD714.41",
                       "saleTaxTotal": "USD94.29",
                       "saleTotal": "USD808.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD53.59"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 278.14WFA07AFN UA X/HOU UA SFO Q ORLSFO27.91 389.76QFA07AFN USD 714.41 END ZP SFO LAX MCO IAH XT 53.59US 16.00ZP 11.20AY 13.50XF SFO4.50 MCO4.50 IAH4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3234.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE002",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 432,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 432,
                         "flight": {
                          "carrier": "UA",
                          "number": "261"
                         },
                         "id": "GY89zv0ifdM3NWNA",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LV5YDjAi1DMYe4LF",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T07:23-08:00",
                           "departureTime": "2016-11-19T06:00-08:00",
                           "origin": "SFO",
                           "destination": "LAX",
                           "originTerminal": "3",
                           "destinationTerminal": "7",
                           "duration": 83,
                           "onTimePerformance": 80,
                           "mileage": 337,
                           "secure": true,
                           "connectionDuration": 57
                          },
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L4NZZWP6OtINrMyR",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T16:12-05:00",
                           "departureTime": "2016-11-19T08:20-08:00",
                           "origin": "LAX",
                           "destination": "MCO",
                           "originTerminal": "7",
                           "duration": 292,
                           "onTimePerformance": 90,
                           "mileage": 2212,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 475,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 160,
                         "flight": {
                          "carrier": "UA",
                          "number": "1768"
                         },
                         "id": "GV56dvtBgU5kbi3t",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LaE7HArDKUom456Q",
                           "aircraft": "739",
                           "arrivalTime": "2016-11-26T08:25-06:00",
                           "departureTime": "2016-11-26T06:45-05:00",
                           "origin": "MCO",
                           "destination": "IAH",
                           "destinationTerminal": "C",
                           "duration": 160,
                           "onTimePerformance": 90,
                           "mileage": 852,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 50
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 265,
                         "flight": {
                          "carrier": "UA",
                          "number": "937"
                         },
                         "id": "GF0qVh3X7eaKbjDY",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L4binIo3OARo7wSp",
                           "aircraft": "739",
                           "arrivalTime": "2016-11-26T11:40-08:00",
                           "departureTime": "2016-11-26T09:15-06:00",
                           "origin": "IAH",
                           "destination": "SFO",
                           "originTerminal": "C",
                           "destinationTerminal": "3",
                           "duration": 265,
                           "onTimePerformance": 70,
                           "mileage": 1632,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "QFA07AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GF0qVh3X7eaKbjDY"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GV56dvtBgU5kbi3t"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GY89zv0ifdM3NWNA"
                        }
                       ],
                       "baseFareTotal": "USD714.41",
                       "saleFareTotal": "USD714.41",
                       "saleTaxTotal": "USD94.29",
                       "saleTotal": "USD808.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD53.59"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 278.14WFA07AFN UA X/HOU UA SFO Q ORLSFO27.91 389.76QFA07AFN USD 714.41 END ZP SFO LAX MCO IAH XT 53.59US 16.00ZP 11.20AY 13.50XF SFO4.50 MCO4.50 IAH4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "QFA07AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GF0qVh3X7eaKbjDY"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GV56dvtBgU5kbi3t"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GY89zv0ifdM3NWNA"
                        }
                       ],
                       "baseFareTotal": "USD714.41",
                       "saleFareTotal": "USD714.41",
                       "saleTaxTotal": "USD94.29",
                       "saleTotal": "USD808.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD53.59"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 278.14WFA07AFN UA X/HOU UA SFO Q ORLSFO27.91 389.76QFA07AFN USD 714.41 END ZP SFO LAX MCO IAH XT 53.59US 16.00ZP 11.20AY 13.50XF SFO4.50 MCO4.50 IAH4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3366.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE008",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 460,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 84,
                         "flight": {
                          "carrier": "UA",
                          "number": "222"
                         },
                         "id": "GgzmXKK2WiS3GJSh",
                         "cabin": "COACH",
                         "bookingCode": "S",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LEEv6KBYMf-ZiKRN",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T20:54-08:00",
                           "departureTime": "2016-11-19T19:30-08:00",
                           "origin": "SFO",
                           "destination": "LAX",
                           "originTerminal": "3",
                           "destinationTerminal": "7",
                           "duration": 84,
                           "onTimePerformance": 80,
                           "mileage": 337,
                           "secure": true
                          }
                         ],
                         "connectionDuration": 96
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 280,
                         "flight": {
                          "carrier": "UA",
                          "number": "1791"
                         },
                         "id": "GasOG5ZGUPk3D5oJ",
                         "cabin": "COACH",
                         "bookingCode": "S",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lnk74HYtewcmYlHF",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-20T06:10-05:00",
                           "departureTime": "2016-11-19T22:30-08:00",
                           "origin": "LAX",
                           "destination": "MCO",
                           "originTerminal": "7",
                           "duration": 280,
                           "mileage": 2212,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "SFA14AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GgzmXKK2WiS3GJSh"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GasOG5ZGUPk3D5oJ"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD748.83",
                       "saleFareTotal": "USD748.83",
                       "saleTaxTotal": "USD92.87",
                       "saleTotal": "USD841.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD56.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/LAX UA ORL Q SFOORL18.60 238.14SFA14AFN UA SFO Q27.91 464.18UFA00AFN USD 748.83 END ZP SFO LAX MCO XT 56.17US 12.00ZP 11.20AY 13.50XF SFO4.50 LAX4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "SFA14AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GgzmXKK2WiS3GJSh"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GasOG5ZGUPk3D5oJ"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD748.83",
                       "saleFareTotal": "USD748.83",
                       "saleTaxTotal": "USD92.87",
                       "saleTotal": "USD841.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD56.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/LAX UA ORL Q SFOORL18.60 238.14SFA14AFN UA SFO Q27.91 464.18UFA00AFN USD 748.83 END ZP SFO LAX MCO XT 56.17US 12.00ZP 11.20AY 13.50XF SFO4.50 LAX4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3366.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE004",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 530,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 259,
                         "flight": {
                          "carrier": "UA",
                          "number": "728"
                         },
                         "id": "GY1dA8yEZj0QMTns",
                         "cabin": "COACH",
                         "bookingCode": "S",
                         "bookingCodeCount": 5,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LqOHlCEEKm376EWk",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T15:49-06:00",
                           "departureTime": "2016-11-19T09:30-08:00",
                           "origin": "SFO",
                           "destination": "ORD",
                           "originTerminal": "3",
                           "destinationTerminal": "1",
                           "duration": 259,
                           "mileage": 1841,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 111
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 160,
                         "flight": {
                          "carrier": "UA",
                          "number": "639"
                         },
                         "id": "GnNoDigaEfC6ibDZ",
                         "cabin": "COACH",
                         "bookingCode": "S",
                         "bookingCodeCount": 5,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LzHQqKMfCxE-MsrJ",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-19T21:20-05:00",
                           "departureTime": "2016-11-19T17:40-06:00",
                           "origin": "ORD",
                           "destination": "MCO",
                           "originTerminal": "1",
                           "duration": 160,
                           "onTimePerformance": 90,
                           "mileage": 1006,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "SFA14AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GnNoDigaEfC6ibDZ"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GY1dA8yEZj0QMTns"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD748.83",
                       "saleFareTotal": "USD748.83",
                       "saleTaxTotal": "USD92.87",
                       "saleTotal": "USD841.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD56.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/CHI UA ORL Q SFOORL18.60 238.14SFA14AFN UA SFO Q27.91 464.18UFA00AFN USD 748.83 END ZP SFO ORD MCO XT 56.17US 12.00ZP 11.20AY 13.50XF SFO4.50 ORD4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "SFA14AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GnNoDigaEfC6ibDZ"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GY1dA8yEZj0QMTns"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD748.83",
                       "saleFareTotal": "USD748.83",
                       "saleTaxTotal": "USD92.87",
                       "saleTotal": "USD841.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD56.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/CHI UA ORL Q SFOORL18.60 238.14SFA14AFN UA SFO Q27.91 464.18UFA00AFN USD 748.83 END ZP SFO ORD MCO XT 56.17US 12.00ZP 11.20AY 13.50XF SFO4.50 ORD4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3366.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00H",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 495,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 235,
                         "flight": {
                          "carrier": "UA",
                          "number": "1204"
                         },
                         "id": "GGRYx81NlC1I+W6G",
                         "cabin": "COACH",
                         "bookingCode": "S",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LAy1FGQamT2TtugG",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-20T05:25-06:00",
                           "departureTime": "2016-11-19T23:30-08:00",
                           "origin": "SFO",
                           "destination": "IAH",
                           "originTerminal": "3",
                           "destinationTerminal": "C",
                           "duration": 235,
                           "onTimePerformance": 60,
                           "mileage": 1632,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 120
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 140,
                         "flight": {
                          "carrier": "UA",
                          "number": "1965"
                         },
                         "id": "GgOqIKbmIzvG2k4i",
                         "cabin": "COACH",
                         "bookingCode": "S",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LMSNjwQbFMPM4DXl",
                           "aircraft": "739",
                           "arrivalTime": "2016-11-20T10:45-05:00",
                           "departureTime": "2016-11-20T07:25-06:00",
                           "origin": "IAH",
                           "destination": "MCO",
                           "originTerminal": "C",
                           "duration": 140,
                           "onTimePerformance": 80,
                           "mileage": 852,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "SFA14AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GGRYx81NlC1I+W6G"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GgOqIKbmIzvG2k4i"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD748.83",
                       "saleFareTotal": "USD748.83",
                       "saleTaxTotal": "USD92.87",
                       "saleTotal": "USD841.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD56.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/HOU UA ORL Q SFOORL18.60 238.14SFA14AFN UA SFO Q27.91 464.18UFA00AFN USD 748.83 END ZP SFO IAH MCO XT 56.17US 12.00ZP 11.20AY 13.50XF SFO4.50 IAH4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "SFA14AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GGRYx81NlC1I+W6G"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AlrNcFxlnh11XGiuXJJ0WborpzI1mg0wMR6jeBDlCntw",
                         "segmentId": "GgOqIKbmIzvG2k4i"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD748.83",
                       "saleFareTotal": "USD748.83",
                       "saleTaxTotal": "USD92.87",
                       "saleTotal": "USD841.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD56.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/HOU UA ORL Q SFOORL18.60 238.14SFA14AFN UA SFO Q27.91 464.18UFA00AFN USD 748.83 END ZP SFO IAH MCO XT 56.17US 12.00ZP 11.20AY 13.50XF SFO4.50 IAH4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3520.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE001",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 432,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 432,
                         "flight": {
                          "carrier": "UA",
                          "number": "261"
                         },
                         "id": "GY89zv0ifdM3NWNA",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LV5YDjAi1DMYe4LF",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T07:23-08:00",
                           "departureTime": "2016-11-19T06:00-08:00",
                           "origin": "SFO",
                           "destination": "LAX",
                           "originTerminal": "3",
                           "destinationTerminal": "7",
                           "duration": 83,
                           "onTimePerformance": 80,
                           "mileage": 337,
                           "secure": true,
                           "connectionDuration": 57
                          },
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L4NZZWP6OtINrMyR",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T16:12-05:00",
                           "departureTime": "2016-11-19T08:20-08:00",
                           "origin": "LAX",
                           "destination": "MCO",
                           "originTerminal": "7",
                           "duration": 292,
                           "onTimePerformance": 90,
                           "mileage": 2212,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GY89zv0ifdM3NWNA"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD91.37",
                       "saleTotal": "USD880.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD9.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO LAX MCO XT 59.17US 12.00ZP 11.20AY 9.00XF SFO4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GY89zv0ifdM3NWNA"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD91.37",
                       "saleTotal": "USD880.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD9.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO LAX MCO XT 59.17US 12.00ZP 11.20AY 9.00XF SFO4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3536.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE007",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 432,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 432,
                         "flight": {
                          "carrier": "UA",
                          "number": "261"
                         },
                         "id": "GY89zv0ifdM3NWNA",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LV5YDjAi1DMYe4LF",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T07:23-08:00",
                           "departureTime": "2016-11-19T06:00-08:00",
                           "origin": "SFO",
                           "destination": "LAX",
                           "originTerminal": "3",
                           "destinationTerminal": "7",
                           "duration": 83,
                           "onTimePerformance": 80,
                           "mileage": 337,
                           "secure": true,
                           "connectionDuration": 57
                          },
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L4NZZWP6OtINrMyR",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T16:12-05:00",
                           "departureTime": "2016-11-19T08:20-08:00",
                           "origin": "LAX",
                           "destination": "MCO",
                           "originTerminal": "7",
                           "duration": 292,
                           "onTimePerformance": 90,
                           "mileage": 2212,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 458,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 458,
                         "flight": {
                          "carrier": "UA",
                          "number": "257"
                         },
                         "id": "G1XjDPtDGxLg29cY",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LT9XG7CfUD+pYWyF",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-26T18:15-07:00",
                           "departureTime": "2016-11-26T16:15-05:00",
                           "origin": "MCO",
                           "destination": "DEN",
                           "duration": 240,
                           "onTimePerformance": 80,
                           "mileage": 1544,
                           "meal": "Food for Purchase",
                           "secure": true,
                           "connectionDuration": 55,
                           "changePlane": true
                          },
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LQhsoVNFCz5Ynq8x",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T20:53-08:00",
                           "departureTime": "2016-11-26T19:10-07:00",
                           "origin": "DEN",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 163,
                           "onTimePerformance": 60,
                           "mileage": 965,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "G1XjDPtDGxLg29cY"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GY89zv0ifdM3NWNA"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.37",
                       "saleTotal": "USD884.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD9.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO LAX MCO DEN XT 59.17US 16.00ZP 11.20AY 9.00XF SFO4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "G1XjDPtDGxLg29cY"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GY89zv0ifdM3NWNA"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.37",
                       "saleTotal": "USD884.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD9.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO LAX MCO DEN XT 59.17US 16.00ZP 11.20AY 9.00XF SFO4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3538.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00I",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 499,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 311,
                         "flight": {
                          "carrier": "UA",
                          "number": "727"
                         },
                         "id": "Gv6UjCCFdlt-gYge",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LuS0LWpjsDXGiTGJ",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T21:01-05:00",
                           "departureTime": "2016-11-19T12:50-08:00",
                           "origin": "SFO",
                           "destination": "IAD",
                           "originTerminal": "3",
                           "duration": 311,
                           "onTimePerformance": 80,
                           "mileage": 2412,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 59
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 129,
                         "flight": {
                          "carrier": "UA",
                          "number": "260"
                         },
                         "id": "GORiS1IX6LG6E9nz",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L1N2OqSmcG2k0Le3",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-20T00:09-05:00",
                           "departureTime": "2016-11-19T22:00-05:00",
                           "origin": "IAD",
                           "destination": "MCO",
                           "duration": 129,
                           "onTimePerformance": 80,
                           "mileage": 759,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GORiS1IX6LG6E9nz"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "Gv6UjCCFdlt-gYge"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.87",
                       "saleTotal": "USD884.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/WAS UA ORL Q SFOORL18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO IAD MCO XT 59.17US 12.00ZP 11.20AY 13.50XF SFO4.50 IAD4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GORiS1IX6LG6E9nz"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "Gv6UjCCFdlt-gYge"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.87",
                       "saleTotal": "USD884.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/WAS UA ORL Q SFOORL18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO IAD MCO XT 59.17US 12.00ZP 11.20AY 13.50XF SFO4.50 IAD4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3538.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE006",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 443,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 150,
                         "flight": {
                          "carrier": "UA",
                          "number": "756"
                         },
                         "id": "GrmjbK1cbrd4tHw2",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L1UPFjBVS2SgGpZx",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-19T08:38-07:00",
                           "departureTime": "2016-11-19T05:08-08:00",
                           "origin": "SFO",
                           "destination": "DEN",
                           "originTerminal": "3",
                           "duration": 150,
                           "onTimePerformance": 90,
                           "mileage": 965,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 87
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 206,
                         "flight": {
                          "carrier": "UA",
                          "number": "564"
                         },
                         "id": "GxOmSJxNOAn-bqtG",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LDZZOY87ev+Uvby5",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T15:31-05:00",
                           "departureTime": "2016-11-19T10:05-07:00",
                           "origin": "DEN",
                           "destination": "MCO",
                           "duration": 206,
                           "onTimePerformance": 80,
                           "mileage": 1544,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GrmjbK1cbrd4tHw2"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GxOmSJxNOAn-bqtG"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.87",
                       "saleTotal": "USD884.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/DEN UA ORL Q SFOORL18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO DEN MCO XT 59.17US 12.00ZP 11.20AY 13.50XF SFO4.50 DEN4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GrmjbK1cbrd4tHw2"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GxOmSJxNOAn-bqtG"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.87",
                       "saleTotal": "USD884.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/DEN UA ORL Q SFOORL18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO DEN MCO XT 59.17US 12.00ZP 11.20AY 13.50XF SFO4.50 DEN4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3538.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00A",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 475,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 248,
                         "flight": {
                          "carrier": "UA",
                          "number": "794"
                         },
                         "id": "G7YqLSD+N7hAAfO8",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LKuvVuqFNNL73ju7",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T18:08-06:00",
                           "departureTime": "2016-11-19T12:00-08:00",
                           "origin": "SFO",
                           "destination": "ORD",
                           "originTerminal": "3",
                           "destinationTerminal": "1",
                           "duration": 248,
                           "onTimePerformance": 80,
                           "mileage": 1841,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 67
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 160,
                         "flight": {
                          "carrier": "UA",
                          "number": "1180"
                         },
                         "id": "GK4H3y7CtplG7ubo",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LN+xv4gwfe1NEjol",
                           "aircraft": "739",
                           "arrivalTime": "2016-11-19T22:55-05:00",
                           "departureTime": "2016-11-19T19:15-06:00",
                           "origin": "ORD",
                           "destination": "MCO",
                           "originTerminal": "1",
                           "duration": 160,
                           "onTimePerformance": 80,
                           "mileage": 1006,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "G7YqLSD+N7hAAfO8"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GK4H3y7CtplG7ubo"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.87",
                       "saleTotal": "USD884.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/CHI UA ORL Q SFOORL18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO ORD MCO XT 59.17US 12.00ZP 11.20AY 13.50XF SFO4.50 ORD4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "G7YqLSD+N7hAAfO8"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GK4H3y7CtplG7ubo"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.87",
                       "saleTotal": "USD884.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/CHI UA ORL Q SFOORL18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO ORD MCO XT 59.17US 12.00ZP 11.20AY 13.50XF SFO4.50 ORD4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3538.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00B",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 483,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 149,
                         "flight": {
                          "carrier": "UA",
                          "number": "2028"
                         },
                         "id": "GHeTS0qDFvG2Vb0B",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LGPfmOBHKRU3jpE8",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T10:29-07:00",
                           "departureTime": "2016-11-19T07:00-08:00",
                           "origin": "SFO",
                           "destination": "DEN",
                           "originTerminal": "3",
                           "duration": 149,
                           "onTimePerformance": 80,
                           "mileage": 965,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 125
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 209,
                         "flight": {
                          "carrier": "UA",
                          "number": "393"
                         },
                         "id": "GnZrhcevvg3fKQef",
                         "cabin": "COACH",
                         "bookingCode": "W",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LlgM7mM5Tr-lXoeD",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T18:03-05:00",
                           "departureTime": "2016-11-19T12:34-07:00",
                           "origin": "DEN",
                           "destination": "MCO",
                           "duration": 209,
                           "onTimePerformance": 80,
                           "mileage": 1544,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GnZrhcevvg3fKQef"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GHeTS0qDFvG2Vb0B"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.87",
                       "saleTotal": "USD884.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/DEN UA ORL Q SFOORL18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO DEN MCO XT 59.17US 12.00ZP 11.20AY 13.50XF SFO4.50 DEN4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "WFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GnZrhcevvg3fKQef"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A6Xn4Fxml2k6KMiglnZA7CKJbACOft9oxrrWqjzEPM+E",
                         "segmentId": "GHeTS0qDFvG2Vb0B"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD788.83",
                       "saleFareTotal": "USD788.83",
                       "saleTaxTotal": "USD95.87",
                       "saleTotal": "USD884.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD59.17"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/DEN UA ORL Q SFOORL18.60 278.14WFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 788.83 END ZP SFO DEN MCO XT 59.17US 12.00ZP 11.20AY 13.50XF SFO4.50 DEN4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3606.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE009",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 423,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 159,
                         "flight": {
                          "carrier": "UA",
                          "number": "948"
                         },
                         "id": "GZsHpVbF+-N4ash2",
                         "cabin": "COACH",
                         "bookingCode": "V",
                         "bookingCodeCount": 4,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L2f8hUMLAyJ9bwUa",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T11:39-07:00",
                           "departureTime": "2016-11-19T08:00-08:00",
                           "origin": "SFO",
                           "destination": "DEN",
                           "originTerminal": "3",
                           "duration": 159,
                           "onTimePerformance": 90,
                           "mileage": 965,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 55
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 209,
                         "flight": {
                          "carrier": "UA",
                          "number": "393"
                         },
                         "id": "GnZrhcevvg3fKQef",
                         "cabin": "COACH",
                         "bookingCode": "V",
                         "bookingCodeCount": 4,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LlgM7mM5Tr-lXoeD",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T18:03-05:00",
                           "departureTime": "2016-11-19T12:34-07:00",
                           "origin": "DEN",
                           "destination": "MCO",
                           "duration": 209,
                           "onTimePerformance": 80,
                           "mileage": 1544,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AuMoBS4Z5+Jc7zx+alQHw99B4eYwVvyx23YXu6fFEUD6",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "VAA14AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AuMoBS4Z5+Jc7zx+alQHw99B4eYwVvyx23YXu6fFEUD6",
                         "segmentId": "GZsHpVbF+-N4ash2"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AuMoBS4Z5+Jc7zx+alQHw99B4eYwVvyx23YXu6fFEUD6",
                         "segmentId": "GnZrhcevvg3fKQef"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD804.64",
                       "saleFareTotal": "USD804.64",
                       "saleTaxTotal": "USD97.06",
                       "saleTotal": "USD901.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD60.36"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/DEN UA ORL Q SFOORL18.60 293.95VAA14AFN UA SFO Q27.91 464.18UFA00AFN USD 804.64 END ZP SFO DEN MCO XT 60.36US 12.00ZP 11.20AY 13.50XF SFO4.50 DEN4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AuMoBS4Z5+Jc7zx+alQHw99B4eYwVvyx23YXu6fFEUD6",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "VAA14AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AuMoBS4Z5+Jc7zx+alQHw99B4eYwVvyx23YXu6fFEUD6",
                         "segmentId": "GZsHpVbF+-N4ash2"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AuMoBS4Z5+Jc7zx+alQHw99B4eYwVvyx23YXu6fFEUD6",
                         "segmentId": "GnZrhcevvg3fKQef"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD804.64",
                       "saleFareTotal": "USD804.64",
                       "saleTaxTotal": "USD97.06",
                       "saleTotal": "USD901.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD60.36"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA X/DEN UA ORL Q SFOORL18.60 293.95VAA14AFN UA SFO Q27.91 464.18UFA00AFN USD 804.64 END ZP SFO DEN MCO XT 60.36US 12.00ZP 11.20AY 13.50XF SFO4.50 DEN4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3698.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00K",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 326,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 326,
                         "flight": {
                          "carrier": "UA",
                          "number": "292"
                         },
                         "id": "GX5FgVkZ6jOIaMQT",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L07ODKiH3dcCUGaT",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-19T21:36-05:00",
                           "departureTime": "2016-11-19T13:10-08:00",
                           "origin": "SFO",
                           "destination": "MCO",
                           "originTerminal": "3",
                           "duration": 326,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 476,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 160,
                         "flight": {
                          "carrier": "UA",
                          "number": "1191"
                         },
                         "id": "GihDktjCIyhA7vq0",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LFZ3RVhVm7ytVd2-",
                           "aircraft": "739",
                           "arrivalTime": "2016-11-26T10:39-06:00",
                           "departureTime": "2016-11-26T08:59-05:00",
                           "origin": "MCO",
                           "destination": "IAH",
                           "destinationTerminal": "C",
                           "duration": 160,
                           "onTimePerformance": 80,
                           "mileage": 852,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 51
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 265,
                         "flight": {
                          "carrier": "UA",
                          "number": "496"
                         },
                         "id": "GzJPNAyRyNuH1ol1",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L297oJV1rMhgFudE",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T13:55-08:00",
                           "departureTime": "2016-11-26T11:30-06:00",
                           "origin": "IAH",
                           "destination": "SFO",
                           "originTerminal": "C",
                           "destinationTerminal": "3",
                           "duration": 265,
                           "onTimePerformance": 70,
                           "mileage": 1632,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "QFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "QFA07AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GzJPNAyRyNuH1ol1"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GihDktjCIyhA7vq0"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GX5FgVkZ6jOIaMQT"
                        }
                       ],
                       "baseFareTotal": "USD826.04",
                       "saleFareTotal": "USD826.04",
                       "saleTaxTotal": "USD98.66",
                       "saleTotal": "USD924.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD61.96"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 389.77QFA07AFN UA X/HOU UA SFO Q ORLSFO27.91 389.76QFA07AFN USD 826.04 END ZP SFO MCO IAH XT 61.96US 12.00ZP 11.20AY 13.50XF SFO4.50 MCO4.50 IAH4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "QFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "QFA07AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GzJPNAyRyNuH1ol1"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GihDktjCIyhA7vq0"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GX5FgVkZ6jOIaMQT"
                        }
                       ],
                       "baseFareTotal": "USD826.04",
                       "saleFareTotal": "USD826.04",
                       "saleTaxTotal": "USD98.66",
                       "saleTotal": "USD924.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD61.96"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 389.77QFA07AFN UA X/HOU UA SFO Q ORLSFO27.91 389.76QFA07AFN USD 826.04 END ZP SFO MCO IAH XT 61.96US 12.00ZP 11.20AY 13.50XF SFO4.50 MCO4.50 IAH4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3698.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00J",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 326,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 326,
                         "flight": {
                          "carrier": "UA",
                          "number": "292"
                         },
                         "id": "GX5FgVkZ6jOIaMQT",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L07ODKiH3dcCUGaT",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-19T21:36-05:00",
                           "departureTime": "2016-11-19T13:10-08:00",
                           "origin": "SFO",
                           "destination": "MCO",
                           "originTerminal": "3",
                           "duration": 326,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 475,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 160,
                         "flight": {
                          "carrier": "UA",
                          "number": "1768"
                         },
                         "id": "GV56dvtBgU5kbi3t",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LaE7HArDKUom456Q",
                           "aircraft": "739",
                           "arrivalTime": "2016-11-26T08:25-06:00",
                           "departureTime": "2016-11-26T06:45-05:00",
                           "origin": "MCO",
                           "destination": "IAH",
                           "destinationTerminal": "C",
                           "duration": 160,
                           "onTimePerformance": 90,
                           "mileage": 852,
                           "meal": "Food and Beverages for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 50
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 265,
                         "flight": {
                          "carrier": "UA",
                          "number": "937"
                         },
                         "id": "GF0qVh3X7eaKbjDY",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L4binIo3OARo7wSp",
                           "aircraft": "739",
                           "arrivalTime": "2016-11-26T11:40-08:00",
                           "departureTime": "2016-11-26T09:15-06:00",
                           "origin": "IAH",
                           "destination": "SFO",
                           "originTerminal": "C",
                           "destinationTerminal": "3",
                           "duration": 265,
                           "onTimePerformance": 70,
                           "mileage": 1632,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "QFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "QFA07AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GF0qVh3X7eaKbjDY"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GV56dvtBgU5kbi3t"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GX5FgVkZ6jOIaMQT"
                        }
                       ],
                       "baseFareTotal": "USD826.04",
                       "saleFareTotal": "USD826.04",
                       "saleTaxTotal": "USD98.66",
                       "saleTotal": "USD924.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD61.96"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 389.77QFA07AFN UA X/HOU UA SFO Q ORLSFO27.91 389.76QFA07AFN USD 826.04 END ZP SFO MCO IAH XT 61.96US 12.00ZP 11.20AY 13.50XF SFO4.50 MCO4.50 IAH4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "QFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "QFA07AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GF0qVh3X7eaKbjDY"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GV56dvtBgU5kbi3t"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GX5FgVkZ6jOIaMQT"
                        }
                       ],
                       "baseFareTotal": "USD826.04",
                       "saleFareTotal": "USD826.04",
                       "saleTaxTotal": "USD98.66",
                       "saleTotal": "USD924.70",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD61.96"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD13.50"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD12.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 389.77QFA07AFN UA X/HOU UA SFO Q ORLSFO27.91 389.76QFA07AFN USD 826.04 END ZP SFO MCO IAH XT 61.96US 12.00ZP 11.20AY 13.50XF SFO4.50 MCO4.50 IAH4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3968.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00C",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 534,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 110,
                         "flight": {
                          "carrier": "AS",
                          "number": "331"
                         },
                         "id": "GwBOLXS2CvXe1-TY",
                         "cabin": "COACH",
                         "bookingCode": "G",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LVbe0F4w4qAWaQhR",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T20:10-08:00",
                           "departureTime": "2016-11-19T18:20-08:00",
                           "origin": "SFO",
                           "destination": "SEA",
                           "originTerminal": "I",
                           "duration": 110,
                           "onTimePerformance": 95,
                           "mileage": 678,
                           "secure": true
                          }
                         ],
                         "connectionDuration": 95
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 329,
                         "flight": {
                          "carrier": "AS",
                          "number": "10"
                         },
                         "id": "G0b8qICoc6Ues-Do",
                         "cabin": "COACH",
                         "bookingCode": "V",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L2NifldwBW12LqPD",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-20T06:14-05:00",
                           "departureTime": "2016-11-19T21:45-08:00",
                           "origin": "SEA",
                           "destination": "MCO",
                           "duration": 329,
                           "onTimePerformance": 100,
                           "mileage": 2549,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 548,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 380,
                         "flight": {
                          "carrier": "AS",
                          "number": "9"
                         },
                         "id": "G1PVT4py8vGUXIUg",
                         "cabin": "COACH",
                         "bookingCode": "B",
                         "bookingCodeCount": 5,
                         "marriedSegmentGroup": "2",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L8EDwqRYUaEpyrOl",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T11:20-08:00",
                           "departureTime": "2016-11-26T08:00-05:00",
                           "origin": "MCO",
                           "destination": "SEA",
                           "duration": 380,
                           "mileage": 2549,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 40
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 128,
                         "flight": {
                          "carrier": "AS",
                          "number": "306"
                         },
                         "id": "GOugVgaqTWolQWl5",
                         "cabin": "COACH",
                         "bookingCode": "G",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "3",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LPXXXa6+Fmi76qPc",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T14:08-08:00",
                           "departureTime": "2016-11-26T12:00-08:00",
                           "origin": "SEA",
                           "destination": "SFO",
                           "destinationTerminal": "I",
                           "duration": 128,
                           "mileage": 678,
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "carrier": "AS",
                         "origin": "SFO",
                         "destination": "SEA",
                         "basisCode": "G21N4"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "ACFNPP5Jz7STIDw6ZMY4YhqKim2dSqM1haP+kDZZ3Be6",
                         "carrier": "AS",
                         "origin": "SEA",
                         "destination": "ORL",
                         "basisCode": "V14N4"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "Axn/XJgiLOuzd2ji2KsKVziKQQ23kddAWcntV3mqJMKQ",
                         "carrier": "AS",
                         "origin": "ORL",
                         "destination": "SEA",
                         "basisCode": "B07N3"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "carrier": "AS",
                         "origin": "SEA",
                         "destination": "SFO",
                         "basisCode": "G21N4"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "segmentId": "GOugVgaqTWolQWl5"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "Axn/XJgiLOuzd2ji2KsKVziKQQ23kddAWcntV3mqJMKQ",
                         "segmentId": "G1PVT4py8vGUXIUg"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "ACFNPP5Jz7STIDw6ZMY4YhqKim2dSqM1haP+kDZZ3Be6",
                         "segmentId": "G0b8qICoc6Ues-Do"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "segmentId": "GwBOLXS2CvXe1-TY"
                        }
                       ],
                       "baseFareTotal": "USD880.94",
                       "saleFareTotal": "USD880.94",
                       "saleTaxTotal": "USD111.26",
                       "saleTotal": "USD992.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2,
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD66.06"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD18.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO AS X/SEA 74.42G21N4 AS MCO 261.40V14N4 AS X/SEA 470.70B07N3 AS SFO 74.42G21N4 USD 880.94 END ZP SFO SEA MCO SEA XT 66.06US 16.00ZP 11.20AY 18.00XF SFO4.50 SEA4.50 MCO4.50 SEA4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3968.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00D",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 674,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 120,
                         "flight": {
                          "carrier": "AS",
                          "number": "315"
                         },
                         "id": "GFSG8JDUQ1kHdJ8V",
                         "cabin": "COACH",
                         "bookingCode": "G",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Ltzm3HKL4bG28sXy",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T18:00-08:00",
                           "departureTime": "2016-11-19T16:00-08:00",
                           "origin": "SFO",
                           "destination": "SEA",
                           "originTerminal": "I",
                           "duration": 120,
                           "mileage": 678,
                           "secure": true
                          }
                         ],
                         "connectionDuration": 225
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 329,
                         "flight": {
                          "carrier": "AS",
                          "number": "10"
                         },
                         "id": "G0b8qICoc6Ues-Do",
                         "cabin": "COACH",
                         "bookingCode": "V",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L2NifldwBW12LqPD",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-20T06:14-05:00",
                           "departureTime": "2016-11-19T21:45-08:00",
                           "origin": "SEA",
                           "destination": "MCO",
                           "duration": 329,
                           "onTimePerformance": 100,
                           "mileage": 2549,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 548,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 380,
                         "flight": {
                          "carrier": "AS",
                          "number": "9"
                         },
                         "id": "G1PVT4py8vGUXIUg",
                         "cabin": "COACH",
                         "bookingCode": "B",
                         "bookingCodeCount": 5,
                         "marriedSegmentGroup": "2",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L8EDwqRYUaEpyrOl",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T11:20-08:00",
                           "departureTime": "2016-11-26T08:00-05:00",
                           "origin": "MCO",
                           "destination": "SEA",
                           "duration": 380,
                           "mileage": 2549,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 40
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 128,
                         "flight": {
                          "carrier": "AS",
                          "number": "306"
                         },
                         "id": "GOugVgaqTWolQWl5",
                         "cabin": "COACH",
                         "bookingCode": "G",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "3",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LPXXXa6+Fmi76qPc",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T14:08-08:00",
                           "departureTime": "2016-11-26T12:00-08:00",
                           "origin": "SEA",
                           "destination": "SFO",
                           "destinationTerminal": "I",
                           "duration": 128,
                           "mileage": 678,
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "carrier": "AS",
                         "origin": "SFO",
                         "destination": "SEA",
                         "basisCode": "G21N4"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "ACFNPP5Jz7STIDw6ZMY4YhqKim2dSqM1haP+kDZZ3Be6",
                         "carrier": "AS",
                         "origin": "SEA",
                         "destination": "ORL",
                         "basisCode": "V14N4"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "Axn/XJgiLOuzd2ji2KsKVziKQQ23kddAWcntV3mqJMKQ",
                         "carrier": "AS",
                         "origin": "ORL",
                         "destination": "SEA",
                         "basisCode": "B07N3"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "carrier": "AS",
                         "origin": "SEA",
                         "destination": "SFO",
                         "basisCode": "G21N4"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "segmentId": "GFSG8JDUQ1kHdJ8V"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "segmentId": "GOugVgaqTWolQWl5"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "Axn/XJgiLOuzd2ji2KsKVziKQQ23kddAWcntV3mqJMKQ",
                         "segmentId": "G1PVT4py8vGUXIUg"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "ACFNPP5Jz7STIDw6ZMY4YhqKim2dSqM1haP+kDZZ3Be6",
                         "segmentId": "G0b8qICoc6Ues-Do"
                        }
                       ],
                       "baseFareTotal": "USD880.94",
                       "saleFareTotal": "USD880.94",
                       "saleTaxTotal": "USD111.26",
                       "saleTotal": "USD992.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2,
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD66.06"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD18.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO AS X/SEA 74.42G21N4 AS MCO 261.40V14N4 AS X/SEA 470.70B07N3 AS SFO 74.42G21N4 USD 880.94 END ZP SFO SEA MCO SEA XT 66.06US 16.00ZP 11.20AY 18.00XF SFO4.50 SEA4.50 MCO4.50 SEA4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD3984.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE005",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 326,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 326,
                         "flight": {
                          "carrier": "UA",
                          "number": "292"
                         },
                         "id": "GX5FgVkZ6jOIaMQT",
                         "cabin": "COACH",
                         "bookingCode": "Q",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L07ODKiH3dcCUGaT",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-19T21:36-05:00",
                           "departureTime": "2016-11-19T13:10-08:00",
                           "origin": "SFO",
                           "destination": "MCO",
                           "originTerminal": "3",
                           "duration": 326,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 360,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 360,
                         "flight": {
                          "carrier": "UA",
                          "number": "759"
                         },
                         "id": "GIK51MNghoeL+Gnt",
                         "cabin": "COACH",
                         "bookingCode": "U",
                         "bookingCodeCount": 9,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lj9e+pa1QkDp62G9",
                           "aircraft": "753",
                           "arrivalTime": "2016-11-26T10:00-08:00",
                           "departureTime": "2016-11-26T07:00-05:00",
                           "origin": "MCO",
                           "destination": "SFO",
                           "destinationTerminal": "3",
                           "duration": 360,
                           "onTimePerformance": 90,
                           "mileage": 2441,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "QFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GX5FgVkZ6jOIaMQT"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD900.46",
                       "saleFareTotal": "USD900.46",
                       "saleTaxTotal": "USD95.74",
                       "saleTotal": "USD996.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD67.54"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD9.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD8.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 389.77QFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 900.46 END ZP SFO MCO XT 67.54US 8.00ZP 11.20AY 9.00XF SFO4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      },
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "carrier": "UA",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "QFA07AFN"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "carrier": "UA",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "UFA00AFN"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AdrYBDKGL87Jw03mrdifqasVTNJMl1Txy8NIWCp+HyXI",
                         "segmentId": "GX5FgVkZ6jOIaMQT"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "A9WTclaj+MzP8Tly9dFpAssL7YkhSVEPoiLyRMu5OS52",
                         "segmentId": "GIK51MNghoeL+Gnt"
                        }
                       ],
                       "baseFareTotal": "USD900.46",
                       "saleFareTotal": "USD900.46",
                       "saleTaxTotal": "USD95.74",
                       "saleTotal": "USD996.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD67.54"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD9.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD8.00"
                        }
                       ],
                       "fareCalculation": "SFO UA ORL Q18.60 389.77QFA07AFN UA SFO Q27.91 464.18UFA00AFN USD 900.46 END ZP SFO MCO XT 67.54US 8.00ZP 11.20AY 9.00XF SFO4.50 MCO4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "CNN"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD4120.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00F",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 674,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 120,
                         "flight": {
                          "carrier": "AS",
                          "number": "315"
                         },
                         "id": "GFSG8JDUQ1kHdJ8V",
                         "cabin": "COACH",
                         "bookingCode": "G",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Ltzm3HKL4bG28sXy",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T18:00-08:00",
                           "departureTime": "2016-11-19T16:00-08:00",
                           "origin": "SFO",
                           "destination": "SEA",
                           "originTerminal": "I",
                           "duration": 120,
                           "mileage": 678,
                           "secure": true
                          }
                         ],
                         "connectionDuration": 225
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 329,
                         "flight": {
                          "carrier": "AS",
                          "number": "10"
                         },
                         "id": "G0b8qICoc6Ues-Do",
                         "cabin": "COACH",
                         "bookingCode": "V",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L2NifldwBW12LqPD",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-20T06:14-05:00",
                           "departureTime": "2016-11-19T21:45-08:00",
                           "origin": "SEA",
                           "destination": "MCO",
                           "duration": 329,
                           "onTimePerformance": 100,
                           "mileage": 2549,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 669,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 380,
                         "flight": {
                          "carrier": "AS",
                          "number": "9"
                         },
                         "id": "G1PVT4py8vGUXIUg",
                         "cabin": "COACH",
                         "bookingCode": "B",
                         "bookingCodeCount": 5,
                         "marriedSegmentGroup": "2",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L8EDwqRYUaEpyrOl",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T11:20-08:00",
                           "departureTime": "2016-11-26T08:00-05:00",
                           "origin": "MCO",
                           "destination": "SEA",
                           "duration": 380,
                           "mileage": 2549,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 160
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 129,
                         "flight": {
                          "carrier": "AS",
                          "number": "388"
                         },
                         "id": "G3iqBmaxw5NDNt7B",
                         "cabin": "COACH",
                         "bookingCode": "V",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "3",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LaiB7Qun-bqAeam7",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T16:09-08:00",
                           "departureTime": "2016-11-26T14:00-08:00",
                           "origin": "SEA",
                           "destination": "SFO",
                           "destinationTerminal": "I",
                           "duration": 129,
                           "onTimePerformance": 86,
                           "mileage": 678,
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "carrier": "AS",
                         "origin": "SFO",
                         "destination": "SEA",
                         "basisCode": "G21N4"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "ACFNPP5Jz7STIDw6ZMY4YhqKim2dSqM1haP+kDZZ3Be6",
                         "carrier": "AS",
                         "origin": "SEA",
                         "destination": "ORL",
                         "basisCode": "V14N4"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "Axn/XJgiLOuzd2ji2KsKVziKQQ23kddAWcntV3mqJMKQ",
                         "carrier": "AS",
                         "origin": "ORL",
                         "destination": "SEA",
                         "basisCode": "B07N3"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "Ah6kiFhgXPZBxY00P5N8vpmA4Xdxow3SAqwoXH223QTk",
                         "carrier": "AS",
                         "origin": "SEA",
                         "destination": "SFO",
                         "basisCode": "V21N4"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "segmentId": "GFSG8JDUQ1kHdJ8V"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "Axn/XJgiLOuzd2ji2KsKVziKQQ23kddAWcntV3mqJMKQ",
                         "segmentId": "G1PVT4py8vGUXIUg"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "ACFNPP5Jz7STIDw6ZMY4YhqKim2dSqM1haP+kDZZ3Be6",
                         "segmentId": "G0b8qICoc6Ues-Do"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "Ah6kiFhgXPZBxY00P5N8vpmA4Xdxow3SAqwoXH223QTk",
                         "segmentId": "G3iqBmaxw5NDNt7B"
                        }
                       ],
                       "baseFareTotal": "USD916.29",
                       "saleFareTotal": "USD916.29",
                       "saleTaxTotal": "USD113.91",
                       "saleTotal": "USD1030.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2,
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD68.71"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD18.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO AS X/SEA 74.42G21N4 AS MCO 261.40V14N4 AS X/SEA 470.70B07N3 AS SFO 109.77V21N4 USD 916.29 END ZP SFO SEA MCO SEA XT 68.71US 16.00ZP 11.20AY 18.00XF SFO4.50 SEA4.50 MCO4.50 SEA4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD4120.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00E",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 534,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 110,
                         "flight": {
                          "carrier": "AS",
                          "number": "331"
                         },
                         "id": "GwBOLXS2CvXe1-TY",
                         "cabin": "COACH",
                         "bookingCode": "G",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LVbe0F4w4qAWaQhR",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-19T20:10-08:00",
                           "departureTime": "2016-11-19T18:20-08:00",
                           "origin": "SFO",
                           "destination": "SEA",
                           "originTerminal": "I",
                           "duration": 110,
                           "onTimePerformance": 95,
                           "mileage": 678,
                           "secure": true
                          }
                         ],
                         "connectionDuration": 95
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 329,
                         "flight": {
                          "carrier": "AS",
                          "number": "10"
                         },
                         "id": "G0b8qICoc6Ues-Do",
                         "cabin": "COACH",
                         "bookingCode": "V",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L2NifldwBW12LqPD",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-20T06:14-05:00",
                           "departureTime": "2016-11-19T21:45-08:00",
                           "origin": "SEA",
                           "destination": "MCO",
                           "duration": 329,
                           "onTimePerformance": 100,
                           "mileage": 2549,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 669,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 380,
                         "flight": {
                          "carrier": "AS",
                          "number": "9"
                         },
                         "id": "G1PVT4py8vGUXIUg",
                         "cabin": "COACH",
                         "bookingCode": "B",
                         "bookingCodeCount": 5,
                         "marriedSegmentGroup": "2",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "L8EDwqRYUaEpyrOl",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T11:20-08:00",
                           "departureTime": "2016-11-26T08:00-05:00",
                           "origin": "MCO",
                           "destination": "SEA",
                           "duration": 380,
                           "mileage": 2549,
                           "meal": "Food for Purchase",
                           "secure": true
                          }
                         ],
                         "connectionDuration": 160
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 129,
                         "flight": {
                          "carrier": "AS",
                          "number": "388"
                         },
                         "id": "G3iqBmaxw5NDNt7B",
                         "cabin": "COACH",
                         "bookingCode": "V",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "3",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LaiB7Qun-bqAeam7",
                           "aircraft": "738",
                           "arrivalTime": "2016-11-26T16:09-08:00",
                           "departureTime": "2016-11-26T14:00-08:00",
                           "origin": "SEA",
                           "destination": "SFO",
                           "destinationTerminal": "I",
                           "duration": 129,
                           "onTimePerformance": 86,
                           "mileage": 678,
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "carrier": "AS",
                         "origin": "SFO",
                         "destination": "SEA",
                         "basisCode": "G21N4"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "ACFNPP5Jz7STIDw6ZMY4YhqKim2dSqM1haP+kDZZ3Be6",
                         "carrier": "AS",
                         "origin": "SEA",
                         "destination": "ORL",
                         "basisCode": "V14N4"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "Axn/XJgiLOuzd2ji2KsKVziKQQ23kddAWcntV3mqJMKQ",
                         "carrier": "AS",
                         "origin": "ORL",
                         "destination": "SEA",
                         "basisCode": "B07N3"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "Ah6kiFhgXPZBxY00P5N8vpmA4Xdxow3SAqwoXH223QTk",
                         "carrier": "AS",
                         "origin": "SEA",
                         "destination": "SFO",
                         "basisCode": "V21N4"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "Axn/XJgiLOuzd2ji2KsKVziKQQ23kddAWcntV3mqJMKQ",
                         "segmentId": "G1PVT4py8vGUXIUg"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "ACFNPP5Jz7STIDw6ZMY4YhqKim2dSqM1haP+kDZZ3Be6",
                         "segmentId": "G0b8qICoc6Ues-Do"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "Ah6kiFhgXPZBxY00P5N8vpmA4Xdxow3SAqwoXH223QTk",
                         "segmentId": "G3iqBmaxw5NDNt7B"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AOBdRYQqugpRDyEBcCYJ7D701YLoyuGH9/89q2eI+mWg",
                         "segmentId": "GwBOLXS2CvXe1-TY"
                        }
                       ],
                       "baseFareTotal": "USD916.29",
                       "saleFareTotal": "USD916.29",
                       "saleTaxTotal": "USD113.91",
                       "saleTotal": "USD1030.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2,
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD68.71"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD18.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO AS X/SEA 74.42G21N4 AS MCO 261.40V14N4 AS X/SEA 470.70B07N3 AS SFO 109.77V21N4 USD 916.29 END ZP SFO SEA MCO SEA XT 68.71US 16.00ZP 11.20AY 18.00XF SFO4.50 SEA4.50 MCO4.50 SEA4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT"
                      }
                     ]
                    },
                    {
                     "kind": "qpxexpress#tripOption",
                     "saleTotal": "USD6604.80",
                     "id": "UxmKrVgAn1QV8qGKeSnUnE00G",
                     "slice": [
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 395,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 80,
                         "flight": {
                          "carrier": "VX",
                          "number": "922"
                         },
                         "id": "G97C3ETRJ2EffPbJ",
                         "cabin": "COACH",
                         "bookingCode": "Y",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "0",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LWB46aohGtDjGlLW",
                           "aircraft": "319",
                           "arrivalTime": "2016-11-19T08:20-08:00",
                           "departureTime": "2016-11-19T07:00-08:00",
                           "origin": "SFO",
                           "destination": "LAX",
                           "originTerminal": "2",
                           "destinationTerminal": "3",
                           "duration": 80,
                           "mileage": 337,
                           "secure": true
                          }
                         ],
                         "connectionDuration": 35
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 280,
                         "flight": {
                          "carrier": "VX",
                          "number": "312"
                         },
                         "id": "GoucDHYowunbGBWG",
                         "cabin": "COACH",
                         "bookingCode": "Y",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "1",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LgCXMqiO1TPkLBCN",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-19T16:35-05:00",
                           "departureTime": "2016-11-19T08:55-08:00",
                           "origin": "LAX",
                           "destination": "MCO",
                           "originTerminal": "3",
                           "duration": 280,
                           "onTimePerformance": 90,
                           "mileage": 2212,
                           "secure": true
                          }
                         ]
                        }
                       ]
                      },
                      {
                       "kind": "qpxexpress#sliceInfo",
                       "duration": 480,
                       "segment": [
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 330,
                         "flight": {
                          "carrier": "VX",
                          "number": "315"
                         },
                         "id": "GWnmaG4FwfuGYbI5",
                         "cabin": "COACH",
                         "bookingCode": "Y",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "2",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "Lc3H6ckgG6UztyqN",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-26T20:00-08:00",
                           "departureTime": "2016-11-26T17:30-05:00",
                           "origin": "MCO",
                           "destination": "LAX",
                           "destinationTerminal": "3",
                           "duration": 330,
                           "mileage": 2212,
                           "secure": true
                          }
                         ],
                         "connectionDuration": 60
                        },
                        {
                         "kind": "qpxexpress#segmentInfo",
                         "duration": 90,
                         "flight": {
                          "carrier": "VX",
                          "number": "947"
                         },
                         "id": "Gxl86Xdh9p-LAC+T",
                         "cabin": "COACH",
                         "bookingCode": "Y",
                         "bookingCodeCount": 7,
                         "marriedSegmentGroup": "3",
                         "leg": [
                          {
                           "kind": "qpxexpress#legInfo",
                           "id": "LB+Ufw6hD03OyYPA",
                           "aircraft": "320",
                           "arrivalTime": "2016-11-26T22:30-08:00",
                           "departureTime": "2016-11-26T21:00-08:00",
                           "origin": "LAX",
                           "destination": "SFO",
                           "originTerminal": "3",
                           "destinationTerminal": "2",
                           "duration": 90,
                           "mileage": 337,
                           "secure": true
                          }
                         ]
                        }
                       ]
                      }
                     ],
                     "pricing": [
                      {
                       "kind": "qpxexpress#pricingInfo",
                       "fare": [
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AFjwm9SF/Oea840KolWPoKL+B5MsVBW3R8FyT6KU",
                         "carrier": "VX",
                         "origin": "SFO",
                         "destination": "ORL",
                         "basisCode": "YQVX"
                        },
                        {
                         "kind": "qpxexpress#fareInfo",
                         "id": "AFjwm9SF/Oea840KolWPoKL+B5MsVBW3R8FyT6KU",
                         "carrier": "VX",
                         "origin": "ORL",
                         "destination": "SFO",
                         "basisCode": "YQVX"
                        }
                       ],
                       "segmentPricing": [
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AFjwm9SF/Oea840KolWPoKL+B5MsVBW3R8FyT6KU",
                         "segmentId": "Gxl86Xdh9p-LAC+T"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AFjwm9SF/Oea840KolWPoKL+B5MsVBW3R8FyT6KU",
                         "segmentId": "GWnmaG4FwfuGYbI5"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AFjwm9SF/Oea840KolWPoKL+B5MsVBW3R8FyT6KU",
                         "segmentId": "GoucDHYowunbGBWG"
                        },
                        {
                         "kind": "qpxexpress#segmentPricing",
                         "fareId": "AFjwm9SF/Oea840KolWPoKL+B5MsVBW3R8FyT6KU",
                         "segmentId": "G97C3ETRJ2EffPbJ"
                        }
                       ],
                       "baseFareTotal": "USD1493.96",
                       "saleFareTotal": "USD1493.96",
                       "saleTaxTotal": "USD157.24",
                       "saleTotal": "USD1651.20",
                       "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 2,
                        "childCount": 2
                       },
                       "tax": [
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "US_001",
                         "chargeType": "GOVERNMENT",
                         "code": "US",
                         "country": "US",
                         "salePrice": "USD112.04"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "AY_001",
                         "chargeType": "GOVERNMENT",
                         "code": "AY",
                         "country": "US",
                         "salePrice": "USD11.20"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "XF",
                         "chargeType": "GOVERNMENT",
                         "code": "XF",
                         "country": "US",
                         "salePrice": "USD18.00"
                        },
                        {
                         "kind": "qpxexpress#taxInfo",
                         "id": "ZP",
                         "chargeType": "GOVERNMENT",
                         "code": "ZP",
                         "country": "US",
                         "salePrice": "USD16.00"
                        }
                       ],
                       "fareCalculation": "SFO VX X/LAX VX ORL 746.98YQVX VX X/LAX VX SFO 746.98YQVX USD 1493.96 END ZP SFO LAX MCO LAX XT 112.04US 16.00ZP 11.20AY 18.00XF SFO4.50 LAX4.50 MCO4.50 LAX4.50",
                       "latestTicketingTime": "2016-04-05T23:59-04:00",
                       "ptc": "ADT",
                       "refundable": true
                      }
                     ]
                    }
                   ]
                  }
                 };


ProcessAPICall('Google', TestRequest,1)