import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { LandingPageCardsListComponent } from './landing-page-cards-list/landing-page-cards-list.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Router } from '@angular/router';
import { HashLocationStrategy, LocationStrategy, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReCaptchaModule } from 'angular-recaptcha3';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

/* const RECAPTCHA_OPTION = {
  language?: 'en';
  invisible?: IRecaptchaOption;
  normal?: IRecaptchaOption;
} */

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageCardsListComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule,
    NgbModule,
    ReCaptchaModule.forRoot({
      invisible: {
        sitekey: '6LeH3YkaAAAAADd7pL1TWMulqSuDjTfFE5MMSS89',
      },
      normal: {
        sitekey: '6LeH3YkaAAAAADd7pL1TWMulqSuDjTfFE5MMSS89',
      },
      language: 'en'
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
