// Store API endpoints
let stationsQueryUrl = "https://services6.arcgis.com/M0t0HPE53pFK525U/arcgis/rest/services/NJTransit_Rail_Stations/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";
let geoDataUrl = "https://services2.arcgis.com/XVOqAjTOJ5P6ngMu/arcgis/rest/services/NJ_Municipal_Boundaries_3424/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";

// Create the map object
let myMap = L.map("map", {
  center: [40.0583, -74.4057],
  zoom: 7
});

// Add the tile layers
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>, &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
});

// Define base maps
let baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};

// Initialize layers for toggling
let stationsLayer;
let choroplethLayer;

// Load and add stations layer
d3.json(stationsQueryUrl).then(function(data) {
  stationsLayer = L.geoJSON(data.features, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<b>Station: </b>' + feature.properties.STATION_ID);
    }
  });
});

// Load and add choropleth layer
d3.json(geoDataUrl).then(function(data) {
  choroplethLayer = L.choropleth(data, {
    valueProperty: "POPDEN2020",
    scale: ["#ffffb2", "#b10026"],
    steps: 10,
    mode: "q",
    style: {
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br />Population Density (2020): " + feature.properties.POPDEN2020);
    }
  });

  // Add legend for choropleth
  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let limits = choroplethLayer.options.limits;
    let colors = choroplethLayer.options.colors;
    let labels = [];

    let legendInfo = "<h1>Population Density<br />(2020)</h1>" +
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
  legend.addTo(myMap);
});

// Add selector for toggling layers
let selectorContainer = document.createElement("div");
selectorContainer.style.position = "absolute";
selectorContainer.style.top = "10px";
selectorContainer.style.right = "10px";
selectorContainer.style.background = "white";
selectorContainer.style.padding = "10px";
selectorContainer.style.borderRadius = "5px";
selectorContainer.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
selectorContainer.style.zIndex = "1000";

selectorContainer.innerHTML = `
  <label><input type="checkbox" id="toggleMarkers"> Show Stations</label><br>
  <label><input type="checkbox" id="toggleChoropleth"> Show Population Density</label>
`;

document.body.appendChild(selectorContainer);

// Toggle functionality
let toggleMarkers = document.getElementById("toggleMarkers");
let toggleChoropleth = document.getElementById("toggleChoropleth");

toggleMarkers.addEventListener("change", function() {
  if (toggleMarkers.checked) {
    if (stationsLayer) myMap.addLayer(stationsLayer);
  } else {
    if (stationsLayer) myMap.removeLayer(stationsLayer);
  }
});

toggleChoropleth.addEventListener("change", function() {
  if (toggleChoropleth.checked) {
    if (choroplethLayer) myMap.addLayer(choroplethLayer);
  } else {
    if (choroplethLayer) myMap.removeLayer(choroplethLayer);
  }
});
