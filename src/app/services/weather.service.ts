import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private secret = '5aefeb43523eff5f75b7f19c66074a52';
  readonly url = environment.url;

  constructor(private http:HttpClient) { }


  public get(city:string, type:string){
    return this.http.get(`${this.url}q=${city}&appid=${this.secret}&units=${type}`);
  }
}
