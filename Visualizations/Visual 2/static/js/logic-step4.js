// Store API endpoints
let stationsQueryUrl = "https://services6.arcgis.com/M0t0HPE53pFK525U/arcgis/rest/services/NJTransit_Rail_Stations/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";
let geoDataUrl = "https://services2.arcgis.com/XVOqAjTOJ5P6ngMu/arcgis/rest/services/NJ_Municipal_Boundaries_3424/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";
let transitLinesUrl = "https://services6.arcgis.com/M0t0HPE53pFK525U/arcgis/rest/services/NJTRANSIT_RAIL_LINES_1/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";
let railNetworkUrl = "https://services.arcgis.com/HggmsDF7UJsNN1FK/arcgis/rest/services/Railroads_Network/FeatureServer/1/query?outFields=*&where=1%3D1&f=geojson";

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
let choroplethDensityLayer;
let choroplethPopulationLayer;
let railroadsLayer;
let railLinesLayer;

// Load and add stations layer
d3.json(stationsQueryUrl).then(function(data) {
  stationsLayer = L.geoJSON(data.features, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<b>Station: </b>' + feature.properties.STATION_ID);
    }
  });
}).catch(function(error) {
  console.error("Error loading station data:", error);
});

// Load and add choropleth layer for Population Density
d3.json(geoDataUrl).then(function(data) {
  choroplethDensityLayer = L.choropleth(data, {
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
}).catch(function(error) {
  console.error("Error loading population density data:", error);
});

// Load and add choropleth layer for Population
d3.json(geoDataUrl).then(function(data) {
  choroplethPopulationLayer = L.choropleth(data, {
    valueProperty: "POP2020",
    scale: ["#ffffb2", "#b10026"],
    steps: 10,
    mode: "q",
    style: {
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br />Population (2020): " + feature.properties.POP2020);
    }
  });
}).catch(function(error) {
  console.error("Error loading population data:", error);
});

// Load and add railroads layer
d3.json(railNetworkUrl).then(function(data) {
  railroadsLayer = L.geoJSON(data, {
    style: {
      color: "blue",
      weight: 2
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<strong>Railroad:</strong> ' + feature.properties.LINE_NAME);
    }
  });
}).catch(function(error) {
  console.error("Error loading railroads data:", error);
});

// Load and add rail lines layer
d3.json(transitLinesUrl).then(function(data) {
  railLinesLayer = L.geoJSON(data, {
    style: {
      color: "green",
      weight: 2
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<strong>Rail Line:</strong> ' + feature.properties.LINE_NAME);
    }
  });
}).catch(function(error) {
  console.error("Error loading rail lines data:", error);
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
  <label><input type="checkbox" id="toggleChoroplethDensity"> Show Population Density</label><br>
  <label><input type="checkbox" id="toggleChoroplethPopulation"> Show Total Population</label><br>
  <label><input type="checkbox" id="toggleRailroads"> Show Railroads</label><br>
  <label><input type="checkbox" id="toggleRailLines"> Show Rail Lines</label>
`;

document.body.appendChild(selectorContainer);

// Toggle functionality
let toggleMarkers = document.getElementById("toggleMarkers");
let toggleChoroplethDensity = document.getElementById("toggleChoroplethDensity");
let toggleChoroplethPopulation = document.getElementById("toggleChoroplethPopulation");
let toggleRailroads = document.getElementById("toggleRailroads");
let toggleRailLines = document.getElementById("toggleRailLines");

toggleMarkers.addEventListener("change", function() {
  if (toggleMarkers.checked) {
    if (stationsLayer) myMap.addLayer(stationsLayer);
  } else {
    if (stationsLayer) myMap.removeLayer(stationsLayer);
  }
});

toggleChoroplethDensity.addEventListener("change", function() {
  if (toggleChoroplethDensity.checked) {
    if (choroplethDensityLayer) myMap.addLayer(choroplethDensityLayer);
  } else {
    if (choroplethDensityLayer) myMap.removeLayer(choroplethDensityLayer);
  }
});

toggleChoroplethPopulation.addEventListener("change", function() {
  if (toggleChoroplethPopulation.checked) {
    if (choroplethPopulationLayer) myMap.addLayer(choroplethPopulationLayer);
  } else {
    if (choroplethPopulationLayer) myMap.removeLayer(choroplethPopulationLayer);
  }
});

toggleRailroads.addEventListener("change", function() {
  if (toggleRailroads.checked) {
    if (railroadsLayer) myMap.addLayer(railroadsLayer);
  } else {
    if (railroadsLayer) myMap.removeLayer(railroadsLayer);
  }
});

toggleRailLines.addEventListener("change", function() {
  if (toggleRailLines.checked) {
    if (railLinesLayer) myMap.addLayer(railLinesLayer);
  } else {
    if (railLinesLayer) myMap.removeLayer(railLinesLayer);
  }
});
