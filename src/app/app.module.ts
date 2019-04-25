import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import {WeatherService} from './weather.service';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const Routes=[
  {
    path:'', component:HomeComponent
  },
  {
    path:'setting' , component:SettingComponent
  },
  {
    path:'home',component:HomeComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    FormsModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
