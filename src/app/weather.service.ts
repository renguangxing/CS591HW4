import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class WeatherService {

  apiKey = '6e1d7c9728825d4d91353482f1b521a8\n';

  url;

  constructor(public http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  }


  getWeather(city, code) {
    return this.http.get(this.url +city+','+code +'&APPID='+this.apiKey)

  }
}

