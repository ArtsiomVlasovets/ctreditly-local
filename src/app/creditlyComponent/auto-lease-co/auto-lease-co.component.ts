import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-auto-lease-co',
  templateUrl: './auto-lease-co.component.html',
  styleUrls: ['./auto-lease-co.component.scss']
})
export class AutoLeaseCoComponent implements OnInit {
  autoLeaseList: any[] = [];
    
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    stagePadding:30,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  constructor(private creditlyServeices: CreditlyServicesService) { }

  ngOnInit(): void {
    this.findAutoFinance();
  }


  public findAutoFinance(): void {
   

    const req = {
            APRSorting: 0,
      AnnualFeeChk: false,
      BankID: 0,
      DownPayment: 0,
      Gender: 1,
      HasNoSalaryTransfer: true,
      LoanAmount: 500000,
      LoanCategoryMasterID: 1,
      LoanTypeID: 0,
      LoanUnitTypeID: 0,
      MaxLoanAmount: 20000000,
      MaxPeriod: 30,
      MinLoanAmount: 200000,
      MinPeriod: 5,
      MonthlyObligation: 0,
      Murabaha: false,
      NationalityID: 1,
      NetSalary: 15000,
      PageNumber: 1,
      PageSize: 100,
      Period: 3,
      PersonalFinanceAmount: 1000,
      PersonalFinancePaidAmount: 1000,
      PersonalFinanceRate: 1.1,
      PersonalFinanceStartPaying: new Date,
      Shariah_Compliant: true,
      SupportedByREDF: false,
      Tawaruq: false,
      UserID: 0,
      WorkTypeID: 0,
    }


    this.creditlyServeices.financeList(req).subscribe(res => {
      console.log("get auto loans resp", res);
      this.autoLeaseList = res.products;
    }, err => {
     
      this.creditlyServeices.notify(err, 'error');
    })



  }


}
