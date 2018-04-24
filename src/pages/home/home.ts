import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import "leaflet";
import "leaflet-tilelayer-mbtiles-ts";

declare var L: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: L.Map;
  center: L.PointTuple;
  bounds: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    //setup leaflet map
    this.initMap();
  }

  initMap() {
    this.center = [-13.06801, -55.92525]; //Paris

    this.bounds = new L.LatLngBounds(new L.LatLng(-55.947025838309, -13.021240694212267), new L.LatLng(-55.947025838309, -13.021240694212267));



    this.map = L.map('map', {
      center: this.center,
      zoom: 18,
      maxBounds: this.bounds
    });

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);

    let mb = L.tileLayer.mbTiles('assets/tiles/lrv3_export.mbtiles', {
      minZoom: 8,
      maxZoom: 18
    }).addTo(this.map);

    mb.on('databaseloaded', function(ev) {
      console.info('MBTiles DB loaded', ev);
    });
    mb.on('databaseerror', function(ev) {
      console.info('MBTiles DB error', ev);
    });


  }
} 
