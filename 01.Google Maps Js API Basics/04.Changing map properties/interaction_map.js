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


function zoomToIstanbul () {
    var istanbul = new google.maps.LatLng(41.0579,29.0340);
    map.setCenter(istanbul);
}
function zoomToStreet () {
    map.setZoom(18);
}
function disableDrag () {
    map.setOptions ({ draggable: false });
}
function setMaxZoom () {
    map.setOptions ({ maxZoom: 12 });
}
function setMinZoom () {
    map.setOptions ({ minZoom: 5 });
}
function changeUI () {
    map.setOptions ({ disableDefaultUI: true });
}
function disableScroll () {
    map.setOptions ({ scrollwheel: false });
}
 

function startButtonEvents () {
    document.getElementById('btnZoomToIst').addEventListener('click', function(){
        zoomToIstanbul();
    });

    document.getElementById('btnZoomToStr').addEventListener('click', function(){
        zoomToStreet();
    });

    document.getElementById('btnDisableDrag').addEventListener('click', function(){
        disableDrag();
    });

    document.getElementById('btnMaxZoom').addEventListener('click', function(){
        setMaxZoom();
    });

    document.getElementById('btnMinZoom').addEventListener('click', function(){
        setMinZoom();
    });

    document.getElementById('btnChangeUI').addEventListener('click', function(){
        changeUI();
    });

    document.getElementById('btnDisableScroll').addEventListener('click', function(){
        disableScroll();
    });
}
