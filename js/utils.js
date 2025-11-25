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

  <div><b>id:</b> ${props["id"] || "N/A"}</div>
  <div><b>Proyecto:</b> ${props["b_Field2"] || "N/A"}</div>

  <div><b>Parroquia:</b> ${props["b_Field6"] || "N/A"}</div>
  <div><b>Dirección:</b> ${props["b_Field7"] || "N/A"}</div>

  <div><b>Área:</b> ${props["b_Field8"] || "N/A"}</div>
  <div><b>Fecha de ingreso:</b> ${props["b_Field3"] || "N/A"}</div>

  <div><b>Embarazada:</b> ${props["b_Field9"] || "N/A"}</div>
  <div><b>Edad gestacional:</b> ${props["b_Field10"] || "N/A"}</div>

  <div><b>Bono Bies:</b> ${props["b_Field11"] || "N/A"}</div>
  <div><b>Edad cumplido:</b> ${props["b_Field12"] || "N/A"}</div>

  <div><b>Nivel de Educación:</b> ${props["b_Field13"] || "N/A"}</div>
  <div><b>% de Discapacidad:</b> ${props["b_Field16"] || "N/A"}</div>

  <div><b>Hijos menores 17 años:</b> ${props["b_Field18"] || "N/A"}</div>
  <div><b>Hijos menores 2 años:</b> ${props["b_Field19"] || "N/A"}</div>

  <div><b>Material de vivienda:</b> ${props["b_Field28"] || "N/A"}</div>
  <div><b>Nombre Jefe Hogar:</b> ${props["b_Field37"] || "N/A"}</div>

  <div><b>Nro Integrantes:</b> ${props["b_Field33"] || "N/A"}</div>
  <div><b>Niños con DCI:</b> ${props["b_Field36"] || "N/A"}</div>

  <div><b>Adultos Mayores:</b> ${props["b_Field35"] || "N/A"}</div>
</div>
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
