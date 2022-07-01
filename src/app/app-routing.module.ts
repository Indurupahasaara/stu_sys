import { Component, NgModule, Renderer2 } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LecAddComponent } from './components/lec-add/lec-add.component';
import { SignComponent } from './components/sign/sign.component';
import { StuRegComponent } from './components/stu-reg/stu-reg.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  },
  
  {
    path: 'home',
    component: HomeComponent
  },

  {
    //used for not 
    path: 'registration',
    component: StuRegComponent
  }
  ,
  {
    path: 'sign',
    component: SignComponent
  },
  {
    path: 'lec',
    component: LecAddComponent
  },
  {
    path:'payment',
    component:PaymentDetailsComponent
  },
  {
    path:'welcome',
    component:WelcomePageComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
