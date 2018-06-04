/*
 * Project 5 : Neighborhood Map Project
 * Front-end Web Developer
 * 02/06/2016
 * Author - Aanya
 */

// JSON to store default places and their info

var Model = function () {
	var self = this;
	self.defaultLocations = [
	{
				"name": "Millennium Park",
				"lat": "41.88275795650019",
				"lng": "-87.6234769821167",
				"address":  '<div id="content">'+
							'<div id="siteNotice">'+
							'</div>'+
							'<h1 id="firstHeading" class="firstHeading">Millennium Park</h1>'+
							'<div id="bodyContent">'+
							'<p><b>Address : </b>201 E Randolph St</div>'+
							'</div>'
			},
			{
				"name": "Maggie Daley Park",
				"lat": "41.88226699008485",
				"lng": "-87.61931523742211",
				"address": '<div id="content">'+
							'<div id="siteNotice">'+
							'</div>'+
							'<h1 id="firstHeading" class="firstHeading">Maggie Daley Park</h1>'+
							'<div id="bodyContent">'+
							'<p><b>Address : </b>337 E Randolph St</div>'+
							'</div>'
			},
			{
				"name": "Wildberry Pancakes & Cafe",
				"lat": "41.88152229427951",
				"lng": "-87.62257876767818",
				"address": '<div id="content">'+
							'<div id="siteNotice">'+
							'</div>'+
							'<h1 id="firstHeading" class="firstHeading">Wildberry Pancakes & Cafe</h1>'+
							'<div id="bodyContent">'+
							'<p><b>Address : </b>130 E Randolph St </div>'+
							'</div>'
			},
			{
				"name": "Roosevelt University",
				"lat": "41.88130642478955",
				"lng": "-87.62447796757591",
				"address": '<div id="content">'+
							'<div id="siteNotice">'+
							'</div>'+
							'<h1 id="firstHeading" class="firstHeading">Roosevelt University</h1>'+
							'<div id="bodyContent">'+
							'<p><b>Address : </b>430 S Michigan Ave </div>'+
							'</div>'
			},
			{
				"name": "Ferrari Carano Table At Chicago Gourmet",
				"lat": "41.88220763862383",
				"lng": "-87.62315721255037",
				"address": '<div id="content">'+
							'<div id="siteNotice">'+
							'</div>'+
							'<h1 id="firstHeading" class="firstHeading">Ferrari Carano Table At Chicago Gourmet</h1>'+
							'<div id="bodyContent">'+
							'<p><b>Address : </b>Randolph And Michigan Avenue</div>'+
							'</div>'
			},
			{
				"name": "Lurie Garden",
				"lat": "41.88149449437012",
				"lng": "-87.62178339402973",
				"address": '<div id="content">'+
							'<div id="siteNotice">'+
							'</div>'+
							'<h1 id="firstHeading" class=Lurie Garden</h1>'+
							'<div id="bodyContent">'+
							'<p><b>Address : </b>Millennium Park, Chicago, Illinois </div>'+
							'</div>'
				
			}
	];
	
};


// Declaring global variables

var model = new Model();
var loc = model.defaultLocations;
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
			+ Client_secret + '&v=20151207';


//-------------------------------------------------------------
// Load data from JSON into respective arrays
//-------------------------------------------------------------
var defaultList = function(loc) {
		var i = 0;
		
		for(i = 0; i < loc.length; i++) {
			namesInListArr.push(loc[i].name);
			latArr.push(loc[i].lat);
			lngArr.push(loc[i].lng);
			contentInfoArr.push(loc[i].address);
		}
		
	};

//-------------------------------------------------------------
// Only 6 default locations are provided rest of the locations 
// and their info is loaded from FourSquare API
//-------------------------------------------------------------

var getFoursquareList = function(){
		
	$.getJSON(foursquareUrlFirst).done(function(data) {
			 $.each(data.response.venues, function(i,venues){
			var flg = 1;
			for(i=0; i < namesInListArr.length; i++)
				{
					// Using If - Else to check whether the place name fetched by foursquare
					// does not exist in deafult locations list
					// This prevents from having duplicate places
					
					if(venues.name.toLowerCase() == namesInListArr[i].toLowerCase())
					{
						flg = 2;
					//	print("here");
					}
				}
			if( flg == 1)
			{

				var locJSON =  '<div id="content">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h1 id="firstHeading" class="firstHeading">'+ venues.name + '</h1>'+
				'<div id="bodyContent">'+
				'<p><b>Address : </b>' + venues.location.address + '</div>'+
				'</div>';

					namesInListArr.push(venues.name);
					latArr.push(venues.location.lat.toString());
					lngArr.push(venues.location.lng.toString());
					contentInfoArr.push(locJSON);
					namesInListArrCopy.push(venues.name);
			}
		});

			// Due to the reason that default list items were only being displayed 
			// as data from foursquare was being loaded at the end even after using
			// document ready, calling viewmodel at this point works best in my case

			ViewModel();
			initMap();
			createMarkers(namesInListArr);
			createInfowindows(namesInListArr);
			ko.applyBindings(new ViewModel());
			
			})
			.fail(function(error){
				alert("failed to load page because of error : " + error.status);
				console.log(error);
			});

	};
	
// Print functions for debugging

var printArr = function(data) {
	var t = 0;
	for(t = 0; t < data.length; t++)
	{
		console.log(data[t]);
	}
	
};

//var print = function(data) {
//		console.log(data);
//}
	
	

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
		var str = "this is in search";
		var data = self.query().toLowerCase();
		//print(str);
		//print (data);
		self.defaultKoList.removeAll();

		for(i = 0; i < namesInListArr.length; i++) {
			if(namesInListArr[i].toLowerCase().indexOf(data) >= 0)
			{
				self.defaultKoList.push(new koLocationEntry(namesInListArr[i]));
				markers[i].setVisible(true);
			}
			else
			{
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
			//print(itemAt);
			for(i = 0; i < namesInListArr.length; i++) {
				if ( itemAt.toLowerCase() == namesInListArr[i].toLowerCase())
				{
					toggleBounce( markers[i]);
					var infowindow = new google.maps.InfoWindow({
						content: contentInfoArr[i]
					});
					infowindow.open(map, markers[i]);
					setTimeout(function(){ infowindow.close(); }, 3500);
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
		//console.log(namesInListArr[i]);
		
			marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: parseFloat(latArr[i]), lng: parseFloat(lngArr[i])}
			
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
				setTimeout(function(){ infowindow.close(); }, 3500);
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
		setTimeout(function(){ marker.setAnimation(null); }, 3500);
	}
}

//-------------------------------------------------------------
// Initialize Map
//-------------------------------------------------------------

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat: parseFloat(latArr[0]), lng: parseFloat(lngArr[0])}
	});
	infowindow = new google.maps.InfoWindow();
}

function googleError() {
	alert("failed to load page ");
}

$(document).ready(function() {
	//defaultList(loc);
});

$(document).ready(function() {
	getFoursquareList();

});
