
function addFarmacias() {
    //console.info(farmaciasGeoJSON);
    //var url = 'datos/ecuador.geojson';
    var url = farmaciasGeoJSON;
    map.addSource('farmacias', {
        type: 'geojson',
        data: url
    });

    map.addLayer({
        'id': 'farmacias',
        'type': 'circle',
        'source': 'farmacias',
        'paint': {
            'circle-color': [
                'case',
                ['==', ['coalesce', ['get', 'coordinador'], ''], ''], // Si "coordinador" es vacío
                '#ff0000', // Rojo
                '#00ff00'  // Verde (color por defecto)
            ],
            'circle-radius': 5,
            'circle-stroke-color': '#ffffff',
            'circle-stroke-width': 2
        }
    });


} // fin funcion


function addBeneficiarios() {

      map.loadImage('images/beneficiario.png', (error, image) => {
if (error) throw error;
// Add the loaded image to the style's sprite with the ID 'marker'.
map.addImage('beneficiario', image);
});


    
    var url = farmaciasGeoJSON;
    map.addSource('farmacias', {
        type: 'geojson',
        data: url
    });

   map.addLayer({
    'id': 'farmacias',
    'type': 'symbol',
    'source': 'farmacias',
 
    'layout': {
        'icon-image': 'beneficiario',
        'icon-size': 0.06,
  
        }
       

    });
   addgrafico();


} // fin funcion

function buscarFarmacias(valor) {

    var resultadosFarmacias = [];

   // console.info(farmaciasGeoJSON);
    for (var i = 0; i < farmaciasGeoJSON.features.length; i++) {

        var feature = farmaciasGeoJSON.features[i];

        if (feature.properties.name && 
            feature.properties.name
            .toLowerCase()
            .includes(valor.toLowerCase())
        ) {

            feature['place_name'] = `💊 ${feature.properties.name}  ${feature.properties.amenity}`;
            feature['center'] = feature.geometry.coordinates;
            feature['place_type'] = ['place'];
            resultadosFarmacias.push(feature);
        }
    }
    return resultadosFarmacias;
} // fin funcion


function addFarmaciasCercanas() {

    map.addSource('farmacias_sel', {
        type: 'geojson',
        data: {
            'type': 'FeatureCollection',
            'features': []
        }
    });

    map.addLayer({
        'id': 'farmacias_sel',
        'type': 'circle',
        'source': 'farmacias_sel',
        'paint': {
            'circle-color': '#f909b5',
            'circle-radius': 8,
            'circle-stroke-color': '#ffffff',
            'circle-stroke-width': 2
        }
    });

   map.addLayer({
        "id": "farmacias_sel_text",
        "type": "symbol",
        "source": "farmacias_sel",
        "layout": {
          'text-field': ['concat',['get', 'distancia'],' m'],
          "text-size": 15,
          'text-offset': [0, 1.3],
          'text-anchor': 'left'
        },
        'paint': {
            'text-color': '#f909b5',
            'text-halo-color': '#333333',
            'text-halo-width': 1
        }
      });

    map.on("click", "farmacias", function (e) {

        var puntoClick = turf.point([e.lngLat.lng, e.lngLat.lat]);
        var ff = farmaciasGeoJSON;

        for (var i = 0; i < ff.features.length; i++) {
            
            var puntoFarmacia = turf.point(ff.features[i].geometry.coordinates);
            var distancia = turf.distance(puntoClick, puntoFarmacia, { units: 'meters' });
            ff.features[i].properties.distancia = parseInt(distancia);

        }

        ff.features.sort(function (a, b) {
            return a.properties.distancia - b.properties.distancia
        });
        console.info(ff.features);
        map.getSource('farmacias_sel').setData(turf.featureCollection(ff.features.slice(1, 6)));

    })




    
}

