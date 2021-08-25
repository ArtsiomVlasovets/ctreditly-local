import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ControlContainer, FormBuilder } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import { Options } from '@angular-slider/ngx-slider';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-applycreditcard',
  templateUrl: './applycreditcard.component.html',
  styleUrls: ['./applycreditcard.component.scss']
})
export class ApplycreditcardComponent implements OnInit {
  profileDate = JSON.parse(localStorage.getItem("loginResponse"));
  // bank
  banks = JSON.parse(localStorage.getItem("masterData")).banks;
  workTypes = JSON.parse(localStorage.getItem('masterData'))?.workTypes;
  loanUnitTypes = JSON.parse(localStorage.getItem('masterData'))?.loanUnitTypes;
  loans: Array<any> = JSON.parse(localStorage.getItem('masterData'))?.loans;
  showCardDetailsFlag: boolean = false;
  bankType = "select";
  loginFormValidationFlag: boolean = false;
  bankGroup: FormGroup;
  term: boolean = false;
  /* product = localStorage.getItem("CategoryID") == "1" ? [JSON.parse(localStorage.getItem("selectedCard"))] : [];
  financeProduct = localStorage.getItem("CategoryID") == "2" ? [JSON.parse(localStorage.getItem("selectedCard"))] : [] */
  employGroup: FormGroup;
  financeGroup: FormGroup;
  contactGroup: FormGroup;
  /* autoLoanItem = localStorage.getItem("CategoryID") == "AutoLoan" ? [JSON.parse(localStorage.getItem("selectedCard"))] : [];
  selectedVehicleID = localStorage.getItem('selectedVehicleId'); */
  productUrl: any;
  categoryID: any;
  selectedVehicleID: any;
  autoLoanItem = [];
  financeProduct = [];
  product = [];

