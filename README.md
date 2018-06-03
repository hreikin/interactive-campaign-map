# Interactive Campaign Map

The interactive campaign map repository contains a few files and folders which i will outline below.

- **images :** Contains files used for custom markers, player icons, etc.
- **interactive-campaign-map-stage-01 :** Contains map tiles for stage 01 of the demo campaign.
- **interactive-campaign-map-stage-02 :** Contains map tiles for stage 02 of the demo campaign.
- **interactive-campaign-map-start :** Contains map tiles for the beginning of the demo campaign.
- **L.TileLayer.Zoomify.js :** This file allows us to display Zoomify tiles with Leaflet and is originally provided by the repository available [here](https://github.com/turban/Leaflet.Zoomify). There have been no changes made to this file and it is only included in this repository to keep things simple and allow the demo map to work ‘out of the box’.
- **README.md :** The README file of the repository which includes basic information to guide you through the process of creating an interactive campaign map.
- **interactive-campaign-map.html :** HTML file used to display the interactive campaign map demo.
- **interactive-campaign-map.js :** Javascript file which contains the code for the interactive campaign map demo.

## How To Guide

A detailed explanation and guide is available to view [here](https://www.hreikin.co.uk/2018/06/03/creating-an-interactive-campaign-map-with-leaflet/).

Requires [Zoomify](http://www.zoomify.com/free.htm). Fullscreen demo available to view [here](https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map.html).

## Demo Map Explanation

Once you have cloned this repository, to run the demo map simply open the file named 'interactive-campaign-map.html' in a web browser. You should be greeted by the default map which shows the starting points of the demo campaigns players. The map works just like a normal map you would find on the likes of google with zooming and panning responding to input from a touch screen device or mouse like normal. 

You can click on the player icons to bring up popups and a layers filter is available in the top right corner. All marker icons can be customised to represent whatever you need but in this simple demo we only have 2, one for the players and one for battles. If you open up the layers control in the top right corner you can choose which map to show and there is also a filter for you to choose which markers you want to display on the map. These markers can all be clicked and include a popup which can be used to include whatever information you see fit.
