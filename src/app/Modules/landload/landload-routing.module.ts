import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/footer/home/home.component';
import { AddTenantComponent } from './layout/footer/add-tenant/add-tenant.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'addtenant', component:AddTenantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandloadRoutingModule { }
