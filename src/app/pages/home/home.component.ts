import { Component, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';

import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public weatherResponse: any = {};

  weatherForm = this.formBuilder.group({
    city: [''],
    type: [''],
  });


  constructor(private weather:WeatherService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getdata('london','metric');
  }

  getdata(city:string, type:string){
    this.weather.get(city,type).subscribe({
      next: (response)=>{
        this.weatherResponse = response;
        console.log(this.weatherResponse);
      }
    })
  }


}
