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

  private errorHandler(err: HttpErrorResponse): Observable<any> {
    console.warn('Error caught in http service');
    // console.error('Error: ', err);

    this.notification.throwError(`${err.status} - ${err.statusText}. ${err.error.Message ? err.error.Message : ''}`);
    // Rethrow it back to component
    throw err;
  }

  getDailyWeather(city: string, params: any): Observable<any> {
    return this.http.get(`${environment.API_URL}${city}`, {params})
    .pipe(
      // map(this.pipeCallback.bind(this)),
      catchError(this.errorHandler.bind(this))
    );
    // .pipe(
    //   catchError(error => {
    //   console.log('This is service Error', error)
    //   return throwError(error)
    //   })
    // );
  }

    // private pipeCallback(data: any): Observable<any> {
  //   console.log('data', data);

  //   if (data?.error) {
  //     this.notification.throwError(data.error);
  //   }
  //   return data;
  // }
}
