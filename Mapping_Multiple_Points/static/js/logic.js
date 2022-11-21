// Add console.log to check to see if our code is working
console.log("working");

// Create the tile layer that will be the background of our map
// (dark theme)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);


// Get data from cities.js
let cityData = cities;

// Iterate through the cities array and create one circle marker for each city
// Then Adding a popup for each city with its info
// The radius of the circle markers will reflect population (have to divide by 100000 to work)
// (adding toLocaleString() method to the population to give it a commas separator)
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "orange",
        fillColor: "orange",
        fillOpacity: 0.1
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
