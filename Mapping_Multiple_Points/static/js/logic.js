// Add console.log to check to see if our code is working
console.log("working");

// Create the tile layer that will be the background of our map
// In this case we're using the dark-style
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a circle marker to the map for Los Angeles, CA
// (radius of 300 pixel radius (default is 10 pixels), black outline, yellow fillColor, see-through/opacity adjusted)
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: '#ffffa1'
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
