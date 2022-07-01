import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './components/sign/sign.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StuRegComponent } from './components/stu-reg/stu-reg.component';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LecAddComponent } from './components/lec-add/lec-add.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { HomeComponent } from './components/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';






@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    NavbarComponent,
    StuRegComponent,
    StuRegComponent,
    SignComponent,
    LecAddComponent,
    AddCourseComponent,
    HomeComponent,
    PaymentDetailsComponent,
    WelcomePageComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
