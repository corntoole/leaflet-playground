var map = L.map('map').setView([32.37475, -90.15294], 17);
var lat = 32.37475;
var lng = -90.15294;

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY29ybnRvb2xlIiwiYSI6ImNpa2w4dHdlZTBoODZ1Mm02aWZ1M3kwbjIifQ.dtwedSAYlUcU9tQrhxBf0A', {
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken:  'pk.eyJ1IjoiY29ybnRvb2xlIiwiYSI6ImNpa2w4dHdlZTBoODZ1Mm02aWZ1M3kwbjIifQ.dtwedSAYlUcU9tQrhxBf0A'
}).addTo(map);

var latElm = document.querySelector('#lat');
var lngElm = document.querySelector('#lng');
console.log(latElm, lngElm);
console.log('ex1.js loaded');
