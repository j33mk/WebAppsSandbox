import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { ApiPlayGroundComponent } from './api-play-ground/api-play-ground.component';
import { HomeComponent } from './home/home.component';
import { MyhighchartsComponent } from './myhighcharts/myhighcharts.component';
import { ZakatCalculatorComponent } from './zakat-calculator/zakat-calculator.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'ZakatCalculator',component:ZakatCalculatorComponent},
  {path:'ApiPlayground',component:ApiPlayGroundComponent},
  {path:'Algorithms',component:AlgorithmsComponent},
  {path:'HighCharts',component:MyhighchartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
