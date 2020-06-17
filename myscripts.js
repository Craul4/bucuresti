function initMap() {
  var bucuresti = { lat: 44.439663, lng: 26.096306 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: bucuresti,
  });


  var sector1Coords = [
    { lat: 44.43546, lng: 26.060124 },
    { lat: 44.454958, lng: 26.059696 },
    { lat: 44.491862, lng: 25.986875 },
    { lat: 44.540167, lng: 26.103434 },
    { lat: 44.487193, lng: 26.11345 },
    { lat: 44.435389, lng: 26.103178 },
  ];
  var sector1 = new google.maps.Polygon({
    paths: sector1Coords,
    strokeColor: "#FF0000",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#FF0000",
    fillOpacity: 0.5,
  });

  sector1.setMap(map);

  var sector2Coords = [
    { lat: 44.43754, lng: 26.103844 },
    { lat: 44.486981, lng: 26.114133 },
    { lat: 44.47826, lng: 26.181845 },
    { lat: 44.456105, lng: 26.158001 },
    { lat: 44.442202, lng: 26.194874 },
    { lat: 44.434567, lng: 26.132834 },
  ];
  var sector2 = new google.maps.Polygon({
    paths: sector2Coords,
    strokeColor: "#ff6600",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#ff6600",
    fillOpacity: 0.5,
  });

  sector2.setMap(map);

  var sector3Coords = [
    { lat: 44.434545, lng: 26.108341 },
    { lat: 44.432084, lng: 26.224648 },
    { lat: 44.395335, lng: 26.211972 },
    { lat: 44.409061, lng: 26.122185 },
    { lat: 44.430728, lng: 26.096203 },
  ];
  var sector3 = new google.maps.Polygon({
    paths: sector3Coords,
    strokeColor: "#ffff00",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#ffff00",
    fillOpacity: 0.5,
  });

  sector3.setMap(map);

  var sector4Coords = [
    { lat: 44.428521, lng: 26.095749 },
    { lat: 44.408836, lng: 26.12219 },
    { lat: 44.398308, lng: 26.160147 },
    { lat: 44.368861, lng: 26.143009 },
    { lat: 44.341702, lng: 26.164201 },
    { lat: 44.333834, lng: 26.147866 },
    { lat: 44.365962, lng: 26.089523 },
  ];
  var sector4 = new google.maps.Polygon({
    paths: sector4Coords,
    strokeColor: "#0000ff",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#0000ff",
    fillOpacity: 0.5,
  });

  sector4.setMap(map);

  var sector5Coords = [
    { lat: 44.435336, lng: 26.096002 },
    { lat: 44.434258, lng: 26.05846 },
    { lat: 44.407734, lng: 26.043112 },
    { lat: 44.404726, lng: 26.009437 },
    { lat: 44.369772, lng: 26.087225 },
  ];
  var sector5 = new google.maps.Polygon({
    paths: sector5Coords,
    strokeColor: "#00ff00",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#00ff00",
    fillOpacity: 0.5,
  });

  sector5.setMap(map);

  var sector6Coords = [
    { lat: 44.407087, lng: 25.975575 },
    { lat: 44.420547, lng: 26.048678 },
    { lat: 44.434023, lng: 26.057963 },
    { lat: 44.454615, lng: 26.059654 },
    { lat: 44.478907, lng: 25.992061 },
    { lat: 44.466161, lng: 25.976602 },
    { lat: 44.446054, lng: 26.020208 },
    { lat: 44.440178, lng: 25.966647 },
  ];
  var sector6 = new google.maps.Polygon({
    paths: sector6Coords,
    strokeColor: "#ff00ff",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#ff00ff",
    fillOpacity: 0.5,
  });

  sector6.setMap(map);
}
