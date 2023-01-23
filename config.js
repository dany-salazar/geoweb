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
            image: 'https://img.goraymi.com/2016/05/04/c6f2ca4309d7293ac4742bd20e0ee1f8_xl.jpg',
            description: 'Un volcán con dos cumbres, un cerro en forma de corazón y una laguna de color verde turquesa son los principales atractivos de esta reserva. De sus estribaciones nacen las vertientes para dos ríos importantes, el Toachi, que corre hacia el norte por un cañón de 40 metros de alto, y el Pilatón. Esto revela la importancia de los bosques nublados de esta reserva para la generación de agua de los poblados y ciudades cercanas',
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
        },
        {
            id: 'volcan3',
            alignment: 'right',
            hidden: false,
            title: 'Sangay',
            image: 'https://www.enciclopediadelecuador.com/wp-content/uploads/2016/04/Volcan-sangay.jpg',
            description: 'Sangay es un estratovolcán continuamente activo ubicado en la República del Ecuador. Es el volcán más activo del Ecuador, y es conocido por su expresión explosiva la cual se manifiesta por nubes gruesas de ceniza, que han formado una especie de bóveda desde 1976. ',
            location: {
                center: [-78.33740, -2.00178],
                zoom: 14.69,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'volcan4',
            alignment: 'right',
            hidden: false,
            title: 'EL ALTAR',
            
            description: '<iframe width="450" height="315" src="https://www.youtube.com/embed/tMaUaT20cxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            location: {
                center: [-78.42365, -1.67358],
                zoom: 14.20,
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
