function addPuntosSeguros() {
    map.loadImage('marker.png', (error, image) => {
if (error) throw error;
// Add the loaded image to the style's sprite with the ID 'marker'.
map.addImage('marker', image);
});
    var url = 'datos/puntosSeguros.geojson';
    map.addSource('puntoseguro', { type: 'geojson', data: url});

         map.addLayer({
    'id': 'puntoseguro',
    'type': 'symbol',
    'source': 'puntoseguro',
 
    'layout': {
        'icon-image': 'marker',
        'icon-size': 0.04
        
        }


    });}



        
    function addRutasEvacuacion() {

        var url = 'datos/rutaEvacuacion.geojson';
        map.addSource('rutaEvacuacion', { type: 'geojson', data: url});
    
             map.addLayer({
        'id': 'rutaEvacuacion',
        'type': 'line',
        'source': 'rutaEvacuacion',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#091593',
        'line-width': 4,
    

        }
        });
    
    } 
