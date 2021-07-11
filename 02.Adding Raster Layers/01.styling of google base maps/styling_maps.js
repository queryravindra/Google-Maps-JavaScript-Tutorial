var map;

function initMap() {
    var bluishStyle = [
        {stylers: [{ hue: "#009999" },{ saturation: -5 },{ lightness: -40 }]},
        {featureType: "road",elementType: "geometry",stylers: [{ lightness: 100 },{ visibility: "simplified" }]},
        {featureType: "water",elementType: "geometry",stylers: [{ hue: "#0000FF" },{saturation:-40}]},
        {featureType: "administrative.neighborhood",elementType: "labels.text.stroke",stylers: [{ color: "#E80000" },{weight: 1}]},
        {featureType: "road",elementType: "labels.text",stylers: [{ visibility: "off" }]},
        {featureType: "road.highway",elementType: "geometry.fill",stylers: [{ color: "#FF00FF" },{weight: 2}]}
    ]

    var bluishStyledMap = new google.maps.StyledMapType(bluishStyle, {name: "Bluish Google Base Maps with Pink Highways"});

    google.maps.visualRefresh = true;
    
    var mapOptions = {
        center: new google.maps.LatLng(17.958616, 79.602185),
        zoom: 10,
        mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'new_bluish_style']}
    };
    
    var mapElement = document.getElementById('mapDiv');
   
    map = new google.maps.Map(mapElement, mapOptions);

    map.mapTypes.set('new_bluish_style', bluishStyledMap);
    map.setMapTypeId('new_bluish_style');
}

google.maps.event.addDomListener(window, 'load', initMap);