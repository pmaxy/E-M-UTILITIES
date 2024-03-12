import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/auth/components/login/login.component';

const routes: Routes = [
  {path:'' , pathMatch:'full', redirectTo:'AuthSection' },
  {path:'AuthSection', 
  loadChildren:()=> import('./Modules/auth/auth.module').then(m =>m.AuthModule)
  },
  {path:'AdminSection', 
  loadChildren:()=> import('./Modules/admin/admin.module').then(m =>m.AdminModule)
  },
  {path:'LandlordSection', 
  loadChildren:()=> import('./Modules/landload/landload.module').then(m =>m.LandloadModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
