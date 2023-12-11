import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { MapBrowserEvent } from 'ol';
import { toStringXY } from 'ol/coordinate';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Style, Icon } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit, AfterViewInit {
  map!: Map;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = new Map({
      target: 'map', // ID del elemento HTML que contendrá el mapa
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [-8861349.65, -239383.20], 
        zoom: 16

      })
    });

     // Agregar un evento de clic al mapa
     this.map.on('click', (event: MapBrowserEvent<UIEvent>) => {
      this.handleMapClick(event);
    });
  }

  handleMapClick(event: MapBrowserEvent<UIEvent>) {
    // Obtener las coordenadas del clic
    const coordinates = event.coordinate;

    // Convertir las coordenadas a una cadena legible
    const coordinatesString = toStringXY(coordinates, 2);

    // Imprimir las coordenadas en la consola (puedes hacer algo más útil aquí)
    console.log('Ubicación seleccionada:', coordinatesString);
  }

}