function addProvincias() {

    var url = 'datos/prov.geojson';
    map.addSource('provincias', { type: 'geojson', data: url});

         map.addLayer({
    'id': 'provincias',
    'type': 'fill',
    'source': 'provincias',
 
    'paint': {
    'fill-color': '#ff0000',
    'fill-opacity': 0.1,
   
    'fill-outline-color': '#000000' // Borde negro
    
    }
    });
    map.addLayer({
        'id': 'provincias-border',
        'type': 'line',
        'source': 'provincias',
        'paint': {
            'line-color': '#000000', // Color negro
            'line-width': 2, // Ancho de la línea
            'line-opacity': 1
        }
    });

} 



function addGuaranda() {
    var url = 'datos/guarandaReproj.geojson';

    // Agregar la fuente
    map.addSource('guarandaReproj', {
        type: 'geojson',
        data: url
    });

    // Capa de relleno (fill)
    map.addLayer({
        'id': 'guarandaReproj',
        'type': 'fill',
        'source': 'guarandaReproj',
        'paint': {
            'fill-color': '#ff0000',
            'fill-opacity': 0.3,
            'fill-antialias': true,
            'fill-outline-color': ' #000000'
        }
    });
// Capa de contorno (línea negra gruesa)
map.addLayer({
    id: 'guarandaReproj-line',
    type: 'line',
    source: 'guarandaReproj',
    paint: {
        'line-color': '#000000',
        'line-width': 3 // Ajusta el grosor aquí
    }
});
    // Capa de etiquetas (symbol)
    map.addLayer({
        'id': 'guarandaLabels',
        'type': 'symbol',
        'source': 'guarandaReproj',
        'layout': {
            'text-field': '{PARROQUIA}', // 👈 Usa la propiedad correcta de tu GeoJSON
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': 14,
            'text-anchor': 'center'
        },
        'paint': {
            'text-color': '#000000',
            'text-halo-color': '#ffffff',
            'text-halo-width': 1
        }
    });
}


function addCentros() {
    map.loadImage('marker.png', (error, image) => {
if (error) throw error;
// Add the loaded image to the style's sprite with the ID 'marker'.
map.addImage('marker', image);
});
    var url = 'datos/centrossalud.geojson';
    map.addSource('centrossalud', { type: 'geojson', data: url});

         map.addLayer({
    'id': 'centrossalud',
    'type': 'symbol',
    'source': 'centrossalud',
 
    'layout': {
        'icon-image': 'marker',
        'icon-size': 0.04,
        'text-field': ['get', 'tipologia'], // 👈 Usa la propiedad correcta de tu GeoJSON
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': 10,
            'text-anchor': 'center'
        },
        'paint': {
            'text-color': ' #FF0000',
            'text-halo-color': '#ffffff',
            'text-halo-width': 1
        }


    });



}
function addgrafico() {
    if (!farmaciasGeoJSON || !farmaciasGeoJSON.features) {
        console.warn("No hay datos de beneficiarios para graficar");
        return;
    }

    // Contar beneficiarios por parroquia
    const conteo = {};
    farmaciasGeoJSON.features.forEach(f => {
        const parroquia = f.properties.b_Field6 || "Sin parroquia";
        conteo[parroquia] = (conteo[parroquia] || 0) + 1;
    });

    const etiquetas = Object.keys(conteo);
    const valores = Object.values(conteo);

    // Eliminar gráfico anterior si existe y es un Chart válido
    if (window.graficoParroquias && typeof window.graficoParroquias.destroy === "function") {
        window.graficoParroquias.destroy();
    }

    // Crear el gráfico
    const canvas = document.getElementById("graficoParroquias");
    if (!canvas) {
        console.error("No se encontró el elemento canvas con id 'graficoParroquias'");
        return;
    }

    const ctx = canvas.getContext("2d");
    window.graficoParroquias = new Chart(ctx, {
        type: "bar",
        data: {
            labels: etiquetas,
            datasets: [{
                label: "Beneficiarios por Parroquia",
                data: valores,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Distribución de Beneficiarios por Parroquia"
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0 // evita decimales
                    }
                }
            }
        }
    });
}



// fin funcion
