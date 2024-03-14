import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashbordComponent } from './components/Dashbord/admin-dashbord/admin-dashbord.component';
import { SidebarComponent } from './components/common-layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/common-layout/navbar/navbar.component';
import { FooterComponent } from './components/common-layout/footer/footer.component';
import { HomeComponent } from './components/Contents/home/home.component';
import { ReportsComponent } from './components/Contents/reports/reports.component';
import { SettingsComponent } from './components/Contents/settings/settings.component';
import { CustomersComponent } from './components/Contents/customers/customers.component';
import { PieChartComponent } from './components/Contents/home/pie-chart/pie-chart.component';
import { DailyExpenseComponent } from './components/Contents/home/daily-expense/daily-expense.component';
import { LineChartComponent } from './components/Contents/home/line-chart/line-chart.component';
import { BarChartComponent } from './components/Contents/home/bar-chart/bar-chart.component';
import { MaterialModule } from 'src/material.module';
import { UpdateComponent } from './components/Contents/customers/form/update/update.component';
import { MapComponent } from './components/Contents/customers/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormTimeComponent } from './components/Contents/reports/report-forms/form-time/form-time.component';
import { Form2Component } from './components/Contents/reports/report-forms/form2/form2.component';



@NgModule({
  declarations: [
    AdminDashbordComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ReportsComponent,
    SettingsComponent,
    CustomersComponent,
    PieChartComponent,
    DailyExpenseComponent,
    LineChartComponent,
    BarChartComponent,
    UpdateComponent,
    MapComponent,
    FormTimeComponent,
    Form2Component,
    
    
   
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports:[
    AdminDashbordComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ReportsComponent,
    SettingsComponent,
    CustomersComponent,
    PieChartComponent,
    DailyExpenseComponent,
    LineChartComponent,
    BarChartComponent,
    FormTimeComponent,
    Form2Component,


  ]
   
})
export class AdminModule { }
