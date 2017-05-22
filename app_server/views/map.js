<script>
  // initialize the map and home
  function initialize() {
    var home = { lat: dist[0].Adress[1], lng: dist[0].Adress[0] };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: home
    });
    // show the home info
    infoMap(map,home,dist[0]);

  }


  google.maps.event.addDomListener(window, 'load', initialize);


  function infoMap(map,location,inform) {
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3 id="firstHeading" class="firstHeading">'+inform.email+'</h3>'+
        '<div id="bodyContent">'+
        '<p>Sex: '+inform.sex+'</p>'+
        '<p>Age: '+inform.age+'</p>'+
        '<p>Sports: '+inform.sports+'</p>'+
        '<p>Skill Degree: '+inform.skill+'</p>'+
        '<p >Distance: '+Math.round(inform.dist*1000)+' Miles </p>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Home',
      label: "You"
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  }

</script>



<style>
  /* Always set the map height explicitly to define the size of the div
   * element that contains the map. */
  #map {
    height: 100%;
  }
  /* Optional: Makes the sample page fill the window. */
  html, body {
    height: 100%;
    margin-top: 20px;
    padding: 0;
  }
</style>
