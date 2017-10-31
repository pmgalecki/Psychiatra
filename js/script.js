// Google map settings
function initMap() {
    var uluru = {
        lat: 51.081582,
        lng: 17.024549
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//Navbar collapsing in small viewport
$('.navbar').on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

