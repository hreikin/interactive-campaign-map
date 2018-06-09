//Creates the map, tells it to display in the element with id of 'mapid' and sets a flat projection, as we are projecting an image. 
var map = L.map('mapid', { 
    crs: L.CRS.Simple, //Set a flat CRS (Coordinate Reference System) projection as we are projecting an image.
});

//Change the URL to reflect where you are hosting your map tiles. Width and Height of original image MUST be defined.
var layer = L.tileLayer.zoomify('./interactive-campaign-map-start/{g}/{z}-{x}-{y}.jpg', {
    width: 8318,    // MUST be defined.
    height: 3640,   // MUST be defined.
}).addTo(map);

//Setting the view to our layer bounds, set by our Zoomify plugin.
map.fitBounds(layer.getBounds());

// Create the icon used for the player markers. May be changed to any image you wish.
var playerIcon = L.icon({
    iconUrl: 'images/players.png',  // Location of file to be used as icon.
    iconSize: [38, 38],             // Size of icon on map.
});

// Create the icon used for the battle markers. May be changed to any image you wish.
var battleIcon = L.icon({
    iconUrl: 'images/battles.png',  // Location of file to be used as icon.
    iconSize: [50, 50],             // Size of icon on map.
});

// Create the player popup content. You can change these to include player bios, army lists, etc for each individual player. Accepts HTML content such as images and links.
var redPlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var turquoisePlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var lightgreenPlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var yellowPlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var bluePlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var orangePlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var purplePlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var greenPlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var darkBluePlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
var lightBluePlayerPopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';

// Stage 01 battles popup content. You can change these to include results, etc for each battle that occurred this stage. Accepts HTML content such as images and links.
var redPlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var redPlayerStage01Battle02Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var lightGreenPlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var yellowPlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var yellowPlayerStage01Battle02Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var bluePlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var orangePlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var purplePlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var purplePlayerStage01Battle02Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var greenPlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var darkBluePlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var lightBluePlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var turquoisePlayerStage01Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var turquoisePlayerStage01Battle02Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';

// Stage 02 battles popup content. You can change these to include results, etc for each battle that occurred this stage. Accepts HTML content such as images and links.
var redPlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var lightGreenPlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var yellowPlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var bluePlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var orangePlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var purplePlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var greenPlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var darkBluePlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var lightBluePlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var lightBluePlayerStage02Battle02Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
var turquoisePlayerStage02Battle01Popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';

// Creates the player markers, sets the latitude and longitude. Passes options for custom icon and custom popup values.
var redPlayer = L.marker([-10.0, 10.0], {icon: playerIcon}).bindPopup(redPlayerPopup);
var lightGreenPlayer = L.marker([-21.0, 33.0], {icon: playerIcon}).bindPopup(lightgreenPlayerPopup);
var yellowPlayer = L.marker([-25.0, 61.0], {icon: playerIcon}).bindPopup(yellowPlayerPopup);
var bluePlayer = L.marker([-16.0, 85.0], {icon: playerIcon}).bindPopup(bluePlayerPopup);
var orangePlayer = L.marker([-14.0, 116.0], {icon: playerIcon}).bindPopup(orangePlayerPopup);
var purplePlayer = L.marker([-32.0, 122.0], {icon: playerIcon}).bindPopup(purplePlayerPopup);
var greenPlayer = L.marker([-43.0, 97.0], {icon: playerIcon}).bindPopup(greenPlayerPopup);
var darkBluePlayer = L.marker([-44.0, 73.0], {icon: playerIcon}).bindPopup(darkBluePlayerPopup);
var lightBluePlayer = L.marker([-48.0, 49.0], {icon: playerIcon}).bindPopup(lightBluePlayerPopup);
var turquoisePlayer = L.marker([-45.0, 16.0], {icon: playerIcon}).bindPopup(turquoisePlayerPopup);

// Creates a group of player markers to be added to layer control later. Adds player markers to map.
var players = L.layerGroup([redPlayer, lightGreenPlayer, yellowPlayer, bluePlayer, orangePlayer, purplePlayer, greenPlayer, darkBluePlayer, lightBluePlayer, turquoisePlayer]).addTo(map);

