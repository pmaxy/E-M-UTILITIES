import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { OtpComponent } from './components/otp/otp.component';
import { AccountVerificationComponent } from './components/account-verification/account-verification.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { StartUpPageComponent } from './components/start-up-page/start-up-page.component';
import { LandloadModule } from '../landload/landload.module';
import { AdminModule } from '../admin/admin.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PasswordResetComponent,
    OtpComponent,
    AccountVerificationComponent,
    OpenAccountComponent,
    StartUpPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LandloadModule,
    AdminModule
  ]
})
export class AuthModule { }
