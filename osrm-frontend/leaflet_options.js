'use strict';

var L = require('leaflet');

var streets = L.tileLayer('http://maps.localnet:8082/osm_tiles/{z}/{x}/{y}.png', {}),
  small_components = L.tileLayer('https://tools.geofabrik.de/osmi/tiles/routing_i/{z}/{x}/{y}.png', {});

module.exports = {
  defaultState: {
    center: L.latLng(52.1637,5.3933),
    zoom: 12,
    waypoints: [],
    language: 'en',
    alternative: 0,
    layer: streets
  },
  services: [{
    label: 'Car (fastest)',
    path: 'http://maps.localnet:5000/route/v1'
  }],
  layer: [{
    'Mapbox Streets': streets
  }],
  overlay: {
    'Small Components': small_components
  },
  baselayer: {
    one: streets
  }
};

