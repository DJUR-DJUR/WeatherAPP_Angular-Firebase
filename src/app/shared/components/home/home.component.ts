import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Subscription, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location, LocationQuerryParams, WeatherForDay, WeatherQuerryParams } from '../../interfaces/interfaces';
import { mockWeatherForDay } from '../../mocks/mock';
import { LocationService } from '../../services/location.service';
import { WeatherService } from '../../services/weather.service';
import { getLocationsMapper } from '../../utils/getLocations.mapper';
import { getWeatherDaysMapper } from '../../utils/getWeatherDays.mapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  public searchLocation!: FormControl;
  public receivedLocations!: Location[];
  public currentLocation!: Location;
  public languages = ['uk', 'en'];
  public selectedLocal = 'en';
  public receivedWeatherDays!: WeatherForDay[];
  public selectedDay!: WeatherForDay;
  public loadingWeather = false;

  private selectedLanguage = 'en';
  private querryMetricUnit = true;
  private querryLanguage = 'en-us';
  private getWeatherSub!: Subscription;
  private getLocationSub!: Subscription;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.searchLocation = new FormControl();

    this.getLocationSub = this.searchLocation.valueChanges
      .pipe(
        filter(searchText => searchText.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(searchText => {
          const querryParams: LocationQuerryParams = {
            apikey: environment.API_KEY,
            language: this.querryLanguage,
            q: searchText
          };
          return this.locationService.getLocation(querryParams);
        }))
      .subscribe({
        next: response => {
          this.receivedLocations = getLocationsMapper(response || [])
          this.cd.detectChanges();
          },
        error: (e: HttpErrorResponse) => {
          console.log('This is component Error', e);
          this.searchLocation.setValue('');
          this.cd.detectChanges();
        }
      });
  }

  public selectLocation(item: Location): void {
    this.currentLocation = item;
    this.clearSearchLocation();
    this.getDailyWeather();
    // this.cd.detectChanges();
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
    if (this.currentLocation) {
      this.getDailyWeather();
    }
  }

  public isSelectedLanguage(item: string): boolean {
    return this.selectedLanguage === item;
  }

  public setSelectedDay(item: WeatherForDay): void {
    this.selectedDay = item;
  }

  private clearSearchLocation(): void {
    this.searchLocation.setValue('');
    this.receivedLocations = [];
  }

  private getDailyWeather(): void {
  if (mockWeatherForDay) {
    this.receivedWeatherDays = mockWeatherForDay;
    this.selectedDay = this.receivedWeatherDays[0];
    this.cd.detectChanges();
    return;
  };
    const querryParams: WeatherQuerryParams = {
      apikey: environment.API_KEY,
      language: this.querryLanguage,
      details: false,
      metric: this.querryMetricUnit,
    };
    this.loadingWeather = true;

    this.getWeatherSub = this.weatherService
      .getDailyWeather(
        this.currentLocation.locationKey,
        querryParams
      )
      .subscribe({
        next: response => {
          this.receivedWeatherDays = getWeatherDaysMapper(response?.DailyForecasts || []);
          this.receivedWeatherDays.length ? this.selectedDay = this.receivedWeatherDays[0] : null;
          this.loadingWeather = false;
          this.cd.detectChanges();
          },
        error: (e: HttpErrorResponse) => {
          console.log('This is component Error', e);
          this.loadingWeather = false;
          this.cd.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    this.getWeatherSub.unsubscribe();
    this.getLocationSub.unsubscribe();
  }

}
