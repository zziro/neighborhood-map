//List of restaurants by default
var restaurantArray = [
            {
                "id": "4b8f02e6f964a520674433e3",
                "name": "Tip Top",
                "location": {
                    "address": "Av. Arenales 2499",
                    "lat": -12.088884211317911,
                    "lng": -77.03480243682861,                                        
                    "formattedAddress": [
                        "Av. Arenales 2499",
                        "Lince, Lince",
                        "14",
                        "Peru"
                    ]
                }
            },
            {
                "name": "Belgravia",
                "location": {
                    "address": "Av. Arenales 2304",
                    "lat": -12.087279323951003,
                    "lng": -77.03521168612379,                                        
                    "formattedAddress": [
                        "Av. Arenales 2304",
                        "Lince, Lince",
                        "14",
                        "Peru"
                    ]
                }
                
            },
            {
                "name": "Siete Sopas",
                "location": {
                    "address": "Av. Arequipa 2394 - Lince, Lima, PE",
                    "lat": -12.088067369139226,
                    "lng": -77.03408327484738,                    
                    "formattedAddress": [
                        "Av. Arequipa 2394 - Lince, Lima, PE",
                        "Lince, Lima",
                        "Peru"
                    ]
                }
            },
            {
                "name": "La Estrellita del Sur",
                "location": {
                    "address": "Jr. Pedro Conde 413",
                    "crossStreet": "esq. Ignacio Merino",
                    "lat": -12.087839158775465,
                    "lng": -77.03203202114824,                    
                    "formattedAddress": [
                        "Jr. Pedro Conde 413 (esq. Ignacio Merino)",
                        "Lince, Lince",
                        "14",
                        "Peru"
                    ]
                }
            },
            {
                "name": "McDonald's",
                "location": {
                    "address": "Av. Arenales 2201",
                    "crossStreet": "C.C. Risso",
                    "lat": -12.08625755562936,
                    "lng": -77.03432981843673,                   
                    "formattedAddress": [
                        "Av. Arenales 2201 (C.C. Risso)",
                        "Lince, Lince",
                        "14",
                        "Peru"
                    ]
                }
            },
            {
                "name": "El Sanguchón",
                "location": {
                    "address": "Av. Arenales 284",
                    "lat": -12.091971807667733,
                    "lng": -77.03451146744399,                   
                    "formattedAddress": [
                        "Av. Arenales 284",
                        "San Isidro",
                        "Peru"
                    ]
                }
            },
            {
                "name": "Villa Chicken",
                "location": {
                    "address": "Av. Arequipa 2399",
                    "lat": -12.087995018014157,
                    "lng": -77.03367878879551,                   
                    "formattedAddress": [
                        "Av. Arequipa 2399",
                        "Lince",
                        "Peru"
                    ]
                }
            },
            {
                "name": "La Bodega de la Trattoria",
                "location": {
                    "address": "Dos de Mayo 700",
                    "crossStreet": "Las Palmeras",
                    "lat": -12.091483466954775,
                    "lng": -77.03895490686477,                   
                    "formattedAddress": [
                        "Dos de Mayo 700 (Las Palmeras)",
                        "San Isidro, San Isidro",
                        "Peru"
                    ]
                }
            },
            {
                "name": "El Hornero",
                "location": {
                    "address": "Av. Dos de Mayo 758",
                    "crossStreet": "san Isidro",
                    "lat": -12.091412493316076,
                    "lng": -77.03941535090337,
                    "formattedAddress": [
                        "Av. Dos de Mayo 758 (san Isidro)",
                        "Lince",
                        "Peru"
                    ]
                }
            },
            {
                "name": "El Carajito",
                "location": {
                    "address": "Av. José Leal 825",
                    "lat": -12.085813358769025,
                    "lng": -77.04166841241211,
                    "formattedAddress": [
                        "Av. José Leal 825",
                        "Lince, Lince",
                        "14",
                        "Peru"
                    ]
                }
            },
            {
                "name": "Pollos Hilton",
                "location": {
                    "address": "Av. Julio C. Tello 802",
                    "lat": -12.086657232880633,
                    "lng": -77.04143475604067,
                    "formattedAddress": [
                        "Av. Julio C. Tello 802",
                        "Lince, Lince",
                        "Peru"
                    ]
                }
            },
            {
                "name": "San Ceferino",
                "location": {
                    "address": "Av. Dos de Mayo 793",
                    "lat": -12.091417900306997,
                    "lng": -77.03952947413173,
                    "formattedAddress": [
                        "Av. Dos de Mayo 793",
                        "Lince, San Isidro",
                        "27",
                        "Peru"
                    ]
                }
            },
            {
                "name": "KFC",
                "location": {
                    "address": "Av. Arequipa 1980",
                    "crossStreet": "esq. Bernardo Alcedo",
                    "lat": -12.084422946063658,
                    "lng": -77.03447385875401,
                    "formattedAddress": [
                        "Av. Arequipa 1980 (esq. Bernardo Alcedo)",
                        "Lince, Lince",
                        "14",
                        "Peru"
                    ]
                }
            },
            {
                "name": "Chili's",
                "location": {
                    "address": "Av. Dos de Mayo 860",
                    "lat": -12.091547860417212,
                    "lng": -77.0402903622021,                
                    "formattedAddress": [
                        "Av. Dos de Mayo 860",
                        "Lince, San Isidro",
                        "27",
                        "Peru"
                    ]
                }
            },
            {
                "name": "EDO Sushi Bar",
                "location": {
                    "address": "Av. Basadre 275",
                    "crossStreet": "Calle Machayputto",
                    "lat": -12.093636244443335,
                    "lng": -77.03467484094024,
                    "formattedAddress": [
                        "Av. Basadre 275 (Calle Machayputto)",
                        "San Isidro",
                        "Peru"
                    ]
                }
            }
        ];

