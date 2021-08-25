import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProfileRoutingModule } from 'src/app/creditly-b2b/modules/profile/profile-routing.module';
import { ProfileFormModule } from 'src/app/profile-form/profile-form.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MortgageCoComponent } from './mortgage/mortgage.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PersonalCoComponent } from './personal-co/personal-co.component';
import { CreditCardCoComponent } from './credit-card-co/credit-card-co.component';
import { AutoLeaseCoComponent } from './auto-lease-co/auto-lease-co.component';



@NgModule({
  declarations: [MortgageCoComponent,PersonalCoComponent, CreditCardCoComponent, AutoLeaseCoComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SlickCarouselModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileFormModule,
    NgxSliderModule
  ],
  exports: [ MortgageCoComponent,PersonalCoComponent,CreditCardCoComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CoModule { }
