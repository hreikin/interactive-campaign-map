        var map = L.map('mapid').setView(new L.LatLng(0,0), 0);
            L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-start/', { 
                width: 8318, 
                height: 3640,          
            });
    
        var playerIcon = L.icon({
            iconUrl: 'images/players.png',
            iconSize: [38, 38],
        });

        var battleIcon = L.icon({
            iconUrl: 'images/battles.png',
            iconSize: [50, 50],
        });
        
        var redplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var turquoiseplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var lightgreenplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var yellowplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var blueplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var orangeplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var purpleplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var greenplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var darkblueplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var lightblueplayerpopup = 'Player information can go here, it could include details such as army/gang/faction and a link to their list or roster. The icon can be set to any image, it could be either a profile picture of the player or a recognisable army/gang/faction mark.';
        
        var redplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var redplayerstage01battle02popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var lightgreenplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var yellowplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var yellowplayerstage01battle02popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var blueplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var orangeplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var purpleplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var purpleplayerstage01battle02popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var greenplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var darkblueplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var lightblueplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var turquoiseplayerstage01battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var turquoiseplayerstage01battle02popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        
        var redplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var lightgreenplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var yellowplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var blueplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var orangeplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var purpleplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var greenplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var darkblueplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var lightblueplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var lightblueplayerstage02battle02popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';
        var turquoiseplayerstage02battle01popup = 'Battle information and results can go here with a link to any results/league tables. The icon can be set to any image.';

        var redplayer = L.marker([83.8, -165.5], {icon: playerIcon}).bindPopup(redplayerpopup);
        var lightgreenplayer = L.marker([81.5, -134.5], {icon: playerIcon}).bindPopup(lightgreenplayerpopup);
        var yellowplayer = L.marker([80.5, -94.5], {icon: playerIcon}).bindPopup(yellowplayerpopup);
        var blueplayer = L.marker([82.5, -60.5], {icon: playerIcon}).bindPopup(blueplayerpopup);
        var orangeplayer = L.marker([83.0, -18.0], {icon: playerIcon}).bindPopup(orangeplayerpopup);
        var purpleplayer = L.marker([79.0, -9.0], {icon: playerIcon}).bindPopup(purpleplayerpopup);
        var greenplayer = L.marker([75.8, -44.0], {icon: playerIcon}).bindPopup(greenplayerpopup);
        var darkblueplayer = L.marker([74.9, -77.8], {icon: playerIcon}).bindPopup(darkblueplayerpopup);
        var lightblueplayer = L.marker([73.9, -112.5], {icon: playerIcon}).bindPopup(lightblueplayerpopup);
        var turquoiseplayer = L.marker([75.0, -155.5], {icon: playerIcon}).bindPopup(turquoiseplayerpopup);

        var players = L.layerGroup([redplayer, lightgreenplayer, yellowplayer, blueplayer, orangeplayer, purpleplayer, greenplayer, darkblueplayer, lightblueplayer, turquoiseplayer]).addTo(map);

        var redplayerstage01battle01 = L.marker([84.6, -169.5], {icon: battleIcon}).bindPopup(redplayerstage01battle01popup);
        var redplayerstage01battle02 = L.marker([84.6, -159.5], {icon: battleIcon}).bindPopup(redplayerstage01battle02popup);
        var lightgreenplayerstage01battle01 = L.marker([83.5, -134.5], {icon: battleIcon}).bindPopup(lightgreenplayerstage01battle01popup);
        var yellowplayerstage01battle01 = L.marker([83.5, -89.3], {icon: battleIcon}).bindPopup(yellowplayerstage01battle01popup);
        var yellowplayerstage01battle02 = L.marker([80.5, -85.3], {icon: battleIcon}).bindPopup(yellowplayerstage01battle02popup);
        var blueplayerstage01battle01 = L.marker([82.5, -44.5], {icon: battleIcon}).bindPopup(blueplayerstage01battle01popup);
        var orangeplayerstage01battle01 = L.marker([84.4, -23.0], {icon: battleIcon}).bindPopup(orangeplayerstage01battle01popup);
        var purpleplayerstage01battle01 = L.marker([83.0, -3.0], {icon: battleIcon}).bindPopup(purpleplayerstage01battle01popup);
        var purpleplayerstage01battle02 = L.marker([81.0, -2.0], {icon: battleIcon}).bindPopup(purpleplayerstage01battle02popup);
        var greenplayerstage01battle01 = L.marker([75.8, -30.0], {icon: battleIcon}).bindPopup(greenplayerstage01battle01popup);
        var darkblueplayerstage01battle01 = L.marker([77.9, -75.8], {icon: battleIcon}).bindPopup(darkblueplayerstage01battle01popup);
        var lightblueplayerstage01battle01 = L.marker([70.9, -110.5], {icon: battleIcon}).bindPopup(lightblueplayerstage01battle01popup);
        var turquoiseplayerstage01battle01 = L.marker([75.5, -141.5], {icon: battleIcon}).bindPopup(turquoiseplayerstage01battle01popup);
        var turquoiseplayerstage01battle02 = L.marker([75.5, -128.5], {icon: battleIcon}).bindPopup(turquoiseplayerstage01battle02popup);
        
        var redplayerstage02battle01 = L.marker([84.6, -169.5], {icon: battleIcon}).bindPopup(redplayerstage02battle01popup);
        var lightgreenplayerstage02battle01 = L.marker([83.5, -134.5], {icon: battleIcon}).bindPopup(lightgreenplayerstage02battle01popup);
        var yellowplayerstage02battle01 = L.marker([83.5, -89.3], {icon: battleIcon}).bindPopup(yellowplayerstage02battle01popup);
        var blueplayerstage02battle01 = L.marker([82.5, -44.5], {icon: battleIcon}).bindPopup(blueplayerstage02battle01popup);
        var orangeplayerstage02battle01 = L.marker([84.4, -23.0], {icon: battleIcon}).bindPopup(orangeplayerstage02battle01popup);
        var purpleplayerstage02battle01 = L.marker([83.0, -3.0], {icon: battleIcon}).bindPopup(purpleplayerstage02battle01popup);
        var greenplayerstage02battle01 = L.marker([75.8, -30.0], {icon: battleIcon}).bindPopup(greenplayerstage02battle01popup);
        var darkblueplayerstage02battle01 = L.marker([77.9, -75.8], {icon: battleIcon}).bindPopup(darkblueplayerstage02battle01popup);
        var lightblueplayerstage02battle01 = L.marker([70.9, -110.5], {icon: battleIcon}).bindPopup(lightblueplayerstage02battle01popup);
        var lightblueplayerstage02battle02 = L.marker([75.5, -128.5], {icon: battleIcon}).bindPopup(lightblueplayerstage02battle02popup);
        var turquoiseplayerstage02battle01 = L.marker([75.5, -141.5], {icon: battleIcon}).bindPopup(turquoiseplayerstage02battle01popup);

        var playersstage01 = L.layerGroup([redplayerstage01battle01, redplayerstage01battle02, lightgreenplayerstage01battle01, yellowplayerstage01battle01, yellowplayerstage01battle02, blueplayerstage01battle01, orangeplayerstage01battle01, purpleplayerstage01battle01, purpleplayerstage01battle02, greenplayerstage01battle01, darkblueplayerstage01battle01, lightblueplayerstage01battle01, turquoiseplayerstage01battle01, turquoiseplayerstage01battle02]);

        var redplayerstage02battle01 = L.marker([84.6, -139.5], {icon: battleIcon}).bindPopup(redplayerstage02battle01popup);
        var lightgreenplayerstage02battle01 = L.marker([79.5, -128.5], {icon: battleIcon}).bindPopup(lightgreenplayerstage02battle01popup);
        var yellowplayerstage02battle01 = L.marker([83.0, -99.0], {icon: battleIcon}).bindPopup(yellowplayerstage02battle01popup);
        var blueplayerstage02battle01 = L.marker([81.0, -57.5], {icon: battleIcon}).bindPopup(blueplayerstage02battle01popup);
        var orangeplayerstage02battle01 = L.marker([84.4, -14.0], {icon: battleIcon}).bindPopup(orangeplayerstage02battle01popup);
        var purpleplayerstage02battle01 = L.marker([76.0, -9.0], {icon: battleIcon}).bindPopup(purpleplayerstage02battle01popup);
        var greenplayerstage02battle01 = L.marker([79.8, -30.0], {icon: battleIcon}).bindPopup(greenplayerstage02battle01popup);
        var darkblueplayerstage02battle01 = L.marker([77.9, -86.0], {icon: battleIcon}).bindPopup(darkblueplayerstage02battle01popup);
        var lightblueplayerstage02battle01 = L.marker([77.5, -126.5], {icon: battleIcon}).bindPopup(lightblueplayerstage02battle01popup);
        var lightblueplayerstage02battle02 = L.marker([71.9, -90.0], {icon: battleIcon}).bindPopup(lightblueplayerstage02battle02popup);
        var turquoiseplayerstage02battle01 = L.marker([76.5, -111.5], {icon: battleIcon}).bindPopup(turquoiseplayerstage02battle01popup);

        var playersstage02 = L.layerGroup([redplayerstage02battle01, lightgreenplayerstage02battle01, yellowplayerstage02battle01, blueplayerstage02battle01, orangeplayerstage02battle01, purpleplayerstage02battle01, greenplayerstage02battle01, darkblueplayerstage02battle01, lightblueplayerstage02battle01, lightblueplayerstage02battle02, turquoiseplayerstage02battle01]);



        var start = L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-start/', {
            width: 8318, 
            height: 3640, 
            tolerance: 0.9, 
            layers: [stage01, stage02, players, playersstage01, playersstage02], 
            attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'
            }).addTo(map),

            stage01 = L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-stage-01/', {
            width: 8318, 
            height: 3640, 
            tolerance: 0.9, 
            layers: [stage01, stage02, players, playersstage01, playersstage02], 
            attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'
            }),

            stage02 = L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-stage-02/', {
            width: 8318, 
            height: 3640, 
            tolerance: 0.9, 
            layers: [stage01, stage02, players, playersstage01, playersstage02], 
            attribution: 'Map by <a href="https://hreikin.co.uk" target="_blank" alt="hreikin">@hreikin</a>'
            });

        var baseMaps = {
            "Campaign Start": start,
            "Campaign Stage 01": stage01,
            "Campaign Stage 02": stage02
        };

        var overlayMaps = {
            "Players": players,
            "Stage 1 Battles": playersstage01,
            "Stage 2 Battles": playersstage02
            };

        L.control.layers(baseMaps, overlayMaps).addTo(map);
        
    