import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-bank-account-details',
  templateUrl: './bank-account-details.component.html',
  styleUrls: ['./bank-account-details.component.scss']
})
export class BankAccountDetailsComponent implements OnInit {
  @Input() item = '';
  profileDate = JSON.parse(localStorage.getItem("loginResponse"));
  banks = JSON.parse(localStorage.getItem("masterData")).banks;
  formGroup: FormGroup;
  bankType = "select";
  loginFormValidationFlag: boolean = false;
  submit = false;
  private ngUnsubscribe = new Subject();
  banksList = [];

  constructor(private ApiService: CreditlyServicesService) { }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  ngOnInit(): void {

    this.banksList=this.banks.filter(item=>item.isIBANAvail == true);
    this.initForm();
    if (this.item == 'true') {
      this.ApiService.subscribe().subscribe(value => {
        if (this.formGroup.invalid) {
          console.log(this.formGroup.value, 'bank');
          this.ApiService.validObject.bank.valid = false;
        } else {
          this.ApiService.validObject.bank.valid = true;
        }
      })
      this.formGroup.valueChanges.subscribe(change => {
        this.ApiService.validObject.bank.change = true;
      })
      this.ApiService.bank.subscribe(res => {
        this.update();
      })
    }
    this.ApiService.formCompletion = this.formGroup.invalid == false ? this.ApiService.formCompletion + 1 : this.ApiService.formCompletion;
  }
  private initForm() {
    this.formGroup = new FormGroup({
      userID: new FormControl(this.profileDate?.userPersonalEmployement?.userID),
      bankAccountID: new FormControl(this.profileDate?.userBankAccount?.bankAccountID, [Validators.required]),
      iBAN: new FormControl(this.profileDate?.userBankAccount?.iban, [Validators.required]),
      isSave: new FormControl(true, [Validators.required]),
    });
    this.bankType = this.banks.filter(val => val.id == this.profileDate?.userBankAccount?.bankAccountID)[0]?.name;
  }
  filter(event) {
    let id = event.target.value
    this.formGroup.patchValue({ bankAccountID: parseInt(id) });
    this.bankType = this.banks.filter(val => val.id == id)[0].name;
  }
  update() {
    this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
    if (!this.loginFormValidationFlag) {
      this.submit = true;
      this.ApiService.profileBank(this.formGroup.value).subscribe(value => {
        this.ApiService.refreshData();
        this.submit = false;
        if (this.item !== 'true') this.ApiService.notify("Successfully updated", "success");
      })
    }
  }
}
