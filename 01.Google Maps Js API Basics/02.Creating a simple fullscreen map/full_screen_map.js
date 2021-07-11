var map;

function initMap() {
    
    google.maps.visualRefresh = false;

    var mapOptions = {
        center: new google.maps.LatLng(17.958616, 79.602185),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    var mapElement = document.getElementById('mapDiv');

    map = new google.maps.Map(mapElement, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initMap);



// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//     function(position) {
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     //Creating LatLng object with latitude and 
//     //longitude.
//     var devCenter = new google.maps.LatLng(lat, lng);
//     map.setCenter(devCenter);
//     map.setZoom(15);
//     });
// }