  value: number = this.profileDate?.userPersonalProfile?.netSalary ? this.profileDate?.userPersonalProfile?.netSalary : 60000;
  options: Options = {
    floor: 3000,
    ceil: 200000
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

  value6: number = 60000;
  options6: Options = {
    floor: 3000,
    ceil: 200000
  };

  value7: number = 2;
  options7: Options = {
    floor: 1,
    ceil: 20
  };

  nationality = 1;
  nationality2 = 1;
  noDataFlag: boolean = true;
  personalFinanceFilterForm: FormGroup;
  autoLeaseFinanceFilterForm: FormGroup;
  salaryTransferFlag: boolean = true;
  nationality3: any;
  mortgageFilterForm: FormGroup;

  constructor(private router: Router, private apiService: CreditlyServicesService,
    private route: ActivatedRoute, private fb: FormBuilder,
    private ngNavigatorShareService: NgNavigatorShareService) {
    this.productUrl = this.route.snapshot.queryParamMap.get("title");
    this.categoryID = this.route.snapshot.queryParamMap.get("prodType");
    this.loadPFFilterForm();
    this.loadAutoLeaseFom();
    this.loadMortgageFilterForm();
    this.setAllAttribute();
    this.nationality = this.profileDate?.userPersonalProfile?.nationalityID ? this.profileDate?.userPersonalProfile?.nationalityID : this.nationality;
    if (this.productUrl == null || this.productUrl == undefined) {
      this.product = localStorage.getItem("CategoryID") == "1" ? [JSON.parse(localStorage.getItem("selectedCard"))] : [];
      this.financeProduct = localStorage.getItem("CategoryID") == "2" ? [JSON.parse(localStorage.getItem("selectedCard"))] : [];
      this.autoLoanItem = localStorage.getItem("CategoryID") == "3" ? [JSON.parse(localStorage.getItem("selectedCard"))] : [];
      this.selectedVehicleID = localStorage.getItem('selectedVehicleId');
    } else {
      this.noDataFlag = false;
      this.getProductDetails();
    }
  }

  ngOnInit(): void {

  }

  FilterValue(id, array) {
    return array?.filter((val) => val.name == "Management Fees")[0]?.value
      ? array?.filter((val) => val.name == "Management Fees")[0]?.value
      : 0;
  }
  FilterValue2(id, array) {
    return array?.filter((val) => val.name == "Early Settlement Fees")[0]?.value
      ? array?.filter((val) => val.name == "Early Settlement Fees")[0]?.value
      : 0;
  }

  filter(event) {
    let id = event.target.value
    // this.bankGroup.patchValue({bankAccountID:parseInt(id)});
    this.bankType = this.banks.filter(val => val.id == id)[0].name;
  }
  ////bank section
  public showCardDetails() {
    this.showCardDetailsFlag = !this.showCardDetailsFlag;
  }
  checkError() {
    let message = [];
    for (const [key, value] of Object.entries(this.apiService.validObject)) {
      let val: any = value;
      console.log(`${key}: ${JSON.stringify(value)}`);
      if (val.valid == false) {
        message.push(key);
      }
    }
    if (message.length == 0)
      return true;
    else {
      this.apiService.notify("please fill requried fields in " + message.join(",") + " details", "error")
      return false;
    }
  }
  acceptTerm() {
    this.term = !this.term;
  }

  public apply(): void {
    this.apiService.change(true);
    if (this.checkError()) {
      this.term = false;
      for (const [key, value] of Object.entries(this.apiService.validObject)) {
        let val: any = value;
        console.log(`${key}: ${JSON.stringify(value)}`);
        if (key == "bank" && val.change === true) {
          this.apiService.bank.next(true);
        }
        if (key == "contact" && val.change === true) {
          this.apiService.contact.next(true);
        }
        if (key == "employment" && val.change === true) {
          this.apiService.employement.next(true);
        }
        if (key == "financial" && val.change === true) {
          this.apiService.financial.next(true);
        }
      }
      if (this.product[0]?.isSendOTP == true || this.financeProduct[0]?.isSendOTP == true || this.autoLoanItem[0].isSendOTP == true) {
        let type;
        if (localStorage.getItem("CategoryID") == "3") {
          type = this.autoLoanItem[0].name;
        } else {
          type = localStorage.getItem("CategoryID") == "2" ? this.financeProduct[0].name : this.product[0].name
        }
        this.apiService.getVerificationOtp(type).subscribe(res => {
          this.term = true;
          this.router.navigateByUrl('/cc-otp');
        }, err => {
          this.term = true;
        })
      } else {
        if (localStorage.getItem("CategoryID") == "3") {

          this.apiService.applyAutoLoan().subscribe((applyAutoLoanResp) => {
            this.term = true
            console.log("applyAutoLoan resp", applyAutoLoanResp);
            localStorage.setItem('requestedCardData', JSON.stringify(applyAutoLoanResp));
            localStorage.removeItem('selectedCard');
            this.router.navigateByUrl('/cc-success');

          })
        } else {
          this.apiService.applyCard().subscribe(val => {
            this.term = true;
            localStorage.setItem('requestedCardData', JSON.stringify(val));
            localStorage.removeItem('selectedCard');
            this.router.navigateByUrl('/cc-success');
          }, err => {
            this.term = true;
          })
        }
      }

    }

  }


  public getProductDetails(): void {
    let req = {
      URL: this.productUrl
    }
    this.apiService.getSharedProductDetails(req).subscribe((resp) => {
      console.log("getSharedProductDetails resp", resp);
      this.noDataFlag = true;
      if (resp) {
        switch (this.categoryID) {
          case '1':
            this.product.push(resp);
            break;
          case '2': this.financeProduct.push(resp);
            break;
          case '3': this.autoLoanItem.push(resp);
            break;
          case '4': this.financeProduct.push(resp);
            break;
        }
      } else {
        this.apiService.notify(resp, 'error');
      }
    })
  }

  public toLogin(): void {
    this.router.navigateByUrl('/login');
  }

  radio(e) {
    this.nationality = e;
    this.nationality2 = e;
  }

  public navigateToCardsListPage(): void {

    let req = {
      netSalary: this.value,
      nationalityId: this.nationality
    }
    localStorage.setItem('sharedProductFilterData', JSON.stringify(req));
    this.router.navigateByUrl('creditly/cards-list');
  }

  public loadPFFilterForm(): void {
    this.personalFinanceFilterForm = this.fb.group({
      NetSalary: [''],
      Period: [''],
      WorkTypeID: [0],
      HasNoSalaryTransfer: [true],
    })
  }

  public Salary(val: boolean): void {
    this.personalFinanceFilterForm.patchValue({ HasNoSalaryTransfer: val });
  }

  public personalFinanceFliter(): void {
    let financeFiltersReq = {
      NetSalary: this.personalFinanceFilterForm.value.NetSalary,
      Period: this.personalFinanceFilterForm.value.Period,
      WorkTypeID: this.personalFinanceFilterForm.value.WorkTypeID,
      NationalityId: this.nationality2,
      HasNoSalaryTransfer: this.personalFinanceFilterForm.value.HasNoSalaryTransfer
    }
    localStorage.setItem('sharedProductFilterData', JSON.stringify(financeFiltersReq));
    this.router.navigateByUrl('creditly/personalFinance');
  }

  public loadAutoLeaseFom() {
    this.autoLeaseFinanceFilterForm = this.fb.group({
      // this.finalNetSalary
      netSalary: [15000],
      financeAmount: [0],
      financePeriod: [3],
      downPayment: [0],
      lastPayment: [0],
      workType: [0],
    });
  }

  public handlerFromSaudi(val): void {
    this.nationality3 = parseInt(val);
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

  public findAutoFinanceFilter(): void {
    let autoloanFilterReq = {
      NetSalary: this.autoLeaseFinanceFilterForm.value.netSalary,
      FinanceAmount: this.autoLeaseFinanceFilterForm.value.financeAmount,
      FinancePeriod: this.autoLeaseFinanceFilterForm.value.financePeriod,
      DownPayment: this.autoLeaseFinanceFilterForm.value.downPayment,
      LastPayment: this.autoLeaseFinanceFilterForm.value.lastPayment,
      WorkType: this.autoLeaseFinanceFilterForm.value.workType,
      NationalityID: this.nationality3,
      HasNoSalaryTransfer: this.salaryTransferFlag
    }
    localStorage.setItem('sharedProductFilterData', JSON.stringify(autoloanFilterReq));
    this.router.navigateByUrl('creditly/autoLease');
  }

  public loadMortgageFilterForm(): void {
    this.mortgageFilterForm = this.fb.group({
      NationalityID: [1],
      WorkTypeID: [0],
      BankID: [0],
      LoanUnitTypeID: [0],
      Period: [20],
      LoanAmount: [100000]
    })
  }

  setAllAttribute() {
    if (this.workTypes) this.workTypes.push({ id: 0, name: "All" });
    if (this.loans) this.loans.push({ id: 0, name: "All" });
    if (this.banks) this.banks.push({ id: 0, name: "All" });
    if (this.loanUnitTypes) this.loanUnitTypes.push({ id: 0, name: "All" });
  }

  filterWork(event) {
    let id = event.target.value;
    this.mortgageFilterForm.patchValue({ WorkTypeID: parseInt(id) });
  }

  public mortgageFilterData(): void {
    let mortgageFilterReq = {
      NationalityID: this.mortgageFilterForm.value.NationalityID,
      WorkTypeID: this.mortgageFilterForm.value.WorkTypeID,
      BankID: this.mortgageFilterForm.value.BankID,
      LoanUnitTypeID: this.mortgageFilterForm.value.LoanUnitTypeID,
      Period: this.mortgageFilterForm.value.Period,
      LoanAmount: this.mortgageFilterForm.value.LoanAmount
    }
    localStorage.setItem('sharedProductFilterData', JSON.stringify(mortgageFilterReq));
    this.router.navigateByUrl('creditly/mortgage');
  }


   /* For share Product */

   shareURL(item,typeValue) {
    /*  // let baseUrl = this.creditlyServices.shareProductUrl;
     let baseUrl = "http://beta.creditly.sa/#/"
     // let baseUrl = "http://localhost:2040/#/"
     let componentUrl = "creditly/shareProductView"
     let totUrl = `${baseUrl}${componentUrl}/?title=${item.seo.url}&prodType=1`
     console.log("totUrl", totUrl);
     const sss = this.router.createUrlTree([], { queryParams: { title: item.seo.url, prodType: '1' } });
     console.log("sss", this.serializer.serialize(sss));
      */

    localStorage.setItem("CategoryID", typeValue);
    if (!this.ngNavigatorShareService.canShare()) {
      this.apiService.notify('This service/api is not supported in your Browser', 'error');
      return
    }

    let baseUrl = this.apiService.shareProductUrl;
    let componentUrl = "creditly/applycard"
    let totUrl = `${baseUrl}${componentUrl}/?title=${item.seo.url}&prodType=${typeValue}`
    console.log("totUrl", totUrl);

    this.ngNavigatorShareService.share({
      title: 'My Awesome app',
      text: 'hey check out my Share button',
      url: totUrl
    }).then((response) => {
      console.log('share response..', response);
      // this.creditlyServices.notify(`${response}`, 'info');
    }).catch((error) => {
      console.log('share error response..', error);
      // this.creditlyServices.notify(`${error}`, 'error');
    })
  }

  /* For share Product */

}
