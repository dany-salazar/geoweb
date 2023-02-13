function addRutas() {

    var url = 'datos/rutas.geojson';
    map.addSource('rutas', { type: 'geojson', data: url});

         map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'rutas',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#ff0000',
    'line-width': 3
    }
    });

} //fin funcion
function zoomToRutas(valores) {

    var coord = valores.split("/");

    map.flyTo({
            center: [coord[2], coord[1]],
            zoom: coord[0]
        });
    }

    function addPlacas() {

        var url = 'datos/placas.geojson';
        map.addSource('placas', { type: 'geojson', data: url});
    
             map.addLayer({
        'id': 'placas',
        'type': 'line',
        'source': 'placas',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#ff0000',
        'line-width': 3,
        'line-dasharray':[6.2,6.2]

        }
        });
    
    } 

    function addLahares() {

        var url = 'datos/lahares2.geojson';
        map.addSource('lahares', { type: 'geojson', data: url});
    
             map.addLayer({
        'id': 'lahares',
        'type': 'fill',
        'source': 'lahares',
     
        'paint': {
        'fill-color': '#ff0000',
        'fill-opacity': 0.3,
        'fill-antialias': true,
        'fill-outline-color':  '#ffffff '
            
        }
        });
    
    } 