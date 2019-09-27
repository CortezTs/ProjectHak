import {NgModule} from '@angular/core';


import {HomeComponent} from './home.component';
import {ThemeModule} from '../../@theme/theme.module';

import {OrdersChartComponent} from './charts/orders-chart.component';
import {ProfitChartComponent} from './charts/profit-chart.component';
import {NbCardModule} from '@nebular/theme';

import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ChartModule} from 'angular2-chartjs';


@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbCardModule,
  ],
  declarations: [
    HomeComponent,
    OrdersChartComponent,
    ProfitChartComponent,
  ],
  exports: [
    OrdersChartComponent
  ]
})
export class HomeModule {
}
