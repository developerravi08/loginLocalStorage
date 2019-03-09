import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { fakeBackendProvider } from './auth/fake-backend';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    LoginUserComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
     
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
