var map;
function initMap() {
    var osmMapType = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "OpenStreetMap",
        maxZoom: 18
    });
    
    google.maps.visualRefresh = true;

    var mapOptions = {
        center: new google.maps.LatLng(17.958616, 79.602185),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    var mapElement = document.getElementById('mapDiv');

    map = new google.maps.Map(mapElement, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initMap());