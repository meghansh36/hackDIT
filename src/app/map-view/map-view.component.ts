import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  public map:mapboxgl.Map;
  public style='mapbox://styles/mapbox/outdoors-v9';
  public def_latitude=28.6315
  public def_longitude=77.2167

  private initializeMap(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.def_latitude=pos.coords.latitude;
        this.def_longitude=pos.coords.longitude;
        this.map.flyTo({
          center:[this.def_longitude,this.def_latitude]
        })
      })
    }
    this.buildMap();
  }
  
  private buildMap(){
    
    this.map=new mapboxgl.Map({
      container:'map',
      style:this.style,
      zoom:13,
      center:[this.def_longitude,this.def_latitude]
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }

  // flyTo(data: GeoJson) {
  //   this.map.flyTo({
  //     center: data.geometry.coordinates
  //   })
  // }

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken
   }

  ngOnInit() {
    this.initializeMap();
  }

}
