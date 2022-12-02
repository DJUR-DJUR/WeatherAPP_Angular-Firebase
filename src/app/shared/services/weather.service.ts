import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getDailyWeather(city: string, params: any): Observable<any> {
    return this.http.get(`${environment.API_URL}${city}`, {params})
    // .pipe(
    //   catchError(error => {
    //   console.log('Error: ', error.message)
    //   return throwError(error)
    //   })
    // );
  }
}
