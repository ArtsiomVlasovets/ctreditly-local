import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto-lease-finance',
  templateUrl: './auto-lease-finance.component.html',
  styleUrls: ['./auto-lease-finance.component.scss']
})
export class AutoLeaseFinanceComponent implements OnInit {

  public value: number = 15000;
  public options: Options = {
    floor: 3000,
    ceil: 200000
  };

  public value2: number = 5;
  public options2: Options = {
    floor: 0,
    ceil: 3
  };

  public value3: number = 15000;
  public options3: Options = {
    floor: 3000,
    ceil: 1000000
  };

  autoLeaseFinanceForm: FormGroup;
  masterData = JSON.parse(localStorage.getItem('masterData'));
  userData = JSON.parse(localStorage.getItem('loginResponse'));
  workTypesList = [];
  finalNetSalary: any;
  nationality: any;
  salaryTransferFlag: boolean = true;
  calculateNetSalaryResp: any;
  autoLoansList: any;
  filterItemsList = [];
  showCardDetailsFlag: string = "_";
  autoLoansCompareList = [];
  findFinanceFlag: boolean = false;

  constructor(private fb: FormBuilder,
    private creditlyServeices: CreditlyServicesService,
    private spinner: NgxSpinnerService,
    private router: Router, private ngNavigatorShareService: NgNavigatorShareService) {
    this.spinner.show();
    this.workTypesList = this.masterData.workTypes;
    // if()
    this.finalNetSalary = this.userData?.userPersonalProfile?.netSalary ? this.userData.userPersonalProfile.netSalary : 15000;
    this.nationality = this.userData?.userPersonalProfile?.nationalityID ? this.userData?.userPersonalProfile?.nationalityID : 0;
    this.loadAutoLeaseFom();
    // this.calculateNetsalary();
  }

  /* ngOnInit(): void {
    this.findAutoFinance();
  } */

  // async
  ngOnInit() {
    // await this.creditlyServeices.initToken();

    

    this.findAutoFinance();
    if (localStorage.getItem("compareBy") == "AutoLoan") {
      this.autoLoansCompareList = localStorage.getItem("compairCards") ? JSON.parse(localStorage.getItem("compairCards")) : [];
    }
  }

