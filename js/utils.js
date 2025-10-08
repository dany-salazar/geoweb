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

  function addPopupBeneficiario(nombreCapa) {

    map.on('mousemove', nombreCapa, function (e) {

      var props = e.features[0].properties;
     
      var text = `
      <b>id:</b> ${props["id"] || "N/A"}<br>
      <b>Proyecto:</b> ${props["beneficiar"] || "N/A"}<br>
      <b>Parroquia:</b> ${props["benefici_4"] || "N/A"}<br>
        <b>Fecha de ingreso:</b> ${props["benefici_1"] || "N/A"}<br>
         <b>Embarazada:</b> ${props["benefici_7"] || "N/A"}<br>
           <b>Semanas de gestion:</b> ${props["benefici_8"] || "N/A"}<br>
           <b>Bono Bies:</b> ${props["benefici_9"] || "N/A"}<br>
           <b>Nivel de Educacion:</b> ${props["benefici11"] || "N/A"}<br>


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
