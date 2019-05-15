var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 40,
     'max': 60
   },
   tooltips: [true, true],
   format: wNumb({
     decimals: 0
   })
  });

  var slider = document.getElementById('tree-number-slider');
    noUiSlider.create(slider, {
     start: [250, 950],
     connect: true,
     step: 1,
     orientation: 'horizontal', // 'horizontal' or 'vertical'
     range: {
       'min': 250,
       'max': 950
     },
     tooltips: [true, true],
     format: wNumb({
       decimals: 0
     })
    });

    var slider = document.getElementById('tree-number-slider-popup');
      noUiSlider.create(slider, {
       start: 950,
       connect: true,
       step: 1,
       orientation: 'horizontal', // 'horizontal' or 'vertical'
       range: {
         'min': 500,
         'max': 950
       },
       tooltips: true,
       format: wNumb({
         decimals: 0
       })
      });


    $(document).ready(function(){
    $('.modal').modal();
  });

  var map = L.map('map').setView([89.5250, -30.4500], 10);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(e){
    var marker = new L.marker(e.latlng).addTo(map);
});

function addMarker(e){
// Add marker to map at click location; add popup window
var newMarker = new L.marker(e.latlng).addTo(map);
}


  $('.dropdown-trigger').dropdown();
