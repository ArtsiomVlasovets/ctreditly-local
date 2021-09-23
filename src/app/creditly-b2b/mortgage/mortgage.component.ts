import { Options } from '@angular-slider/ngx-slider';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss']
})
export class MortgageComponent implements OnInit {
  loanUnitTypes = JSON.parse(localStorage.getItem('masterData'))?.loanUnitTypes;
  formGroup: FormGroup;
  profileDate = JSON.parse(localStorage.getItem('loginResponse'));
  value1: number = 60000;
  options1: Options = {
    floor: 3000,
    ceil: 200000
  };

  value2: number = 2;
  options2: Options = {
    floor: 1,
    ceil: 20
  };

  value: number = 60000;
  options: Options = {
    floor: 3000,
    ceil: 200000
  };
  loansTypeID: number = 0;
  banks = JSON.parse(localStorage.getItem('masterData'))?.banks;
  finding = false;
  loans: Array<any> = JSON.parse(localStorage.getItem('masterData'))?.loans;
  showCardDetailsFlag: string = "_";
  workTypesValue = 'select';
  financeProduct: Array<any> = [];
  complainFilter: Array<any> = [];
  workTypes = JSON.parse(localStorage.getItem('masterData'))?.workTypes;
  FormValidationFlag = false;
  orifinanceProduct: Array<any> = [];
  compareCard: Array<any> = [];

  constructor(private apiService: CreditlyServicesService, private router: Router,
    private ngNavigatorShareService: NgNavigatorShareService) {
    if (localStorage.getItem("compareBy") == "mortgage") {
      this.compareCard = localStorage.getItem("compairCards") ? JSON.parse(localStorage.getItem("compairCards")) : [];
    }
  }
  removeCard(i) {
    this.compareCard.splice(i, 1);
    localStorage.setItem("compairCards", JSON.stringify(this.compareCard));
    if (this.compareCard.length == 0)
      localStorage.removeItem("compairCards");
  }
  reset() {
    this.compareCard = [];
    localStorage.removeItem("compairCards");
  }
  public navigateToCardsCompare(): void {
    if (this.compareCard.length > 1) {
      localStorage.setItem("compairCards", JSON.stringify(this.compareCard))
      localStorage.setItem("CategoryID", "2");
      this.router.navigateByUrl('creditly/cardsCompare');
    }
    else
      this.apiService.notify("please add two or more cards for comparison", "warning");
  }
  isCard(id) {
    return this.compareCard.filter(card => card.id == id).length ? true : false;
  }
  addToCampare(val) {
    if (this.compareCard.filter((card) => card.id == val.id).length!==0 ||this.compareCard.length != 5) {
      localStorage.setItem("compareBy", "mortgage");
      if (this.compareCard.filter((card) => card.id == val.id).length == 0) {
        this.compareCard.push(val);
      } else {
        this.removeCard(this.compareCard.findIndex((card) => card.id == val.id))
      }
    }
    else
      this.apiService.notify("maximum compare limit is 5", "warning");
  }
  private initForm() {
    this.formGroup = new FormGroup({
      PageNumber: new FormControl(1),
      PageSize: new FormControl(50),
      WorkTypeID: new FormControl(this.profileDate?.userPersonalProfile?.workTypeID ? this.profileDate?.userPersonalProfile?.workTypeID : 0, [Validators.required]),
      NetSalary: new FormControl(this.profileDate?.userPersonalProfile?.netSalary ? this.profileDate?.userPersonalProfile?.netSalary : 15000.00),
      NationalityID: new FormControl(this.profileDate?.userPersonalProfile?.nationalityID ? this.profileDate?.userPersonalProfile?.nationalityID : 0),
      DownPayment: new FormControl(0),
      Gender: new FormControl(1),
      Period: new FormControl(20),
      MonthlyObligation: new FormControl(0),
      LoanTypeID: new FormControl(this.loansTypeID),
      BankID: new FormControl(0, [Validators.required]),
      LoanUnitTypeID: new FormControl(0, [Validators.required]),
      LoanCategoryMasterID: new FormControl(2),
      Murabaha: new FormControl(false),
      Tawaruq: new FormControl(false),
      HasNoSalaryTransfer: new FormControl(true),
      SupportedByREDF: new FormControl(false),
      Shariah_Compliant: new FormControl(false),
      LoanAmount: new FormControl(100000),
      MaxLoanAmount: new FormControl(0),
      MaxPeriod: new FormControl(0),
      MinLoanAmount: new FormControl(0),
      MinPeriod: new FormControl(0),
      AnnualFeeChk: new FormControl(false),
      UserID: new FormControl(this.profileDate?.userPersonalProfile?.userID ? this.profileDate?.userPersonalProfile?.userID : 0, [
        Validators.required,
      ]),
      APRSorting: new FormControl(0),
    });
  }