//client_id and client_secret 
var client_id = "0OXCBO1IKUOX0CPCP11BONC5LIPHG31BFS5VYJAAQ5IHDJUD";
var client_secret = "KEIHP2TY2OQJMYIIRZ3WDIUQ03RTCCPG0QWXTAGZR1ZS5JT2";

var map;
var markers = [];

var foursquareUrl = "https://api.foursquare.com/v2/venues/search";
var venue, address, contentString;

//Location's constructor
var Location = function(data) {    
    this.name = data.name;
    this.location = data.location;
    this.show = ko.observable(true);
}

//Main function that is called after authentication
function initApp() {

    //Current postition
    var myLatLng = {
        lat: -12.088593,
        lng: -77.036646        
    };

    map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 15
    });

    var infoWindow = new google.maps.InfoWindow();

    //Goinf through defaul list and generating makers    
    for (j = 0; j < restaurantArray.length; j++) {
        (function() {
            var name = restaurantArray[j].name;
            var location = restaurantArray[j].location;

            var marker = new google.maps.Marker({
                position: location,
                map: map,
                name: name,
                animation: google.maps.Animation.DROP,
                address: address
            });
            markers.push(marker);

            viewModel.places()[j].marker = marker;

            //Trigger a window with restaurant's information
            marker.addListener('click', function() {
                showInfo(this, infoWindow);
                infoWindow.setContent(contentString);
            });

            //Making a AJAX call to load places from foursquare
            $.ajax({
                url: foursquareUrl,
                dataType: "json",
                 data:{
                    categoryId: "4d4b7105d754a06374d81259",
                    ll: "-12.088593,-77.036646",
                    limit: "100",
                    radius: "600",
                    client_id: client_id,
                    client_secret: client_secret,
                    v: "20180505"
                },
                success: function(data) {                    
                    contentString = "<div class='name'>" + "Name: " + "<span class='info'>" + name + "</span></div>" +
                                    "<div class='address'>" + "Location: " + "<span class='info'>" + location.formattedAddress + "</span></div>";
                    marker.contentString;
                },
                error: function() {
                    contentString = "<div class='name'>Unable to load information. Please try later.</div>";
                }
            });

        })(j);

    }
}

//Populated info once the user make a click at the marker
function showInfo(marker, infoWindow) {
    if (infoWindow.marker != marker) {
        infoWindow.marker = marker;
        infoWindow.setContent('<div>' + marker.title + '</div>' + marker.contentString);                    
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 3000);
        infoWindow.open(map, marker);
        infoWindow.addListener('closeclick', function() {
            infoWindow.setMarker = null;
        });
    }
} 

//If for some reason there are problems with the google authentication
function showException() {
    alert("There is problem with authentincation process.");
}

//Model
var viewModel = function() {
    var self = this;    
    this.places = ko.observableArray();
    this.filterName = ko.observable('');    

    //Binding places into html
    for (i = 0; i < restaurantArray.length; i++) {        
        self.places.push(new Location(restaurantArray[i]));
    }
    
    //Search functionality
    this.searchFilter = ko.computed(function() {
        var filter = self.filterName().toLowerCase();        
        for (j = 0; j < self.places().length; j++) {     
            if (self.places()[j].name.toLowerCase().indexOf(filter) > -1) {
                self.places()[j].show(true);
                if (self.places()[j].marker) {
                    self.places()[j].marker.setVisible(true); 
                }
            } else {
                self.places()[j].show(false);                
                self.places()[j].marker.setVisible(false); 
                
            }
        }
    });

    //Show places afte click in the default list
    this.showPlace = function(locations) {
        google.maps.event.trigger(locations.marker, 'click');
    };
};

//Instanciate the viewModel
viewModel = new viewModel();

//Activate knockout to allow binding
ko.applyBindings(viewModel);
