import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-bank-account-open',
  templateUrl: './bank-account-open.component.html',
  styleUrls: ['./bank-account-open.component.scss']
})
export class BankAccountOpenComponent implements OnInit {

  profileData = JSON.parse(localStorage.getItem("loginResponse"));
  banks = JSON.parse(localStorage.getItem('masterData'))?.banks;
  banksList = [];
  term: boolean = false;
  selectedBankToOpen: any;



  constructor(private router: Router, private creditlyServices: CreditlyServicesService) { }

  ngOnInit(): void {
    this.banksList = this.banks.filter(item => item.isProductAvail == true);
  }

  checkError() {
    let message = [];
    for (const [key, value] of Object.entries(this.creditlyServices.validObject)) {
      let val: any = value;
      console.log(`${key}: ${JSON.stringify(value)}`);
      if (val.valid == false) {
        message.push(key);
      }
    }
    if (message.length == 0)
      return true;
    else {
      this.creditlyServices.notify("please fill requried fields in " + message.join(",") + " details", "error")
      return false;
    }
  }

  acceptTerm() {
    this.term = !this.term;
  }

  public toLogin(): void {
    this.router.navigateByUrl('/login');
  }

  public selectBank(item): void {
    console.log("selectBank item", item);
    this.selectedBankToOpen = item;
  }

  public apply(): void {
    this.creditlyServices.change(true);
    if (this.checkError()) {
      this.term = false;

      for (const [key, value] of Object.entries(this.creditlyServices.validObject)) {
        let val: any = value;
        console.log(`${key}: ${JSON.stringify(value)}`);
        if (key == "bank" && val.change === true) {
          this.creditlyServices.bank.next(true);
        }
        if (key == "contact" && val.change === true) {
          this.creditlyServices.contact.next(true);
        }
        if (key == "employment" && val.change === true) {
          this.creditlyServices.employement.next(true);
        }
        if (key == "financial" && val.change === true) {
          this.creditlyServices.financial.next(true);
        }
      }

      if (this.selectedBankToOpen?.id) {
        let req = {
          UserID: this.profileData.id,
          CategoryID: 4,
          ProductID: this.selectedBankToOpen.id,
          BankID: this.selectedBankToOpen.id,
          UserRequestStatusCode: 101
        }
        this.creditlyServices.openBankAccount(req).subscribe((resp) => {
          this.term = true
          console.log("bank acc open response", resp);
          if (resp.responseStatusCode == 0) {
            localStorage.setItem('CategoryID','bank');
            localStorage.setItem('requestedCardData', JSON.stringify(resp));
            localStorage.removeItem('selectedCard');
            this.router.navigateByUrl('/cc-success');
          } else {
            this.creditlyServices.notify(`${resp.message}`, 'error');
          }
        })
      } else {
        this.creditlyServices.notify("Please Select Bank", "error");
      }

    }

  }

}
