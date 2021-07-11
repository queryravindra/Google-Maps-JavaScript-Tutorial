var map;
function initMap() {
    google.maps.visualRefresh = true;

    var mapOptions = {
        center: new google.maps.LatLng(17.958616, 79.602185),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    var mapElement = document.getElementById('mapDiv');

    map = new google.maps.Map(mapElement, mapOptions);
    startButtonEvents()
}

google.maps.event.addDomListener(window, 'load', initMap());


function startButtonEvents () {
    document.getElementById('btnRoad').addEventListener('click', function(){
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    });

    document.getElementById('btnSat').addEventListener('click', function(){
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    });

    document.getElementById('btnHyb').addEventListener('click', function(){
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    });

    document.getElementById('btnTer').addEventListener('click', function(){
        map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    });
}