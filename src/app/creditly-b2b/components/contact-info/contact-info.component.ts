import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  @Input() item = '';
  profileDate = JSON.parse(localStorage.getItem("loginResponse"));
  resType = JSON.parse(localStorage.getItem("masterData")).residenceTypes;
  type = { id: "", name: "" };
  loginFormValidationFlag = false;
  contactData = {
    "userID": this.profileDate?.userPersonalProfile?.userID,
    "residenceTypeID": this.profileDate?.userPersonalProfile?.residenceTypeID,
    "email": this.profileDate?.email,
    "addressId": this.profileDate?.userAddress[0]?.id,
    "isSave": true
  }
  submit = false;
  re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ;
  formGroup: FormGroup;
  private ngUnsubscribe = new Subject();

  constructor(private ApiService: CreditlyServicesService) {
    this.initForm()
  }
  private initForm() {
    this.formGroup = new FormGroup({
      userID: new FormControl(this.profileDate?.userPersonalEmployement?.userID),
      residenceTypeID: new FormControl(this.profileDate?.userPersonalProfile?.residenceTypeID, [Validators.required]),
      email: new FormControl(this.profileDate?.email, [Validators.required, Validators.pattern(this.re)]),
      addressId: new FormControl(this.profileDate?.userAddress[0]?.id, [Validators.required]),
      isSave: new FormControl(true, [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.item == 'true') {
      this.ApiService.subscribe().subscribe(value => {
        this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
        if (this.formGroup.invalid) {
          this.ApiService.validObject.contact.valid = false;
        } else {
          this.ApiService.validObject.contact.valid = true;
        }
      })
      this.formGroup.valueChanges.subscribe(change => {
        this.ApiService.validObject.contact.change = true;
      })
      this.ApiService.contact.subscribe(res => {
        this.update();
      })
    }
    this.ApiService.formCompletion = this.formGroup.invalid == false ? this.ApiService.formCompletion + 1 : this.ApiService.formCompletion;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  change(event) {
    let id = event.target.value
    this.formGroup.patchValue({ residenceTypeID: parseInt(id) });
  }
  update() {
    this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
    if (!this.loginFormValidationFlag) {
      this.submit = true;
      this.ApiService.profileContact(this.formGroup.value).subscribe(val => {
        this.submit = false;
        this.ApiService.refreshData();
        if(this.item!=='true')this.ApiService.notify("Successfully updated", "success");
      })
    } else {
      this.ApiService.notify("Please fill all required fileds", "error");
    }
  }
  changeAddress(id) {
    this.formGroup.patchValue({ addressId: parseFloat(id) })
  }
}
