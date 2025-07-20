import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.weather';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private iconUrl = environment.iconUrl;
  private apiKey = environment.apiKey;

  public data: any;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`).pipe(
      tap((res: any) => this.data = res)
    );
  }

  fetchData(city: string): Observable<any> {
    return this.getWeather(city);
  }

  getWeatherIconUrl(iconCode: string): string {
    return `${this.iconUrl}${iconCode}@2x.png`;
  }
}
