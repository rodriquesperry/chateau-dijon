mapboxgl.accessToken = mapboxApiKey;

let chateauDijon = {
  name: 'Chateau Dijon Townhomes',
  address: '7711 Broadway San Antonio, TX 78209',
  coordinates: [-98.466632, 29.50068],
  image: '../img/chateau-dijon.png',
};


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-98.466632, 29.50068],
  zoom: 13,
  scrollZoom: false,
});

var chateau_dijon = new mapboxgl.Marker({ color: '#b08d57' })
  .setLngLat(chateauDijon.coordinates)
  .setPopup(
    new mapboxgl.Popup({ closeOnClick: false }).setHTML(
      `<h6><em><strong>${chateauDijon.name}</strong></em></h6><span><strong>${chateauDijon.address}</strong></span>
        <img id='chateau-dijon-popup' src='${chateauDijon.image}' alt='tel: 210-824-6308'>`
    )
  )
  .addTo(map)
  .togglePopup();
