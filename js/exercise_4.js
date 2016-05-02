// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'alriks.019im0fj';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoiYWxyaWtzIiwiYSI6IkJ5LWVCa2cifQ.2msrjWepAZV8chiLbpBQpw';

// Create the map object with your mapId and token,
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!

var datafile='data/restaurants.geojson';

var featureLayer=L.mapbox.featureLayer();
	featureLayer.loadURL(datafile);
	featureLayer.addTo(map);

featurelayer.on('ready', function(){
	this.eachLayer(function(){
    	layer.setIcon(L.mapbox.marker.icon({
        	"marker-color": "#8834bb",
          	"marker-size": "small",
          	"marker-symbol": "restaurant"
        }))
    })
    map.fitBounds(featureLayer.getBounds());
})