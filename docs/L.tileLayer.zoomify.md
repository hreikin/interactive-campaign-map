Leaflet.Zoomify
==========
## Description
A tiny simple plugin for [Leaflet](http://leafletjs.com) to load Zoomify tiles from the TileGroup directories. It also corrects the arbritary boundary tiles that do not always have the standard square dimensions.

## Requirements
- Leaflet 1.0.0-b1 (or later)
- Zoomify tile source

## Example
See the [example](http://cmulders.github.io/Leaflet.Zoomify/examples/hubble-image.html)

## Compatibility
Extends the original Leaflet TileLayer, so basically everything that `L.TileLayer` supports, is supported by this plugin.

## Usage
Just include the `L.TileLayer.Zoomify.js` file from the `src/` dir in your page and create Zoomify tile layer with your url:
```js
var layer = L.tileLayer.zoomify('http://thematicmapping.org/playground/zoomify/books/{g}/{z}-{x}-{y}.jpg', {
    width: 5472,
    height: 3648,
    attribution: '&copy; Photo: Bjørn Sandvik'
}).addTo(map);
```
Example Zoomify image by [turban](https://github.com/turban) 

## API
### Creation
| Factory | Description
| --- | --- 
| L.tileLayer.zoomify(*urlTemplate*, *options?* ) | Instantiates a Zoomify tile layer object given a URL template and optionally an options object.

#### URL template
The urlTemplate can be a regular Leaflet [url template](http://leafletjs.com/reference.html#url-template), but also has the `{g}` variable available that contains the current TileGroup number. E.g. `www.your.url/{g}/{z}-{x}-{y}.jpg`.

### Methods
| Method | Returns | Description
| --- | --- | ---
| getBounds() | `LatLngBounds` | Returns the LatLngBounds of the Zoomify layer.

### Options
You can use `TileLayer` options and additionally the following options:
#### Required
| Option | Type | Default | Description
| --- | --- | --- | ---
| width | Number | `undefined` | Width of the Zoomify image on the highest zoom. Can be found in ImageProperties.xml
| height | Number | `undefined` | Height of the Zoomify image on the highest zoom. Can be found in ImageProperties.xml

#### Optional
| Option | Type | Default | Description
| --- | --- | --- | ---
| tileGroupPrefix | String | `TileGroup` | The prefix used for the tile subdirectories
| tilesPerTileGroup | Number | `256` | The number of tiles per subdirectory

## License
This software is released under the [MIT licence](http://www.opensource.org/licenses/mit-license.php). Example image is from the [Hubble Site](http://hubblesite.org/gallery/album/nebula/pr2006001a/hires/true/).
