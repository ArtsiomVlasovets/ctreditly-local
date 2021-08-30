import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-personal-co',
  templateUrl: './personal-co.component.html',
  styleUrls: ['./personal-co.component.scss']
})
export class PersonalCoComponent implements OnInit {

  workTypes = JSON.parse(localStorage.getItem('masterData'))?.workTypes;
  profileDate = JSON.parse(localStorage.getItem('loginResponse'));
  cardListShow=false;

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
  banks = JSON.parse(localStorage.getItem('masterData'))?.banks;
  finding = false;
  loans: Array<any> = JSON.parse(localStorage.getItem('masterData'))?.loans;
  loansTypeID: number = 0;
  formGroup: FormGroup;
  workTypesValue = 'select';
  financeProduct: Array<any> = [];
  complainFilter: Array<any> = [];
  FormValidationFlag = false;
  showCardDetailsFlag: string = "_";
  orifinanceProduct: Array<any> = [];
  compareCard: Array<any> = [];
  constructor(private apiService: CreditlyServicesService, private router: Router) {
    this.initForm();
    this.setAllAttribute();
    if (localStorage.getItem("compareBy") == "personal") {
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
    if (this.compareCard.filter((card) => card.id == val.id).length!==0 || this.compareCard.length != 5) {
      localStorage.setItem("compareBy", "personal");
      if (this.compareCard.filter((card) => card.id == val.id).length == 0) {
        this.compareCard.push(val);
      }
      else {
        this.removeCard(this.compareCard.findIndex((card) => card.id == val.id))
      }
    }
    else
      this.apiService.notify("maximum compare limit is 5", "warning");
  }
  setAllAttribute() {
    if (this.workTypes) this.workTypes.push({ id: 0, name: "All" });
    if (this.loans) this.loans.push({ id: 0, name: "All" });
    if (this.banks) this.banks.push({ id: 0, name: "All" });
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
  private initForm() {
    this.formGroup = new FormGroup({
      PageNumber: new FormControl(1),
      PageSize: new FormControl(100),
      WorkTypeID: new FormControl(
        this.profileDate?.userPersonalProfile?.workTypeID ?
          this.profileDate?.userPersonalProfile?.workTypeID : 0
      ),
      NetSalary: new FormControl(
        this.profileDate?.userPersonalProfile?.netSalary ?
          this.profileDate?.userPersonalProfile?.netSalary : 15000.00
      ),
      NationalityID: new FormControl(
        this.profileDate?.userPersonalProfile?.nationalityID
          ? this.profileDate?.userPersonalProfile?.nationalityID
          : 1
      ),
      DownPayment: new FormControl(0),
      Gender: new FormControl(this.profileDate?.gender ? this.profileDate?.gender : 0),
      Period: new FormControl(5),
      MonthlyObligation: new FormControl(0),
      LoanTypeID: new FormControl(this.loansTypeID),
      BankID: new FormControl(0
      ),
      LoanUnitTypeID: new FormControl(0),
      PersonalFinanceAmount: new FormControl(0),
      PersonalFinancePeriod: new FormControl(0),
      PersonalFinanceStartPaying: new FormControl(this.formatDate()),
      PersonalFinancePaidAmount: new FormControl(0),
      PersonalFinanceRate: new FormControl(0),
      Murabaha: new FormControl(false),
      Tawaruq: new FormControl(false),
      LoanCategoryMasterID: new FormControl(1),
      HasNoSalaryTransfer: new FormControl(true),
      SupportedByREDF: new FormControl(false),
      Shariah_Compliant: new FormControl(false),
      LoanAmount: new FormControl(100000),
      MaxLoanAmount: new FormControl(0),
      MaxPeriod: new FormControl(0),
      MinLoanAmount: new FormControl(0),
      MinPeriod: new FormControl(0),
      AnnualFeeChk: new FormControl(false),
      UserID: new FormControl(this.profileDate?.userPersonalProfile?.userID
        ? this.profileDate?.userBankAccount?.userID
        : 0, [
        Validators.required,
      ]),
      APRSorting: new FormControl(0),
    });
  }
  setLoanType(type) {
    // this.loans.filter(val=>val.name==type)[0].id
    this.loansTypeID = type;
    this.findFinance();
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
  formatDate() {
    let d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
  filterDate(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ BankID: parseInt(id) });
  }

  public applyForCreditCard(data): void {
    localStorage.setItem("selectedCard", JSON.stringify(data));
    localStorage.setItem("CategoryID", "2");
    localStorage.setItem("applyLoanData", JSON.stringify({ duration: this.formGroup.value.Period * 12, mangementFee: this.FilterValue(1, data?.fees) }));
    if (localStorage.getItem("sessionToken"))
      this.router.navigateByUrl('creditly/applyProduct?For=PersonalFinance');
    else
      this.router.navigateByUrl('/login');
  }
  filter(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ WorkTypeID: parseInt(id) });
    this.workTypesValue = this.workTypes.filter((val) => val.id == id)[0].name;
  }
  ngOnInit() {
    // this.findFinance()
  }
  radio(id) {
    this.formGroup.patchValue({ NationalityID: id });
  }
  findFinance() {
    console.log(this.formGroup.value);
    let data = { ...this.formGroup.value };
    if (this.loansTypeID == 0) delete data['PersonalFinanceStartPaying'];

    this.finding = true;
    this.FormValidationFlag = false;
    this.financeProduct = [];
    this.apiService.financeList(data).subscribe(
      (val) => {
        this.financeProduct = val?.products ? val?.products : [];
        this.orifinanceProduct = val?.products ? val?.products : [];
        this.finding = false;
        this.cardListShow=true;
        console.log(val);
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
}
