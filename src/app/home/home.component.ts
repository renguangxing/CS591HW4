import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location = {
    city:  'Boston',
    code : 'us'
  };
  weather:any;
  value:any;

  constructor(private ws: WeatherService) {

  }


  ngOnInit() {

    this.value = localStorage.getItem('location');

    if (this.value!=null){
      this.location=JSON.parse(this.value);
    }else {
      this.location={
        city:'Boston',
        code:'us'

      }
    }

    this.ws.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather=response;
      }
    );
  }


}
