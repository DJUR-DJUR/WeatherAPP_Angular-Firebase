import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuerryParams, WeatherForDay } from '../../interfaces/interfaces';
import { mockWeatherForDay } from '../../mocks/mock';
import { WeatherService } from '../../services/weather.service';
import { getWeatherDaysMapper } from '../../utils/getWeatherDays.mapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  private currentCity = '322722';

  public languages = ['uk', 'en'];
  private selectedLanguage = 'en';
  public selectedLocal = 'en';

  private querryMetricUnit = true;
  private querryLanguage = 'en-us';
  public getWeatherDays!: WeatherForDay[];
  public selectedDay!: WeatherForDay;

  public loadingData = false;
  private sub!: Subscription;

  constructor(
    private weather: WeatherService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getDailyWeather();
  }

  public setSelectedDay(item: WeatherForDay): void {
    this.selectedDay = item;
  }

  public changeUnit(): void {
    this.querryMetricUnit = !this.querryMetricUnit;
    this.getDailyWeather();
  }

  public changeLanguage(item: string): void {
    this.selectedLanguage = item;
    this.selectedLocal = item;
    switch (item) {
      case 'uk':
        this.querryLanguage = 'uk-ua';
        break;
      case 'en':
        this.querryLanguage = 'en-us';
        break;
    }
    this.getDailyWeather();
  }

  public isSelectedLanguage(item: string): boolean {
    return this.selectedLanguage === item;
  }

  private getDailyWeather(): void {
  if (mockWeatherForDay) {
    this.getWeatherDays = mockWeatherForDay;
    this.selectedDay = this.getWeatherDays[0];
    return;
  };
    const querryParams: QuerryParams = {
      apikey: environment.API_KEY,
      language: this.querryLanguage,
      details: false,
      metric: this.querryMetricUnit,
    };
    this.loadingData = true;
    this.sub = this.weather
      .getDailyWeather(
        this.currentCity,
        querryParams
      )
      .subscribe({
        next: response => {
          this.getWeatherDays = getWeatherDaysMapper(response?.DailyForecasts || []);
          this.getWeatherDays.length ? this.selectedDay = this.getWeatherDays[0] : null;
          this.loadingData = false;
          this.cd.detectChanges();
          },
        error: (e: HttpErrorResponse) => {
          console.log('This is component Error', e);
          this.loadingData = false;
          this.cd.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
