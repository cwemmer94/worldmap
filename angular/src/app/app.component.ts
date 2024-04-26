import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular'
  constructor (private apiService: ApiserviceService){}
  clickMe(event: any) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    this.title = "Hello";
  }
  
  ;
}
