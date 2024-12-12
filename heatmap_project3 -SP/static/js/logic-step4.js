// Creating the map object
let myMap = L.map("map", {
  center: [40.0583, -74.4057],
  zoom: 7
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
let geoData = "https://services2.arcgis.com/XVOqAjTOJ5P6ngMu/arcgis/rest/services/NJ_Municipal_Boundaries_3424/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";

// Get the data with d3.
d3.json(geoData).then(function(data) {

  // Create a new choropleth layer.
  let geojson = L.choropleth(data, {

    // Define which property in the features to use.
    valueProperty: "POPDEN2020",

    // Set the color scale.
    scale: ["#ffffb2", "#b10026"],

    // The number of breaks in the step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },


    // Binding a popup to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br /><br />Population Density 2020: " +
        feature.properties.POPDEN2020 );
    }
  }).addTo(myMap);

  function chooseColor(POPDEN2020) {
    var color = "";
    if (POPDEN2020 >= -10 && POPDEN2020 <= 10) {
        return color = "#98ee00";
    }
    else if (POPDEN2020 > 10 && POPDEN2020 <= 30) {
        return color = "#d4ee00";
    }
    else if (POPDEN2020 > 30 && POPDEN2020 <= 50) {
        return color = "#eecc00";
    }
    else if (POPDEN2020 > 50 && POPDEN2020 <= 70) {
        return color =  "#ee9c00";
    }
    else if (POPDEN2020 > 70 && POPDEN2020 <= 90) {
        return color = "#ea822c";
    }
    else if (90 < POPDEN2020) {
        return color = "#ea2c2c";
    }
    else {
        return color = "black";
    }
  }

  // Set up the legend.
  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let limits = geojson.options.limits;
    let colors = geojson.options.colors;
    let labels = [];

    // Add the minimum and maximum.
    let legendInfo = "<h1>Polulation Density<br />(2020)</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding the legend to the map
  legend.addTo(myMap);

});
