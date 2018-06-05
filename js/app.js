// JSON to store default places and their info

var Model = function () {
	this .defaultLocations = [];
	
};


// Declaring global variables

var model = new Model();
var marker;
var map;
var infowindow;

var namesInListArr = [];
var namesInListArrCopy = [];
var latArr = [];
var lngArr = [];
var contentInfoArr = [];
var markers = [];
var infowindows = [];

var Client_id = "NDR1ZOVF3Z0MBQQ5JD4MSJP5VV4XJPH3QZ2YYDTMBZOB2FGA";
var Client_secret = "A5WYXL4YFJQX0KUBPIW50B0DBW5KQA3K5YZQ5MNZ2AJ015US";
var foursquareUrlFirst = 'https://api.foursquare.com/v2/venues/search?categoryId=4d4b7105d754a06374d81259&ll=-12.088593,-77.036646&limit=15&radius=600'
			+ '&client_id='
			+ Client_id + '&client_secret='
			+ Client_secret + '&v=20180604';

//-------------------------------------------------------------
// Only 6 default locations are provided rest of the locations 
// and their info is loaded from FourSquare API
//-------------------------------------------------------------

var getFoursquareList = function(){
		
	$.getJSON(foursquareUrlFirst).done(function(data) {
		$.each(data.response.venues, function(i,venues){
			var locJSON =   '<div>' + venues.name + '<br />'							
								    + venues.location.formattedAddress+
							'</div>';
				namesInListArr.push(venues.name);
				latArr.push(venues.location.lat.toString());
				lngArr.push(venues.location.lng.toString());
				contentInfoArr.push(locJSON);
				namesInListArrCopy.push(venues.name);
			
		});

			ViewModel();
			initMap();
			createMarkers(namesInListArr);
			createInfowindows(namesInListArr);
			ko.applyBindings(new ViewModel());
			
			})
			.fail(function(error){
				alert("failed to load page because of error : " + error.status);				
			});

	};
		

//-------------------------------------------------------------
//	To apply bindings set name of location as name
//-------------------------------------------------------------

var koLocationEntry = function(data) {
		this.name = data;
	};


//-------------------------------------------------------------
//	View Model code
//-------------------------------------------------------------

var ViewModel  = function() {
	var self = this;
	var i;
	//---------------------------------------------------------------------
	// view model varibles
	//---------------------------------------------------------------------
	self.defaultListItems = [];
	self.query = ko.observable('');

	
	
	for(i = 0; i < namesInListArr.length; i++) {
			{
				self.defaultListItems.push(new koLocationEntry(namesInListArr[i]));
			}
	}
	
	self.defaultKoList = ko.observableArray(self.defaultListItems);

	
	//---------------------------------------------------------------------
	// search functionality
	//---------------------------------------------------------------------	 
	self.search = function() { 		
		var data = self.query().toLowerCase();		
		self.defaultKoList.removeAll();

		for(i = 0; i < namesInListArr.length; i++) {
			if(namesInListArr[i].toLowerCase().indexOf(data) >= 0) {
				self.defaultKoList.push(new koLocationEntry(namesInListArr[i]));
				markers[i].setVisible(true);
			}else {
				markers[i].setVisible(false);
			}
			
		}
	 };

	//---------------------------------------------------------------------
	// Action for selecting place from the list : 
	// opens the infowindow and marker bounces of the clicked place 
	//---------------------------------------------------------------------
	
	 self.listClickAction = function(data) {
			
			var itemAt = data.name;			
			for(i = 0; i < namesInListArr.length; i++) {
				if ( itemAt.toLowerCase() == namesInListArr[i].toLowerCase()){
					toggleBounce( markers[i]);
					var infowindow = new google.maps.InfoWindow({
						content: contentInfoArr[i]
					});
					infowindow.open(map, markers[i]);
					setTimeout(function(){ infowindow.close(); }, 2000);
				}

		}
	};
};

//---------------------------------------------------------------------
// create places map markers
//---------------------------------------------------------------------

function createMarkers(listArr) {		
	var i;
	for (i = 0; i < listArr.length; i++) {				
		marker = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: {
			lat: parseFloat(latArr[i]), 
			lng: parseFloat(lngArr[i])
		}			
		});
		markers.push(marker);

	}
}


//---------------------------------------------------------------------
// create places infowindows
//---------------------------------------------------------------------
    
function createInfowindows(listArr) {

 for (i = 0; i < listArr.length; i++) {
	var marker = markers[i];
	google.maps.event.addListener(marker, 'click', (function(marker, i) {

			return function() {		
				toggleBounce(marker);
				infowindow.setContent(contentInfoArr[i]);
				infowindows.push(infowindow);
				infowindow.open(map, marker);
				setTimeout(function(){ infowindow.close(); }, 2000);
			};
		})(marker, i));
	}
}


//---------------------------------------------------------------------
// animare markers
//---------------------------------------------------------------------

function toggleBounce(marker) {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function(){ marker.setAnimation(null); }, 2000);
	}
}

//-------------------------------------------------------------
// Initialize Map
//-------------------------------------------------------------

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {
			lat: parseFloat(latArr[0]),
			lng: parseFloat(lngArr[0])
		}
	});
	infowindow = new google.maps.InfoWindow();
}

function exception() {
	contentString = "<div class='name'>Data is currently not available. Please try again.</div>";
}

$(document).ready(function() {
	//defaultList(loc);
});

$(document).ready(function() {
	getFoursquareList();

});