// Creates the stage 01 battle markers, sets the latitude and longitude. Passes options for custom icon and custom popup values.
var redPlayerStage01Battle01 = L.marker([-3.5, 5.0], {icon: battleIcon}).bindPopup(redPlayerStage01Battle01Popup);
var redPlayerStage01Battle02 = L.marker([-4.0, 15.0], {icon: battleIcon}).bindPopup(redPlayerStage01Battle02Popup);
var lightGreenPlayerStage01Battle01 = L.marker([-13.0, 30.0], {icon: battleIcon}).bindPopup(lightGreenPlayerStage01Battle01Popup);
var yellowPlayerStage01Battle01 = L.marker([-13.0, 65.0], {icon: battleIcon}).bindPopup(yellowPlayerStage01Battle01Popup);
var yellowPlayerStage01Battle02 = L.marker([-25.0, 68.0], {icon: battleIcon}).bindPopup(yellowPlayerStage01Battle02Popup);
var bluePlayerStage01Battle01 = L.marker([-17.0, 95.0], {icon: battleIcon}).bindPopup(bluePlayerStage01Battle01Popup);
var orangePlayerStage01Battle01 = L.marker([-4.0, 111.0], {icon: battleIcon}).bindPopup(orangePlayerStage01Battle01Popup);
var purplePlayerStage01Battle01 = L.marker([-23.0, 127.0], {icon: battleIcon}).bindPopup(purplePlayerStage01Battle01Popup);
var purplePlayerStage01Battle02 = L.marker([-14.0, 125.0], {icon: battleIcon}).bindPopup(purplePlayerStage01Battle02Popup);
var greenPlayerStage01Battle01 = L.marker([-42.0, 108.0], {icon: battleIcon}).bindPopup(greenPlayerStage01Battle01Popup);
var darkBluePlayerStage01Battle01 = L.marker([-37.0, 74.0], {icon: battleIcon}).bindPopup(darkBluePlayerStage01Battle01Popup);
var lightBluePlayerStage01Battle01 = L.marker([-54.0, 50.0], {icon: battleIcon}).bindPopup(lightBluePlayerStage01Battle01Popup);
var turquoisePlayerStage01Battle01 = L.marker([-43.0, 27.0], {icon: battleIcon}).bindPopup(turquoisePlayerStage01Battle01Popup);
var turquoisePlayerStage01Battle02 = L.marker([-44.0, 37.0], {icon: battleIcon}).bindPopup(turquoisePlayerStage01Battle02Popup);

// Creates a group of stage 01 battle markers to be added to layer control later.
var battlesStage01 = L.layerGroup([redPlayerStage01Battle01, redPlayerStage01Battle02, lightGreenPlayerStage01Battle01, yellowPlayerStage01Battle01, yellowPlayerStage01Battle02, bluePlayerStage01Battle01, orangePlayerStage01Battle01, purplePlayerStage01Battle01, purplePlayerStage01Battle02, greenPlayerStage01Battle01, darkBluePlayerStage01Battle01, lightBluePlayerStage01Battle01, turquoisePlayerStage01Battle01, turquoisePlayerStage01Battle02]);

