import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ZakatCalculatorComponent } from './zakat-calculator/zakat-calculator.component';
import { ApiPlayGroundComponent } from './api-play-ground/api-play-ground.component';
import {HttpClientModule} from '@angular/common/http';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { MyhighchartsComponent } from './myhighcharts/myhighcharts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatDividerModule} from '@angular/material/divider';
import { CustButtonComponent } from './cust-button/cust-button.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZakatCalculatorComponent,
    ApiPlayGroundComponent,
    AlgorithmsComponent,
    MyhighchartsComponent,
    CustButtonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
