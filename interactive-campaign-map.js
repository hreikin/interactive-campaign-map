//Creates the map, tells it to display in the element with id of 'mapid' and sets the inital latitude, longitude and zoom values. Change the URL to reflect where you are hosting your map tiles. Width and Height of original image MUST be defined.
var map = L.map('mapid').setView(new L.LatLng(0,0), 0);
    L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-start/', { 
        width: 8318, 
        height: 3640,          
    });

// Create the icon used for the player markers. May be changed to any image you wish.
var playerIcon = L.icon({
    iconUrl: 'images/players.png',
    iconSize: [38, 38],
});

// Create the icon used for the battle markers. May be changed to any image you wish.
var battleIcon = L.icon({
    iconUrl: 'images/battles.png',
    iconSize: [50, 50],
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
var redPlayer = L.marker([83.8, -165.5], {icon: playerIcon}).bindPopup(redPlayerPopup);
var lightGreenPlayer = L.marker([81.5, -134.5], {icon: playerIcon}).bindPopup(lightgreenPlayerPopup);
var yellowPlayer = L.marker([80.5, -94.5], {icon: playerIcon}).bindPopup(yellowPlayerPopup);
var bluePlayer = L.marker([82.5, -60.5], {icon: playerIcon}).bindPopup(bluePlayerPopup);
var orangePlayer = L.marker([83.0, -18.0], {icon: playerIcon}).bindPopup(orangePlayerPopup);
var purplePlayer = L.marker([79.0, -9.0], {icon: playerIcon}).bindPopup(purplePlayerPopup);
var greenPlayer = L.marker([75.8, -44.0], {icon: playerIcon}).bindPopup(greenPlayerPopup);
var darkBluePlayer = L.marker([74.9, -77.8], {icon: playerIcon}).bindPopup(darkBluePlayerPopup);
var lightBluePlayer = L.marker([73.9, -112.5], {icon: playerIcon}).bindPopup(lightBluePlayerPopup);
var turquoisePlayer = L.marker([75.0, -155.5], {icon: playerIcon}).bindPopup(turquoisePlayerPopup);

// Creates a group of player markers to be added to layer control later. Adds player markers to map.
var players = L.layerGroup([redPlayer, lightGreenPlayer, yellowPlayer, bluePlayer, orangePlayer, purplePlayer, greenPlayer, darkBluePlayer, lightBluePlayer, turquoisePlayer]).addTo(map);

// Creates the stage 01 battle markers, sets the latitude and longitude. Passes options for custom icon and custom popup values.
var redPlayerStage01Battle01 = L.marker([84.6, -169.5], {icon: battleIcon}).bindPopup(redPlayerStage01Battle01Popup);
var redPlayerStage01Battle02 = L.marker([84.6, -159.5], {icon: battleIcon}).bindPopup(redPlayerStage01Battle02Popup);
var lightGreenPlayerStage01Battle01 = L.marker([83.5, -134.5], {icon: battleIcon}).bindPopup(lightGreenPlayerStage01Battle01Popup);
var yellowPlayerStage01Battle01 = L.marker([83.5, -89.3], {icon: battleIcon}).bindPopup(yellowPlayerStage01Battle01Popup);
var yellowPlayerStage01Battle02 = L.marker([80.5, -85.3], {icon: battleIcon}).bindPopup(yellowPlayerStage01Battle02Popup);
var bluePlayerStage01Battle01 = L.marker([82.5, -44.5], {icon: battleIcon}).bindPopup(bluePlayerStage01Battle01Popup);
var orangePlayerStage01Battle01 = L.marker([84.4, -23.0], {icon: battleIcon}).bindPopup(orangePlayerStage01Battle01Popup);
var purplePlayerStage01Battle01 = L.marker([83.0, -3.0], {icon: battleIcon}).bindPopup(purplePlayerStage01Battle01Popup);
var purplePlayerStage01Battle02 = L.marker([81.0, -2.0], {icon: battleIcon}).bindPopup(purplePlayerStage01Battle02Popup);
var greenPlayerStage01Battle01 = L.marker([75.8, -30.0], {icon: battleIcon}).bindPopup(greenPlayerStage01Battle01Popup);
var darkBluePlayerStage01Battle01 = L.marker([77.9, -75.8], {icon: battleIcon}).bindPopup(darkBluePlayerStage01Battle01Popup);
var lightBluePlayerStage01Battle01 = L.marker([70.9, -110.5], {icon: battleIcon}).bindPopup(lightBluePlayerStage01Battle01Popup);
var turquoisePlayerStage01Battle01 = L.marker([75.5, -141.5], {icon: battleIcon}).bindPopup(turquoisePlayerStage01Battle01Popup);
var turquoisePlayerStage01Battle02 = L.marker([75.5, -128.5], {icon: battleIcon}).bindPopup(turquoisePlayerStage01Battle02Popup);

// Creates a group of stage 01 battle markers to be added to layer control later.
var battlesStage01 = L.layerGroup([redPlayerStage01Battle01, redPlayerStage01Battle02, lightGreenPlayerStage01Battle01, yellowPlayerStage01Battle01, yellowPlayerStage01Battle02, bluePlayerStage01Battle01, orangePlayerStage01Battle01, purplePlayerStage01Battle01, purplePlayerStage01Battle02, greenPlayerStage01Battle01, darkBluePlayerStage01Battle01, lightBluePlayerStage01Battle01, turquoisePlayerStage01Battle01, turquoisePlayerStage01Battle02]);

// Creates the stage 02 battle markers, sets the latitude and longitude. Passes options for custom icon and custom popup values.
var redPlayerStage02Battle01 = L.marker([84.6, -139.5], {icon: battleIcon}).bindPopup(redPlayerStage02Battle01Popup);
var lightGreenPlayerStage02Battle01 = L.marker([79.5, -128.5], {icon: battleIcon}).bindPopup(lightGreenPlayerStage02Battle01Popup);
var yellowPlayerStage02Battle01 = L.marker([83.0, -99.0], {icon: battleIcon}).bindPopup(yellowPlayerStage02Battle01Popup);
var bluePlayerStage02Battle01 = L.marker([81.0, -57.5], {icon: battleIcon}).bindPopup(bluePlayerStage02Battle01Popup);
var orangePlayerStage02Battle01 = L.marker([84.4, -14.0], {icon: battleIcon}).bindPopup(orangePlayerStage02Battle01Popup);
var purplePlayerStage02Battle01 = L.marker([76.0, -9.0], {icon: battleIcon}).bindPopup(purplePlayerStage02Battle01Popup);
var greenPlayerStage02Battle01 = L.marker([79.8, -30.0], {icon: battleIcon}).bindPopup(greenPlayerStage02Battle01Popup);
var darkBluePlayerStage02Battle01 = L.marker([77.9, -86.0], {icon: battleIcon}).bindPopup(darkBluePlayerStage02Battle01Popup);
var lightBluePlayerStage02Battle01 = L.marker([77.5, -126.5], {icon: battleIcon}).bindPopup(lightBluePlayerStage02Battle01Popup);
var lightBluePlayerStage02Battle02 = L.marker([71.9, -90.0], {icon: battleIcon}).bindPopup(lightBluePlayerStage02Battle02Popup);
var turquoisePlayerStage02Battle01 = L.marker([76.5, -111.5], {icon: battleIcon}).bindPopup(turquoisePlayerStage02Battle01Popup);

// Creates a group of stage 02 battle markers to be added to layer control later.
var battlesStage02 = L.layerGroup([redPlayerStage02Battle01, lightGreenPlayerStage02Battle01, yellowPlayerStage02Battle01, bluePlayerStage02Battle01, orangePlayerStage02Battle01, purplePlayerStage02Battle01, greenPlayerStage02Battle01, darkBluePlayerStage02Battle01, lightBluePlayerStage02Battle01, lightBluePlayerStage02Battle02, turquoisePlayerStage02Battle01]);

//Creates the switchable map layers. Change the URL to reflect where you are hosting your map tiles. Width and Height of original image MUST be defined.
var start = L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-start/', {
    width: 8318, 
    height: 3640, 
    tolerance: 0.9, 
    layers: [stage01, stage02, players, battlesStage01, battlesStage02],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'    // Change this value to whatever you like.
    }).addTo(map),

    stage01 = L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-stage-01/', {
    width: 8318, 
    height: 3640, 
    tolerance: 0.9, 
    layers: [stage01, stage02, players, battlesStage01, battlesStage02],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'    // Change this value to whatever you like.
    }),

    stage02 = L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-stage-02/', {
    width: 8318, 
    height: 3640, 
    tolerance: 0.9, 
    layers: [stage01, stage02, players, battlesStage01, battlesStage02],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'    // Change this value to whatever you like.
    });

// Creates baseMaps layer and passes which maps to include in the layers control.
var baseMaps = {
    "Campaign Start": start,
    "Campaign Stage 01": stage01,
    "Campaign Stage 02": stage02
};

// Creates overlayMaps layer and passes which marker groups to include in the layers control.
var overlayMaps = {
    "Players": players,
    "Stage 1 Battles": battlesStage01,
    "Stage 2 Battles": battlesStage02
    };

// Creates a switchable layers control from baseMaps and overlayMaps and adds them to map.
L.control.layers(baseMaps, overlayMaps).addTo(map);

