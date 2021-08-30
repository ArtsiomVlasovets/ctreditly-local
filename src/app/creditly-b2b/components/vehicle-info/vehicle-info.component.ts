import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  masterData = JSON.parse(localStorage.getItem('masterData'));
  userData = JSON.parse(localStorage.getItem('loginResponse'));
  vehiclesList = JSON.parse(localStorage.getItem('vehicleMainList'));
  selectedVehicleId = localStorage.getItem('selectedVehicleId');

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

  slides = [];

  slideConfig = {
    centerPadding: '10px',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: "<div class='slick-next'></div>",
    prevArrow: "<div class='slick-prev'></div>",
    dots: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  currentVehicle: any;
  vehicleMasterSpecifications= [];
  currentVehiclepecificationsList = [];
  nationality: any;
  filterItemsList = [];
  salaryTransferFlag: boolean = true;
  workTypesList = [];
  autoLeaseForVehicleForm: FormGroup;
  calculateNetSalaryResp: any;
  finalNetSalary: any;
  vehicleAutoLoansList = [];
  showCardDetailsFlag: string = "_";
  findCarFinanceFlag: boolean = true;

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
  constructor(private fb: FormBuilder,
     private creditlyServeices: CreditlyServicesService,
     private router: Router, private ngNavigatorShareService: NgNavigatorShareService) { 
      this.finalNetSalary = this.userData?.userPersonalProfile?.netSalary ? this.userData.userPersonalProfile.netSalary : 15000;
      this.loadAutoLoansListForVehicleForm();
     }

  ngOnInit(): void {
    this.currentVehicle = this.vehiclesList?.filter(item => item.id == this.selectedVehicleId);
    console.log("this.currentVehicle",this.currentVehicle);
    this.vehicleMasterSpecifications = this.masterData.autoVehicleMasterSpecification;
    this.nationality = this.userData?.userPersonalProfile?.nationalityID ? this.userData?.userPersonalProfile?.nationalityID : 0;
    this.workTypesList = this.masterData.workTypes;
    
    
    // this.vehicleDetailsList = 
    this.vehicleMasterSpecifications.forEach((masterItem) => {
      this.currentVehicle[0].vehicleSpecifications.forEach((item) => {
        if(item.vehicleMasterSpecificationID == masterItem.id) {
          let obj = {
            specificationName: masterItem.name,
            specificationValue: item.value
          }
          this.currentVehiclepecificationsList.push(obj);
        }
      })
    })

   
    this.getVehicleDetailsByAUtoLeaseID();
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
        // this.findAutoFinance(); 
      }
    })

    return this.finalNetSalary;
  }

  public loadAutoLoansListForVehicleForm(): void {
    this.autoLeaseForVehicleForm = this.fb.group({
      netSalary: [this.finalNetSalary == 0 ? this.calculateNetsalary() : this.finalNetSalary],
      financeAmount: [0],
      financePeriod: [3],
      downPayment: [0],
      lastPayment: [0],
      workType: [this.userData?.userPersonalProfile?.workTypeID?
        this.userData?.userPersonalProfile?.workTypeID:0]
    })
  }

  public handlerFromSaudi(val): void {
    this.nationality = parseInt(val);
  }

  public handleFilterItem(filterItem): void {
    // console.log("filterItem", filterItem);
    this.filterItemsList.push(filterItem);
  }

  public handlerSalaryTransfer(inputValue): void {
    if (inputValue === 'yes') {
      // console.log("true ")
      this.salaryTransferFlag = true;
    } else {
      // console.log("false")
      this.salaryTransferFlag = false;
    }
  }

  public getVehicleDetailsByAUtoLeaseID(): void {
    this.findCarFinanceFlag = true;
    console.log("this.currentVehicle.autoLeaseLoanIDs",this.currentVehicle.autoLeaseLoanIDs)

    let req = {
      ID: this.currentVehicle[0].autoLeaseLoanIDs,
      PageNumber: 1,
      PageSize: 100,
      WorkTypeID: this.autoLeaseForVehicleForm.value.workType,
      NetSalary: this.finalNetSalary,
      NationalityID: this.nationality,
      DownPayment: this.autoLeaseForVehicleForm.value.downPayment,
      lastPayment: this.autoLeaseForVehicleForm.value.lastPayment,
      Gender: this.userData?.gender ? this.userData?.gender : 0,
      Period: this.autoLeaseForVehicleForm.value.financePeriod,
      MonthlyObligation: this.userData?.userPersonalProfile?.monthlyExtraExpences ? this.userData?.userPersonalProfile?.monthlyExtraExpences : 0,
      LoanTypeID: 19,
      BankID: this.currentVehicle.bankID,
      AutoMainID: this.currentVehicle.autoMainID,
      VehicleConditionTypeID: this.currentVehicle.vehicleConditionTypeID,
      LoanUnitTypeID: 0,
      LoanCategoryMasterID: 1,
      PersonalFinanceAmount: 0,
      PersonalFinancePeriod: 0,
      PersonalFinanceStartPaying: null,
      PersonalFinancePaidAmount: 0,
      PersonalFinanceRate: 0.0,
      isinsuranceIncluded: false,
      Murabaha: false,
      Tawaruq: false,
      HasNoSalaryTransfer: this.salaryTransferFlag,
      SupportedByREDF: false,
      Shariah_Compliant: false,
      LoanAmount: this.autoLeaseForVehicleForm.value.financeAmount == 0 ? 100000 : this.autoLeaseForVehicleForm.value.financeAmount,
      MaxLoanAmount: 0,
      MaxPeriod: 3,
      MinLoanAmount: 0,
      MinPeriod: 0,
      AnnualFeeChk: false,
      UserID: this.userData?.id ? this.userData?.id : 0,
      APRSorting: 0,
      // managementFee: 0,
    }

    this.creditlyServeices.financeList(req).subscribe((vehicleAutoLoansResp) => {
      console.log("get vehicle auto loans resp", vehicleAutoLoansResp);
      if (vehicleAutoLoansResp.responseStatusCode == 0) {
        this.vehicleAutoLoansList = vehicleAutoLoansResp.products;
        this.findCarFinanceFlag = false;
      }
    }, err=> {
      this.findCarFinanceFlag = false;
    })

  }

  FilterValue(id, array) {
    return array?.fees.filter((val) => val.name == "Management Fees")[0]?.value
      ? array?.fees.filter((val) => val.name == "Management Fees")[0]?.value
      : 0;
  }
 
  public showCardDetails(i) {
    this.showCardDetailsFlag = i;
    // this.product[i]['details']=true;
  }

  public applyForVehicleAutoLoan(autoLoanItem): void {
    console.log("autoLoanItem", autoLoanItem);
    localStorage.setItem("CategoryID", 'AutoLoan');
    localStorage.setItem("selectedCard", JSON.stringify(autoLoanItem));
    this.router.navigateByUrl('creditly/applyProduct?For=VehicleInfo');
  }

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

}
