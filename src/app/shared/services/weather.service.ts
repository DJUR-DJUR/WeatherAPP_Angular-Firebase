import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
    private notification: NotificationService
  ) { }

  public getDailyWeather(city: string, params: any): Observable<any> {
    return this.http.get(`${environment.API_URL}/forecasts/v1/daily/5day/${city}`, { params })
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

  private errorHandler(err: HttpErrorResponse): Observable<any> {
    console.warn('Error caught in http service');

    this.notification.throwError(`${err.status} - ${err.statusText}. ${err.error.Message ? err.error.Message : ''}`);
    // Rethrow it back to component
    throw err;
  }

}
