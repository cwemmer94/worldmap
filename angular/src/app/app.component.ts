import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

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
  constructor (private apiService: ApiserviceService, private http: HttpClient) {
    this.dataName = "";
    this.capital = "";
    this.income = "";
    this.regionName = "";
    this.regionId = "";
    this.countryCode = "";
  }

  public dataName : string;
  public capital : string;
  public income : string;
  public regionName : string;
  public regionId : string;
  public countryCode : string;

  onclick(event: any) {
    let country = event.target["id"];
    this.http.get(`https://api.worldbank.org/v2/country/${country}/?format=json`)
      .subscribe((res) => {
      let resSTR = JSON.stringify(res);
      let resJSON = JSON.parse(resSTR);
      this.dataName = resJSON[1][0]["name"];
      this.capital = resJSON[1][0]["capitalCity"];
      this.income = resJSON[1][0]["incomeLevel"]["value"];
      this.regionName = resJSON[1][0]["region"]["value"];
      this.regionId = resJSON[1][0]["region"]["id"];
      this.countryCode = resJSON[1][0]["iso2Code"];
      console.log(resJSON[1][0]);
    });


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




