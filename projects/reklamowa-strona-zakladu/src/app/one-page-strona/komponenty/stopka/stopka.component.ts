import {Component} from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss']
})
export class StopkaComponent {
  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 19,
    center: new Leaflet.LatLng(49.788784130533216, 23.147334339363958)
  };
}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
  ] as Leaflet.Layer[];
};
