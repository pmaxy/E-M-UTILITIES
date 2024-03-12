import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartUpPageComponent } from './components/start-up-page/start-up-page.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { OtpComponent } from './components/otp/otp.component';
import { AccountVerificationComponent } from './components/account-verification/account-verification.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'/Login', pathMatch:'full'},
  {path:'startup',component:StartUpPageComponent},
  {path:'Login',component:LoginComponent},
  {path:'PasswordReset',component:PasswordResetComponent},
  {path:'Otp',component:OtpComponent},
  {path:'AccountVerification',component:AccountVerificationComponent},
  {path:'BankAccOpen',component:OpenAccountComponent},
  {path:'signUp',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
