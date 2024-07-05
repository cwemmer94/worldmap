import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser'
import { PipeTransform, Pipe } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable({providedIn:'root'})
export class AppComponent {
  title = 'angular'
  income: string = ' ';
  constructor (private apiService: ApiserviceService, private http: HttpClient){}
  onclick(event: any) {
    let req = this.http.get('https://api.worldbank.org/v2/country/${event.country}/?format=json');
    console.log(req.subscribe());
  }

}







// private loadDoc(country : string) {
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function() {
//   let obj = JSON.parse(this.responseText);
//   let income = `Income Level: ${obj[1][0].incomeLevel.value}`;
//   let regionName = `Region Name: ${obj[1][0].region.value}`;
//   let capitalCity = `Capital City: ${obj[1][0].capitalCity}`;
//   let countryName = `Country Name: ${obj[1][0].name}`;
//   let regionId = `Region ID: ${obj[1][0].region.id}`;
//   let countryCode = `Country Code: ${obj[1][0].iso2Code}`;
//   let theString = `Country Name: ${countryName}, Income Level: ${income}`;
//   }
//   xhr.open("GET", `https://api.worldbank.org/v2/country/${country}/?format=json`);
//   xhr.send();
//   return xhr.responseText;
// }




