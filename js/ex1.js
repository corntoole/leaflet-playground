var map = L.map('map').setView([32.3601, -90.1544], 15);
var lat = 32.37475;
var lng = -90.15294;

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '/js/config.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

var config = null;
function init() {
	loadJSON(function(resp){
			config = JSON.parse(resp);
			console.log(config);
			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+config.mapboxAccessToken, {
				maxZoom: 18,
				id: 'mapbox.streets',
				accessToken: config.mapboxAccessToken
			}).addTo(map);
	});
}
init();

var latElm = document.querySelector('#lat');
var lngElm = document.querySelector('#lng');

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
		latElm.innerHTML = e.latlng.lat;
		lngElm.innerHTML = e.latlng.lng;
}
map.on('click', onMapClick);


var marker1 = L.marker([32.35868, -90.15761]).addTo(map);
var marker2 = L.marker([32.3631, -90.1538]).addTo(map);
