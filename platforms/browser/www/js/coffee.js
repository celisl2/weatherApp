var map;
var service;
var infowindow;
var lat = Cookies.get('lat');
var long = Cookies.get('lon')

initialize(lat, long);

function initialize(lat, lon) {
  var pyrmont = new google.maps.LatLng(lat, lon);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '30',
    query: 'coffee'
  };

  service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      var section = "";
      var locationName = "";
      var hours = "";
      var address = "";
      var closeDiv = '</div>';
      var divOpen = '<div class="coffeePlace">';

    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      if(place.opening_hours.open_now)
        hours = '<p> Open Now <p>';
        else 
        hours = '<p> Closed <p>';
      locationName = '<h3>' + place.name + '</h3>';
      //hours = '<p>' + place.opening_hours.opening_hours.open_now + '<p>';
      address = '<p>' +place.formatted_address + '<p>';

      section += divOpen + locationName + hours + address + closeDiv;
    }
    document.getElementById('coffeeList_Coffee').innerHTML = section;
  }
}