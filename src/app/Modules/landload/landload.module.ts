import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { LandloadRoutingModule } from './landload-routing.module';
import { HomeComponent } from './layout/footer/home/home.component';
import { AddTenantComponent } from './layout/footer/add-tenant/add-tenant.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddTenantComponent
  ],
  imports: [
    CommonModule,
    LandloadRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LandloadModule { }
