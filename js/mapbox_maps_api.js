mapboxgl.accessToken = mapboxApiKey;
console.log(mapboxApiKey);

let chateauDijon = [
  {
    name: 'Chateau Dijon Townhomes',
    address: '7711 Broadway San Antonio, TX 78209',
    coordinates: {
      lng: -98.466632,
      lat: 29.50068,
    },
  },
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-98.466632, 29.50068],
  zoom: 13,
  scrollZoom: false,
});

var chateau_dijon = new mapboxgl.Marker({ color: '#b08d57' })
  .setLngLat([-98.466632, 29.50068])
  .setPopup(
    new mapboxgl.Popup({ closeOnClick: false }).setHTML(
      '<h6><em><strong>Chateau Dijon TownHomes</strong></em></h6><span><strong>7711 Broadway San Antonio, TX 78209</strong></span>' +
        "<img src='../img/chateau-dijon.jpeg'>"
    )
  )
  .addTo(map)
  .togglePopup();
