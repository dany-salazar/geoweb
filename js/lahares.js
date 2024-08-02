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


    function addRutaTucan() {

        var url = 'datos/tucanGEojon.geojson';
        map.addSource('rutaTucan', { type: 'geojson', data: url});
    
             map.addLayer({
        'id': 'rutaTucan',
        'type': 'line',
        'source': 'rutaTucan',
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

    function addRutaQuinde() {

        var url = 'datos/quinde.geojson';
        map.addSource('quinde', { type: 'geojson', data: url});
    
             map.addLayer({
        'id': 'quinde',
        'type': 'line',
        'source': 'quinde',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#FF0000',
        'line-width': 4,
    

        }
        });
    
    } 

    function addRutaNutria() {

        var url = 'datos/nutria.geojson';
        map.addSource('nutria', { type: 'geojson', data: url});
    
             map.addLayer({
        'id': 'nutria',
        'type': 'line',
        'source': 'nutria',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#FFFF00',
        'line-width': 4,
    

        }
        });
    
    } 
    function addAbastoTucan() {
        map.loadImage('marker.png', (error, image) => {
    if (error) throw error;
    // Add the loaded image to the style's sprite with the ID 'marker'.
    map.addImage('marker', image);
    });
        var url = 'datos/abastoTucan.geojson';
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
    