  setLoanType(type) {
    // this.loans.filter(val=>val.name==type)[0].id
    this.loansTypeID = type;
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
  filterDate(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ BankID: parseInt(id) });
  }

  filter(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ LoanUnitTypeID: parseInt(id) });
  }
  filterWork(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ WorkTypeID: parseInt(id) });
  }
  filterBank(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ BankID: parseInt(id) });
  }
  ngOnInit() {
    this.initForm();
    this.findFinance();
    this.setAllAttribute()
  }
  setAllAttribute() {
    if (this.workTypes) this.workTypes.push({ id: 0, name: "All" });
    if (this.loans) this.loans.push({ id: 0, name: "All" });
    if (this.banks) this.banks.push({ id: 0, name: "All" });
    if (this.loanUnitTypes) this.loanUnitTypes.push({ id: 0, name: "All" });
  }
  setValues(status, no, element, i, name) {
    //2
    if (status == true) {
      if (this.complainFilter.filter((val) => val.id == no).length == 0)
        this.complainFilter.push({ id: no, name, element });
      let value = this.formGroup.value;
      value[element] = true;
      this.formGroup.setValue({ ...value });

    } else if (status == false) {
      this.complainFilter.splice(i, 1);
      let value = this.formGroup.value;
      value[element] = false;
      this.formGroup.setValue({ ...value });
    }
    this.financeProduct = this.orifinanceProduct.filter((item) => {
      for (let i = 0; i < this.complainFilter.length; i++) {
        let ele = this.complainFilter[i]["element"];
        if (item[this.FirstLetter(ele == "SupportedByREDF" ? "supportByREDF" : ele)] === undefined || item[this.FirstLetter(ele == "SupportedByREDF" ? "supportByREDF" : ele)] != this.formGroup.controls[ele].value)
          return false;
      }
      return true;
    });
    if (this.financeProduct.length == 0) {
      this.findFinance();
    }
  }
  FirstLetter(string: string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  radio(id) {
    this.formGroup.patchValue({ NationalityID: parseInt(id) });
  }
  findFinance() {

    if (!this.profileDate) {
      let filterData = JSON.parse(localStorage.getItem('sharedProductFilterData'));

      if (filterData) {
        console.log("filterData", filterData);
        
        this.formGroup.patchValue({
          LoanAmount: filterData.LoanAmount,
          Period: filterData.Period,
          LoanUnitTypeID: filterData.LoanUnitTypeID,
          WorkTypeID: filterData.WorkTypeID,
          BankID: filterData.BankID,
          NationalityID: filterData.NationalityID
        })

      }
    }


    let data = this.formGroup.value;

    this.finding = true;
    this.FormValidationFlag = false;
    this.financeProduct = [];
    console.log("data req", data);
    this.apiService.financeList(data).subscribe(
      (val) => {
        this.financeProduct = val?.products ? val?.products : [];
        this.orifinanceProduct = val?.products ? val?.products : [];
        this.finding = false;
        console.log(val);
        localStorage.removeItem('sharedProductFilterData');
      },
      (err) => (this.finding = false)
    );
  }
  public showCardDetails(i) {
    this.showCardDetailsFlag = i;
  }
  Salary(val: boolean): void {
    this.formGroup.patchValue({ HasNoSalaryTransfer: val });
  }
  public applyForCreditCard(data): void {
    localStorage.setItem("selectedCard", JSON.stringify(data));
    localStorage.setItem("CategoryID", "2");
    localStorage.setItem("applyLoanData", JSON.stringify({ duration: this.formGroup.value.Period * 12, mangementFee: this.FilterValue(1, data?.fees) }));
    if (localStorage.getItem("sessionToken"))
      this.router.navigateByUrl('creditly/applyProduct?For=Mortgage');
    else
      this.router.navigateByUrl('/login');
  }

   /* For share Product */

   shareURL(item) {
    /*  // let baseUrl = this.creditlyServices.shareProductUrl;
     let baseUrl = "http://beta.creditly.sa/#/"
     // let baseUrl = "http://localhost:2040/#/"
     let componentUrl = "creditly/shareProductView"
     let totUrl = `${baseUrl}${componentUrl}/?title=${item.seo.url}&prodType=1`
     console.log("totUrl", totUrl);
     const sss = this.router.createUrlTree([], { queryParams: { title: item.seo.url, prodType: '1' } });
     console.log("sss", this.serializer.serialize(sss));
      */

    localStorage.setItem("CategoryID", '3');
    if (!this.ngNavigatorShareService.canShare()) {
      this.apiService.notify('This service/api is not supported in your Browser', 'error');
      return
    }

    let baseUrl = this.apiService.shareProductUrl;
    let componentUrl = "creditly/applycard"
    let totUrl = `${baseUrl}${componentUrl}/?title=${item.seo.url}&prodType=4`
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

  
   isLoading = false;
  maxListProducts = 10;
  @HostListener("window:scroll", ["$event"])
  getScrollHeight(): void {
    debugger;
    if ((window.innerHeight + window.scrollY >= (document.body.offsetHeight -700)) ) {
      console.log("bottom of the page");
      
      this.isLoading = true;
      if (this.financeProduct.length > 10) {
            this.maxListProducts += 10
      }     
    }
  }
}