  public calculateNetsalary(): void {
    let req = {
      WorkTypeID: this.userData?.userPersonalProfile?.workTypeID,
      NationalityID: this.nationality,
      MonthlyBasicIncome: this.userData?.userPersonalProfile?.monthlyBasicIncome,
      OtherAllowences: this.userData?.userPersonalProfile?.otherAllowences,
      HousingAllowance: this.userData?.userPersonalProfile?.housingAllowance,
      TransportationAllowance: this.userData?.userPersonalProfile?.transportationAllowance,
      UserId: this.userData?.id
    }
    this.creditlyServeices.calculateNetSalaryAutoLoans(req).subscribe((netSalaryResp) => {
      console.log("netSalaryResp resp", netSalaryResp);
      if (netSalaryResp.statusReply.statusCode == 200) {
        this.calculateNetSalaryResp = netSalaryResp;
        this.finalNetSalary = this.calculateNetSalaryResp?.netSalary;
      }
    })

    return this.finalNetSalary;
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
      netSalary: [this.finalNetSalary == 0 ? this.calculateNetsalary() : this.finalNetSalary],
      financeAmount: [0],
      financePeriod: [3],
      downPayment: [0],
      lastPayment: [0],
      workType: [this.userData?.userPersonalProfile?.workTypeID ?
        this.userData?.userPersonalProfile?.workTypeID : 0],
    });
  }

  public handleFilterItem(filterItem): void {
    // console.log("filterItem", filterItem);
    this.filterItemsList.push(filterItem);
  }

  public reomveFilterItem(item, ind): void {
    // this.filterItemsList.splice(0,item);
    // delete this.filterItemsList[item];
    console.log("item", item)
    const index: number = this.filterItemsList.indexOf(item);
    if (index !== -1) {
      this.filterItemsList.splice(index, 1);
    }
  }


  public findAutoFinance(): void {
    this.findFinanceFlag = true;

    if (!this.userData) {
      let filterData = JSON.parse(localStorage.getItem('sharedProductFilterData'));

      if (filterData) {
        console.log("filterData", filterData);

        this.autoLeaseFinanceForm.patchValue({
          netSalary: filterData.NetSalary,
          financeAmount: filterData.FinanceAmount,
          financePeriod: filterData.FinancePeriod,
          downPayment: filterData.DownPayment,
          lastPayment: filterData.LastPayment,
          workType: filterData.WorkType
        })
        // this.finalNetSalary = filterData.NetSalary
        this.nationality = filterData.NationalityID
        this.salaryTransferFlag = filterData.HasNoSalaryTransfer

      }
    }
    
    let req = {
      PageNumber: 1,
      PageSize: 100,
      WorkTypeID: parseInt(this.autoLeaseFinanceForm.value.workType),
      NetSalary: this.autoLeaseFinanceForm.value.netSalary,
      NationalityID: this.nationality,
      DownPayment: this.autoLeaseFinanceForm.value.downPayment,
      Gender: this.userData?.gender ? this.userData?.gender : 0,
      Period: this.autoLeaseFinanceForm.value.financePeriod,
      MonthlyObligation: this.userData?.userPersonalProfile?.monthlyExtraExpences ? this.userData?.userPersonalProfile?.monthlyExtraExpences : 0,
      LoanTypeID: 13,
      // BankID: this.userData.userBankAccount.bankAccountID == 0? 0 : this.userData.userBankAccount.bankAccountID,
      BankID: 0,
      LoanUnitTypeID: 0,
      // AutoMainID: 0,
      LoanCategoryMasterID: 1,
      PersonalFinanceAmount: 0,
      PersonalFinancePeriod: 0,
      PersonalFinanceStartPaying: null,
      PersonalFinancePaidAmount: 0,
      PersonalFinanceRate: 0.0,
      Murabaha: false,
      Tawaruq: false,
      HasNoSalaryTransfer: this.salaryTransferFlag,
      SupportedByREDF: false,
      Shariah_Compliant: false,
      LoanAmount: this.autoLeaseFinanceForm.value.financeAmount == 0 ? 100000 : this.autoLeaseFinanceForm.value.financeAmount,
      MaxLoanAmount: 0,
      MaxPeriod: 3,
      MinLoanAmount: 0,
      MinPeriod: 0,
      AnnualFeeChk: false,
      UserID: this.userData?.id ? this.userData?.id : 0,
      APRSorting: 0,
      LastPayment: 0,
      managementFee: 0,
      isinsuranceIncluded: false
    }


    this.creditlyServeices.financeList(req).subscribe((autoLoansResp) => {
      console.log("get auto loans resp", autoLoansResp);
      if (autoLoansResp.responseStatusCode == 0) {
        this.findFinanceFlag = false;
        this.autoLoansList = autoLoansResp.products
        localStorage.removeItem('sharedProductFilterData');
      } else {
        this.findFinanceFlag = false
      }
    }, err => {
      this.findFinanceFlag = false;
      this.creditlyServeices.notify(err, "error");
    })



  }

  public applyForAutoLoan(autoLoanItem): void {
    console.log("autoLoanItem", autoLoanItem);
    localStorage.setItem("CategoryID", '3');
    localStorage.setItem("selectedCard", JSON.stringify(autoLoanItem));
    localStorage.removeItem('selectedVehicleId');
    this.router.navigateByUrl('creditly/applycard');
  }

  public showCardDetails(i) {
    this.showCardDetailsFlag = i;
    // this.product[i]['details']=true;
  }

  FilterValue(id, array) {
    return array?.fees.filter((val) => val.name == "Management Fees")[0]?.value
      ? array?.fees.filter((val) => val.name == "Management Fees")[0]?.value
      : 0;
  }

  public isThereProduct(product): void {
    let isThereProductFlag;
    if (this.autoLoansCompareList.filter((item) => item.id == product.id).length != 0) {
      isThereProductFlag = true;
    } else {
      isThereProductFlag = false;
    }
    return isThereProductFlag;
  }

  public addToCompare(product): void {
    // if (this.autoLoansCompareList.length != 5) {

    if (this.autoLoansCompareList.filter((item) => item.id == product.id).length == 0) {
      if (this.autoLoansCompareList.length != 5) {
        localStorage.setItem("compareBy", "AutoLoan");
        this.autoLoansCompareList.push(product);
      } else {
        alert("maximum limit is 5 to compare product...!")
      }
    } else {
      const index = this.autoLoansCompareList.indexOf(product);
      if (index > -1) {
        this.autoLoansCompareList.splice(index, 1);
      }
      console.log(this.autoLoansCompareList);
    }
    // } else {
    //   alert("maximum limit is 5 to compare product...!")
    // }
  }

  public removeProduct(product): void {
    const index = this.autoLoansCompareList.indexOf(product);
    if (index > -1) {
      this.autoLoansCompareList.splice(index, 1);
    }
    console.log(this.autoLoansCompareList);
  }

  public resetList(): void {
    this.autoLoansCompareList = [];
  }

  public navigateToComparePage(): void {
    if (this.autoLoansCompareList.length > 1) {
      localStorage.setItem("compairCards", JSON.stringify(this.autoLoansCompareList))
      localStorage.setItem("CategoryID", "3");
      this.router.navigateByUrl('creditly/cardsCompare');
    } else {
      alert("Add two or more products to Compare...!")
    }
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
      this.creditlyServeices.notify('This service/api is not supported in your Browser', 'error');
      return
    }

    let baseUrl = this.creditlyServeices.shareProductUrl;
    let componentUrl = "creditly/applycard"
    let totUrl = `${baseUrl}${componentUrl}/?title=${item.seo.url}&prodType=3`
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
