import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import { ReCaptchaService } from 'angular-recaptcha3';

@Component({
  selector: 'app-cards-search-landing-page',
  templateUrl: './cards-search-landing-page.component.html',
  styleUrls: ['./cards-search-landing-page.component.scss'],
})
export class CardsSearchLandingPageComponent implements OnInit {
  profileDate = JSON.parse(localStorage.getItem('loginResponse'));
  cards = JSON.parse(localStorage.getItem("masterData"))?.cards;
  masterData = JSON.parse(localStorage.getItem('masterData'));
  
  workTypesList = [];
  NationalityID = 1;
  showCardDetailsFlag: string = "_";
  oriProduct: Array<any> = [];
  product: Array<any> = [];
  isSoudi = false;
  compare = false;
  finding = false;
  financeProduct: Array<any> = [];
  complainFilter: Array<any> = [];
  twotimes = 2;
  threetimes = 3;
  Shariah_Compliant = false;
  AnnualFeeChk = false;
  mainData = {
    "PageNumber": 1,
    "PageSize": 100,
    "WorkTypeID": 0,
    "NetSalary": 15000,
    "NationalityID": 1,
    "Gender": 0,
    "MonthlyObligation": 0.0,
    "CardTypeID": 0,
    "BankID": 0,
    "IsCashBack": false,
    "IsLoungeAccess": false,
    "IsNoAnualFee": false,
    "HasNoSalaryTransfer": true,
    "Shariah_Compliant": false,
    "AnnualFeeChk": false,
    "UserID": 0,
    "APRSorting": 0
  }
  compareCard: Array<any> = [];

  ///////////// card///////////



  value: number = 60000;
  options: Options = {
    floor: 3000,
    ceil: 200000,
  };

  value1: number = 60000;
  options1: Options = {
    floor: 3000,
    ceil: 200000,
  };

  value2: number = 2;
  options2: Options = {
    floor: 1,
    ceil: 5,
  };

  public value3: number = 15000;
  public options3: Options = {
    floor: 3000,
    ceil: 200000
  };

  public value4: number = 5;
  public options4: Options = {
    floor: 0,
    ceil: 3
  };

  public value5: number = 15000;
  public options5: Options = {
    floor: 3000,
    ceil: 1000000
  };
  

  showPasswordFlag: boolean = false;
  showEnglishLogo: boolean = false;

  formGroup: FormGroup;
  sessionResp: any;
  loginFormValidationFlag: boolean = false;
  submit: boolean = false;

  local_data = JSON.parse(localStorage.getItem("masterData"));
  banks = this.local_data?.banks;
  banksList = [];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};

  private recaptchaSiteKey = '6LeH3YkaAAAAADd7pL1TWMulqSuDjTfFE5MMSS89';
  autoLeaseFinanceForm: FormGroup;
  nationality =  0;
  salaryTransferFlag: boolean = true;

  constructor(
    private router: Router,
    private creditlyServices: CreditlyServicesService,
    private recaptchaService: ReCaptchaService,
    private fb: FormBuilder
  ) {
    this.initForm();
    this.workTypesList = this.masterData?.workTypes;
  }




  public goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  public selectLanguage(type): void {
    if (type == "AR") {
      this.showEnglishLogo = true;
    } else {
      this.showEnglishLogo = false;
    }
  }
  ngOnInit(): void {
    this.banksList = this.banks.filter(item => item.isProductAvail == true);
    this.loadAutoLeaseFom();
  }
  private initForm() {
    this.formGroup = new FormGroup({
      Mobile: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      password: new FormControl('', [Validators.required]),
    });
  }
  public navigateToRegister(): void {
    this.router.navigateByUrl('/register');
  }

  public gotoCardsList() {
    this.router.navigateByUrl('/creditly/cards-list');
  }

  private getStarted(): void {
    if (this.formGroup.controls["Mobile"].valid)
      this.showPasswordFlag = true;
    else {
      this.creditlyServices.notify("Please enter valid mobile number", "error");
      this.loginFormValidationFlag = true;
    }
  }

  private login(): void {
    this.router.navigateByUrl('userProfile');
  }

  loginProcess() {

    /* this.recaptchaService.execute({ action: 'login' }).then(token => {
      // Backend verification method
      // this.sendTokenToBackend(token);
      console.log("re captcha resp",token);
    }); */

    this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
    if (!this.loginFormValidationFlag) {
      this.submit = true;
      var randomNumber = Math.floor(Math.random() * 20000000 + 1);
      let req = {
        uUID: randomNumber.toString(),
        platformType: 1,
        systemInfo:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
      };

      this.creditlyServices
        .login(this.formGroup.value, (localStorage.getItem("token")))
        .subscribe((result) => {
          if (result != null && result != undefined) {
            localStorage.setItem("loginResponse", JSON.stringify(result));
            if (result?.userSessions?.length) {
              localStorage.setItem("sessionToken", result?.userSessions[0]?.token);
              // localStorage.setItem("token",result?.userSessions[0]?.token);
              this.creditlyServices.notify("Successfully logged in...", "success");
              this.creditlyServices.to = "Profile";
              this.router.navigateByUrl('/userProfile');
            } else {
              this.submit = false;
              this.creditlyServices.notify(result.message, "error");
            }
          } else
            this.creditlyServices.notify(
              'Oops! something went wrong...',
              'error'
            );
        });
    }
  }

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`); // Write your logic here about once human verified what action you want to perform 
  }


  public handlerFromSaudi(val): void {
    this.nationality = parseInt(val);
  }

  public handlerSalaryTransfer(inputValue): void {
    // this.salaryTransferFlag = true;
    if (inputValue === 'yes') {
      console.log("true ")
      this.salaryTransferFlag = true;
    } else {
      console.log("false")
      this.salaryTransferFlag = false;
    }
  }

  public loadAutoLeaseFom() {
    this.autoLeaseFinanceForm = this.fb.group({
      // this.finalNetSalary
      netSalary: [15000],
      financeAmount: [0],
      financePeriod: [3],
      downPayment: [0],
      lastPayment: [0],
      workType: [0],
    });
  }

  public findAutoFinance(): void {
    // Swal.fire("navigate to auto lease page...")
    console.log("autolese form values",this.autoLeaseFinanceForm.value);
    let autoloanFilterReq = {
      NetSalary: this.autoLeaseFinanceForm.value.netSalary,
      FinanceAmount: this.autoLeaseFinanceForm.value.financeAmount,
      FinancePeriod: this.autoLeaseFinanceForm.value.financePeriod,
      DownPayment: this.autoLeaseFinanceForm.value.downPayment,
      LastPayment: this.autoLeaseFinanceForm.value.lastPayment,
      WorkType: this.autoLeaseFinanceForm.value.workType,
      NationalityID: this.nationality,
      HasNoSalaryTransfer: this.salaryTransferFlag
    }
    localStorage.setItem('sharedProductFilterData', JSON.stringify(autoloanFilterReq));
    this.router.navigateByUrl('creditly/autoLease');
  }

  public navigateToBankPage(): void {
    this.router.navigateByUrl('creditly/bank-account');
  }

  selectedTabs= 'Credit Card';
  selectTabs(value) {
    this.selectedTabs = value;
  }


}
