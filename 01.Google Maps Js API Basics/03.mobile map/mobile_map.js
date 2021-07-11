var map;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        //Creating LatLng object with latitude and longitude.
        var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var mapElement = document.getElementById('mapDiv');

        map = new google.maps.Map(mapElement, mapOptions);
    });
}