// Creates the stage 02 battle markers, sets the latitude and longitude. Passes options for custom icon and custom popup values.
var redPlayerStage02Battle01 = L.marker([-4.0, 28.0], {icon: battleIcon}).bindPopup(redPlayerStage02Battle01Popup);
var lightGreenPlayerStage02Battle01 = L.marker([-30.0, 36.0], {icon: battleIcon}).bindPopup(lightGreenPlayerStage02Battle01Popup);
var yellowPlayerStage02Battle01 = L.marker([-14.0, 58.0], {icon: battleIcon}).bindPopup(yellowPlayerStage02Battle01Popup);
var bluePlayerStage02Battle01 = L.marker([-23.0, 87.0], {icon: battleIcon}).bindPopup(bluePlayerStage02Battle01Popup);
var orangePlayerStage02Battle01 = L.marker([-4.0, 119.0], {icon: battleIcon}).bindPopup(orangePlayerStage02Battle01Popup);
var purplePlayerStage02Battle01 = L.marker([-42.0, 122.0], {icon: battleIcon}).bindPopup(purplePlayerStage02Battle01Popup);
var greenPlayerStage02Battle01 = L.marker([-30.0, 107.0], {icon: battleIcon}).bindPopup(greenPlayerStage02Battle01Popup);
var darkBluePlayerStage02Battle01 = L.marker([-37.0, 66.0], {icon: battleIcon}).bindPopup(darkBluePlayerStage02Battle01Popup);
var lightBluePlayerStage02Battle01 = L.marker([-53.0, 63.0], {icon: battleIcon}).bindPopup(lightBluePlayerStage02Battle01Popup);
var lightBluePlayerStage02Battle02 = L.marker([-40.0, 37.0], {icon: battleIcon}).bindPopup(lightBluePlayerStage02Battle02Popup);
var turquoisePlayerStage02Battle01 = L.marker([-41.0, 48.0], {icon: battleIcon}).bindPopup(turquoisePlayerStage02Battle01Popup);

// Creates a group of stage 02 battle markers to be added to layer control later.
var battlesStage02 = L.layerGroup([redPlayerStage02Battle01, lightGreenPlayerStage02Battle01, yellowPlayerStage02Battle01, bluePlayerStage02Battle01, orangePlayerStage02Battle01, purplePlayerStage02Battle01, greenPlayerStage02Battle01, darkBluePlayerStage02Battle01, lightBluePlayerStage02Battle01, lightBluePlayerStage02Battle02, turquoisePlayerStage02Battle01]);



//Creates the switchable map layers. Change the URL to reflect where you are hosting your map tiles. Width and Height of original image MUST be defined.
var start = L.tileLayer.zoomify('./interactive-campaign-map-start/{g}/{z}-{x}-{y}.jpg', {
    width: 8318,                                                                                        // MUST be defined.
    height: 3640,                                                                                       // MUST be defined.
    tolerance: 0.9, 
    layers: [stage01, stage02, players, battlesStage01, battlesStage02],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'    // Attribution which appears in the bottom left corner, change this value to whatever you like.
    }).addTo(map),

    stage01 = L.tileLayer.zoomify('./interactive-campaign-map-stage-01/{g}/{z}-{x}-{y}.jpg', {
    width: 8318,                                                                                        // MUST be defined.
    height: 3640,                                                                                       // MUST be defined.
    tolerance: 0.9, 
    layers: [stage01, stage02, players, battlesStage01, battlesStage02],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'    // Attribution which appears in the bottom left corner, change this value to whatever you like.
    }),

    stage02 = L.tileLayer.zoomify('./interactive-campaign-map-stage-02/{g}/{z}-{x}-{y}.jpg', {
    width: 8318,                                                                                        // MUST be defined.
    height: 3640,                                                                                       // MUST be defined.
    tolerance: 0.9, 
    layers: [stage01, stage02, players, battlesStage01, battlesStage02],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'    // Attribution which appears in the bottom left corner, change this value to whatever you like.
    });

// Creates baseMaps layer and passes which maps to include in the layers control.
var baseMaps = {
    "Campaign Start": start,        // The value within quotation marks is the name of the switchable control as it appears on the map. The second value is the layer name.
    "Campaign Stage 01": stage01,   // The value within quotation marks is the name of the switchable control as it appears on the map. The second value is the layer name.
    "Campaign Stage 02": stage02    // The value within quotation marks is the name of the switchable control as it appears on the map. The second value is the layer name.
};

// Creates overlayMaps layer and passes which marker groups to include in the layers control.
var overlayMaps = {
    "Players": players,                 // The value within quotation marks is the name of the switchable control as it appears on the map. The second value is the group name.
    "Stage 1 Battles": battlesStage01,  // The value within quotation marks is the name of the switchable control as it appears on the map. The second value is the group name.
    "Stage 2 Battles": battlesStage02   // The value within quotation marks is the name of the switchable control as it appears on the map. The second value is the group name.
    };

// Creates a switchable layers control from baseMaps and overlayMaps and adds them to map.
L.control.layers(baseMaps, overlayMaps).addTo(map);





