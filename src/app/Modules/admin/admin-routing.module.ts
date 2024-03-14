import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Contents/home/home.component';
import { ReportsComponent } from './components/Contents/reports/reports.component';
import { CustomersComponent } from './components/Contents/customers/customers.component';
import { SettingsComponent } from './components/Contents/settings/settings.component';
import { AdminDashbordComponent } from './components/Dashbord/admin-dashbord/admin-dashbord.component';
import { FormTimeComponent } from './components/Contents/reports/report-forms/form-time/form-time.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'/Dashboard'},
  {path:'Dashboard',component:AdminDashbordComponent,
   children:[
  {path: '', pathMatch:'full', redirectTo:'Home'},
  {path:'Home',component:HomeComponent},
  {path:'Reports',component:ReportsComponent},
  {path:'Customers',component:CustomersComponent},
  {path:'Settings',component:SettingsComponent},
  {path:'FormTime',component:FormTimeComponent}

   ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
