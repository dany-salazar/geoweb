function addEdificiosCapa() {

    map.addSource("edificios_source", {
        
        "type": "vector",
        "url": "mapbox://danysalazar1985.1da4bwyv"  // mapbox://Nuestor ID Tileset
        
    }); //fin map source


    map.addLayer({
    "id": "edificios",
    "type": "fill-extrusion",
    "source": "edificios_source",
    "source-layer": "construccionesshape-0xis9e", // Nuestro nombre Tileset
    "maxzoom": 21,
    "minzoom": 15,
   "filter": [">", "pup_altura", 0],
    "paint": {
        "fill-extrusion-color": [
            "interpolate", ["linear"], ["number", ["get", "pup_altura"]],
            0, "#FFFFFF",
            1, "#e6b03d",
            2, "#ee6c7d",
            3, "#3de66d",
            4, "#22ecf0",
            5, "#849eef",
            6, "#b01930",
            7, "#5f101b",
            40, "#123a8f",
            80, "#ce2f7e",
            100, "transparent"

        ],
        "fill-extrusion-height": ["*", 2, ["to-number", ["get", "pup_altura"]]],
        "fill-extrusion-opacity": 0.9
    }
}
,"road-label"
);  

} //fin funcion
function filtrarEdificios(valor) {
    map.setFilter("edificios", [">", "pup_altura", parseInt(valor)]);

    document.getElementById("altura").innerHTML = "Más de  <b>" + valor + "</b> pisos";

}


function addPopupToMapEdificios(nombreCapa) {

    map.on('click', nombreCapa, function (e) {

        var text = "";
        //console.info(e);
        for (key in e.features[0].properties) {

            if (key == "pup_altura") {
                text += "<b>Numero de plantas</b>:" + e.features[0].properties[key] + "<br>";
            }
            if (key == "localId") {
                //localId 0004702DF3800C_part1
                //http://ovc.catastro.meh.es/OVCServWeb/OVCWcfLibres/OVCFotoFachada.svc/RecuperarFotoFachadaGet?ReferenciaCatastral=0004701DF3800C
                //https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaBienes.aspx?rc1=0004701&rc2=DF3800C

                var localId = e.features[0].properties[key];

                var localIdSplit = localId.split("_"); // 0004702DF3800C  part1
                var parte1 = localIdSplit[0].substring(0, 7);
                var parte2 = localIdSplit[0].substring(7, localIdSplit[0].length);
                text += "<img width=200 src=http://ovc.catastro.meh.es/OVCServWeb/OVCWcfLibres/OVCFotoFachada.svc/RecuperarFotoFachadaGet?ReferenciaCatastral=" + localId + "><br>";
                text += "<a target=blank href=https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaBienes.aspx?rc1=" + parte1 + "&rc2=" + parte2 + ">Ficha</a><br>";

            }


        }
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(text)
            .addTo(map);

    });

    map.on('mouseenter', nombreCapa, function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', nombreCapa, function () {
        map.getCanvas().style.cursor = '';
    });

}
