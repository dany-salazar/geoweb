var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZGFueXNhbGF6YXIxOTg1IiwiYSI6ImNsY3oyM3Z0eTE3aGkzd21vY2cxZnhteW4ifQ.47rPRO3Tktn0HVtB4h_Htg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcanes',
    subtitle: 'Los principales volcanes activos del mundo',
    byline: 'DANY SALAZAR ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'COTOPAXI',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/V%C3%B3lcan_Nevado_Cotopaxi_camilogaleano%28com%29.jpg',
            description: 'El Cotopaxi (pronunciado [ko.toˈpak.si]) es un estratovolcán activo que se encuentra en la ciudad de Latacunga, Provincia de Cotopaxi, República del Ecuador. Con una elevación de 5897 m s. n. m., es el segundo volcán más alto del país, sólo superado por el Chimborazo. Está situado a 33 km al noreste de la ciudad de Latacunga y a 50 km al sur de Quito. Su última gran erupción se remonta al 26 de junio de 1877',
            location: {
                center: [-78.43206, -0.68398],
                zoom: 14.70,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'iliniza',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [-78.71579, -0.66325],
                    zoom: 16.68,
                    pitch: 45.00,
                    bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
