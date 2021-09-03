import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
@Component({
  selector: 'app-credit-card-co',
  templateUrl: './credit-card-co.component.html',
  styleUrls: ['./credit-card-co.component.scss']
})
export class CreditCardCoComponent implements OnInit {
   private ngNavigatorShareService: NgNavigatorShareService;
  profileDate = JSON.parse(localStorage.getItem('loginResponse'));
  cardListShow=false;
  cards = JSON.parse(localStorage.getItem("masterData"))?.cards;
  value: number = this.profileDate?.userPersonalProfile?.netSalary ? this.profileDate?.userPersonalProfile?.netSalary : 60000;
  options: Options = {
    floor: 3000,
    ceil: 200000
  };
  NationalityID = 1;
  showCardDetailsFlag: string = "_";
  oriProduct: Array<any> = [];
  product: Array<any> = [];
  submit = false;
  isSoudi = false;
  compare = false;
  finding = false;
  financeProduct: Array<any> = [];
  complainFilter: Array<any> = [];

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
  constructor(private router: Router, private creditlyServices: CreditlyServicesService, ngNavigatorShareService: NgNavigatorShareService) {
    if (localStorage.getItem("compareBy") == "card") {
      this.compareCard = localStorage.getItem("compairCards") ? JSON.parse(localStorage.getItem("compairCards")) : [];
    }

    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {

  }
  addCompare() {

  }

  async shareApi() {
    try{
      const sharedResponse = await this.ngNavigatorShareService.share({
        title:'`Web Articles and Tutorials',
        text: 'Check out my blog — its worth looking.',
        url: 'www.codershood.info'
      });
      console.log(sharedResponse);
    } catch(error) {
      console.log('You app is not shared, reason: ',error);
    }
    
  }


  selectCard(id) {
    this.mainData.CardTypeID = id;
    this.search();
  }
  public showCardDetails(i) {
    this.showCardDetailsFlag = i;
  }

  public applyForCreditCard(data): void {
    localStorage.setItem("selectedCard", JSON.stringify(data));
    localStorage.setItem("CategoryID", "1");
    if (localStorage.getItem("sessionToken"))
      this.router.navigateByUrl('creditly/applyProduct?For=CreditCard');
    else
      this.router.navigateByUrl('/login');
  }

  public navigateToCardsCompare(): void {
    if (this.compareCard.length > 1) {
      localStorage.setItem("compairCards", JSON.stringify(this.compareCard))
      localStorage.setItem("CategoryID", "1");
      this.router.navigateByUrl('creditly/cardsCompare');
    }
    else
      this.creditlyServices.notify("please add two or more cards for comparison", "warning");
  }
  radio(e) {
    this.NationalityID = e;
  }

  setValues(status, no, element, i, name) {
    //2
    if (status == true) {
      if (this.complainFilter.filter((val) => val.id == no).length == 0)
        this.complainFilter.push({ id: no, name, element });
      this.mainData[element] = true;
    } else if (status == false) {
      this.complainFilter.splice(i, 1);
      this.mainData[element] = false;
    }
    this.product = this.oriProduct.filter((item) => {
      for (let i = 0; i < this.complainFilter.length; i++) {
        if (item[this.FirstLetter(this.complainFilter[i]["element"])] === undefined || item[this.FirstLetter(this.complainFilter[i]["element"])] != this.mainData[this.complainFilter[i]["element"]])
          return false;
      }
      return true;
    });
    if (this.product.length == 0) {
      this.search();
    }
  }
  FirstLetter(string: string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  search() {
    this.submit = true;
    this.finding = true;
    var randomNumber = Math.floor(Math.random() * 20000000 + 1);
    let req = {
      uUID: randomNumber.toString(),
      platformType: 1,
      systemInfo:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
    };
    let data = {
      "PageNumber": 1,
      "PageSize": 100,
      "WorkTypeID": this.profileDate?.userPersonalProfile?.workTypeID ?
        this.profileDate?.userPersonalProfile?.workTypeID : 0,
      "NetSalary": this.value,
      "NationalityID": this.profileDate?.userPersonalProfile?.nationalityID ?
        this.profileDate?.userPersonalProfile?.nationalityID : this.NationalityID,
      "Gender": this.profileDate?.gender ?
        this.profileDate?.gender : 0,
      "MonthlyObligation": this.profileDate?.userPersonalProfile?.monthlyExtraExpences ?
        this.profileDate?.userPersonalProfile?.monthlyExtraExpences : 0,
      "CardTypeID": this.mainData.CardTypeID,
      "BankID": 0,
      "IsCashBack": this.mainData.IsCashBack,
      "IsLoungeAccess": this.mainData.IsLoungeAccess,
      "IsNoAnualFee": this.mainData.IsNoAnualFee,
      "HasNoSalaryTransfer": true,
      "Shariah_Compliant": this.mainData.Shariah_Compliant,
      "AnnualFeeChk": false,
      "UserID": 0,
      "APRSorting": 0
    }
    this.product = [];
    this.creditlyServices.cardList(data).subscribe(val => {
      this.submit = false;
      this.product = val.products ? val.products : [];
      this.finding = false;
      this.oriProduct = val.products ? val.products : [];
      this.cardListShow=true;
    }, err => {
      this.finding = false;
      this.submit = false;
    })
  }
  addToCampare(val) {
    if (this.compareCard.filter((card) => card.id == val.id).length!==0 ||this.compareCard.length != 5) {
      localStorage.setItem("compareBy", "card");
      if (this.compareCard.filter((card) => card.id == val.id).length == 0) {
        this.compareCard.push(val);
      }
      else {
        this.removeCard(this.compareCard.findIndex((card) => card.id == val.id))
      }
    }
    else
      this.creditlyServices.notify("maximum compare limit is 5", "warning");
  }
  removeCard(i) {
    this.compareCard.splice(i, 1);
    localStorage.setItem("compairCards", JSON.stringify(this.compareCard));
    if (this.compareCard.length == 0)
      localStorage.removeItem("compairCards");
  }
  isCard(id) {
    return this.compareCard.filter(card => card.id == id).length ? true : false;
  }
  reset() {
    this.compareCard = [];
    localStorage.removeItem("compairCards");
  }
}
