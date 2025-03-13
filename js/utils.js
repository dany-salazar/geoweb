async function enviarPeticion(url) {

    return fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //console.log('Respuesta', data);
            return data;
        }).catch(function (error) {
            console.log('Error', error);
            alert("Error peticion");
            return null;
        });
  
  }


  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
    });

function addPopupToMap(nombreCapa) {

    map.on('mousemove', nombreCapa, function (e) {

   

      //console.info(e);
     for (key in e.features[0].properties) {
   text += "<b>" + key + "</b>:" + e.features[0].properties[key] + "<br>";
      }

      popup.setLngLat(e.lngLat)
        .setHTML(text)
        .addTo(map);

    });

    map.on('mouseenter', nombreCapa, function () {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', nombreCapa, function () {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }// fin funcion


  function addPopupRecinto(nombreCapa) {

    map.on('mousemove', nombreCapa, function (e) {

      var props = e.features[0].properties;
      var coordinador = props["coordinador"];
      if (!coordinador || coordinador.trim() === "") {
        coordinador = "SIN ASIGNAR"; // Si es vacío o undefined, poner "0"
      }
    
      var text = `
      <b>Parroquia:</b> ${props["NOMBRE PARROQUIA"] || "N/A"}<br>
      <b>Recinto:</b> ${props["NOMBRE RECINTO"] || "N/A"}<br>
      <b>Coordinador:</b> ${coordinador}<br>
      <b>Nro de Juntas:</b> ${props["NUM_JUNR"] || "N/A"}<br>
    `;


      popup.setLngLat(e.lngLat)
        .setHTML(text)
        .addTo(map);

    });

    map.on('mouseenter', nombreCapa, function () {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', nombreCapa, function () {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }// fin funcion