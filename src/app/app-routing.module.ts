import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './loginComponent/login/login.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './authGuard';

const routes: Routes = [
  {path:'login' , component : LoginComponent },
 
  {path : 'home' , component : HomeComponent , canActivate:[AuthGuard]}, 
 

  {path :'' , redirectTo: '/login' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
