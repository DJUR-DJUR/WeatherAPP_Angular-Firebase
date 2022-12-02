import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DaysSliderComponent } from './components/days-slider/days-slider.component';
import { DayComponent } from './components/day/day.component';
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from '@angular/common';
import LocaleUa from '@angular/common/locales/uk'
registerLocaleData(LocaleUa);

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    DaysSliderComponent,
    DayComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    AppRoutingModule,
  ]
})
export class SharedModule { }
