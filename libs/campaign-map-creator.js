var map = L.map('mapid', { 
    crs: L.CRS.Simple, //Set a flat CRS (Coordinate Reference System) projection as we are projecting an image.
    zoom: 4,
    center: [-57.5, 66.0],
    
}),
     
 zoomifyLayer = L.tileLayer.zoomify('https://hreikin.co.uk/interactive-campaign-map/interactive-campaign-map-start/{g}/{z}-{x}-{y}.jpg', {
    width: 8318,    // MUST be defined.
    height: 3640,   // MUST be defined.
 }).addTo(map),
            drawnItems = L.featureGroup();
    L.control.layers({
        'Base Map': zoomifyLayer.addTo(map),
        },
     { 'Edit Layer': drawnItems.addTo(map) }, { position: 'topleft', collapsed: false }).addTo(map);
    map.addControl(new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
            poly: {
                allowIntersection: false
            }
        },
        draw: {
            polygon: {
                allowIntersection: false,
                showArea: true
            }
        }
    }));

    map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;

        drawnItems.addLayer(layer);
    });