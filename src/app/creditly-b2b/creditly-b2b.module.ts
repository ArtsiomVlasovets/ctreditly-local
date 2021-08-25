import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditlyB2bRoutingModule } from './creditly-b2b-routing.module';
import { CardsListLandingPageComponent } from './cards-list-landing-page/cards-list-landing-page.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CreditlyB2bComponent } from './creditly-b2b.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalFinanceComponent } from './personal-finance/personal-finance.component';
import { RouterModule } from '@angular/router';
import { MortgageComponent } from './mortgage/mortgage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FAQComponent } from './faq/faq.component';
import { CompareCreditCardsComponent } from './compare-credit-cards/compare-credit-cards.component';
import { AutoLeaseComponent } from './pages/auto-lease/auto-lease.component';
import { VehicleInfoComponent } from './components/vehicle-info/vehicle-info.component';
import { AutoLeaseCarInfoComponent } from './components/auto-lease-car-info/auto-lease-car-info.component';
import { AutoLeaseFinanceComponent } from './components/auto-lease-finance/auto-lease-finance.component';
import { ApplycreditcardComponent } from './applycreditcard/applycreditcard.component';
import { TestingComponent } from './testing/testing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { CardsSearchLandingPageComponent } from './cards-search-landing-page/cards-search-landing-page.component';
import { ProfileModule } from './modules/profile/profile.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuoLeaseImageComponent } from './components/auo-lease-image/auo-lease-image.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CoModule } from '../creditlyComponent/co.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedProductViewComponent } from './shared-product-view/shared-product-view.component';
import { ReCaptchaModule } from 'angular-recaptcha3';
import { BankAccountOpenComponent } from './pages/bank-account-open/bank-account-open.component';

@NgModule({
  declarations: [
    CardsListLandingPageComponent,
    CreditlyB2bComponent,
    PersonalFinanceComponent,
    MortgageComponent,
    AboutUsComponent,
    FAQComponent,
    CompareCreditCardsComponent,
    AutoLeaseComponent,
    VehicleInfoComponent,
    AutoLeaseFinanceComponent,
    AutoLeaseCarInfoComponent,
    ApplycreditcardComponent,
    TestingComponent,
    CardsSearchLandingPageComponent,
    AuoLeaseImageComponent,
    ForgotPasswordComponent,
    SharedProductViewComponent,
    BankAccountOpenComponent
  ],
  imports: [
    CommonModule,
    CreditlyB2bRoutingModule,
    NgxSliderModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    NotifierModule,
    FormsModule,
    ProfileModule,
    NgxSpinnerModule,
    SlickCarouselModule ,
    CoModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreditlyB2bModule { }
