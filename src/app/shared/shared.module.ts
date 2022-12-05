import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DaysSliderComponent } from './components/days-slider/days-slider.component';
import { DayComponent } from './components/day/day.component';
import { ButtonComponent } from './components/button/button.component'

import { registerLocaleData } from '@angular/common';
import LocaleUa from '@angular/common/locales/uk';
registerLocaleData(LocaleUa);

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    DaysSliderComponent,
    DayComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  exports: [
    AppRoutingModule,
  ]
})
export class SharedModule { }
