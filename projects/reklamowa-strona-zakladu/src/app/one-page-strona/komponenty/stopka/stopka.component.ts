import {Component} from '@angular/core';
import * as Leaflet from 'leaflet';
import {LayerGroup} from 'leaflet';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss']
})
export class StopkaComponent {
  constructor() {
  }

  public map: Leaflet.Map | undefined;
  markersLayer = new Leaflet.LayerGroup();
  sMarkersLayer: LayerGroup = new Leaflet.LayerGroup();
  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 19,
    center: new Leaflet.LatLng(49.788784130533216, 23.147334339363958)
  };

  onMapReady(map: Leaflet.Map) {


    setTimeout(() => {
      map.invalidateSize();
      this.map = map;
      map.addLayer(this.markersLayer);

      const link = "https://cdn-icons-png.flaticon.com/512/836/836417.png"

      let icon;
      icon = new Leaflet.DivIcon({
        className: "test",
        html: `<img class="pizenka" src='assets/address-icon.png'/>`
      });
      const marker = Leaflet.marker([49.788784130533216, 23.147334339363958], {icon});
      this.sMarkersLayer.addLayer(marker);

      this.markersLayer.addLayer(this.sMarkersLayer);


    }, 200);
  }

}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
  ] as Leaflet.Layer[];
};
