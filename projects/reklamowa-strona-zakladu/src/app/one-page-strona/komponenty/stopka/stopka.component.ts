import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { LayerGroup } from 'leaflet';
import { DanePodstawoweService } from '../../../serwisy/dane-podstawowe.service';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss'],
})
export class StopkaComponent implements OnInit {
  public data = new Date();
  public map: Leaflet.Map | undefined;
  markersLayer = new Leaflet.LayerGroup();
  sMarkersLayer: LayerGroup = new Leaflet.LayerGroup();
  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 1,
    center: new Leaflet.LatLng(22, 22),
  };

  constructor(public danePodstawowe: DanePodstawoweService) {}

  ngOnInit() {
    this.danePodstawowe.danePodstawoweObservable.subscribe(k => {
      if (this.map == undefined) {
        const k2 = setInterval(() => {
          if (this.map != undefined) {
            // @ts-ignore
            this.map.flyTo(
              [this.danePodstawowe.danePodstawowe.wysokosc, this.danePodstawowe.danePodstawowe.szerokosc],
              17,
              { animate: false }
            );
            clearInterval(k2);
          }
        }, 100);
      }
    });
  }

  onMapReady(map: Leaflet.Map) {
    setTimeout(() => {
      map.invalidateSize();
      this.map = map;
      map.addLayer(this.markersLayer);

      let icon;
      icon = new Leaflet.DivIcon({
        className: 'test',
        html: `<img class="pizenka" src="assets/address-icon.png"/>`,
      });
      const marker = Leaflet.marker(
        [this.danePodstawowe.danePodstawowe.wysokosc, this.danePodstawowe.danePodstawowe.szerokosc],
        { icon }
      );
      this.sMarkersLayer.addLayer(marker);

      this.markersLayer.addLayer(this.sMarkersLayer);
    }, 200);
  }
}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    } as Leaflet.TileLayerOptions),
  ] as Leaflet.Layer[];
};
