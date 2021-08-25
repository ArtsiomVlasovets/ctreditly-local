import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-credit-card-application-otp',
  templateUrl: './credit-card-application-otp.component.html',
  styleUrls: ['./credit-card-application-otp.component.scss']
})
export class CreditCardApplicationOtpComponent implements OnInit {
  profileDate = JSON.parse(localStorage.getItem("loginResponse"));
  selectedCard = JSON.parse(localStorage.getItem("selectedCard"));
  CategoryID =localStorage.getItem("CategoryID");
  otp: number;
  submit = false;
  constructor(private router: Router, private apiService: CreditlyServicesService) { }

  ngOnInit(): void {
  }

  public gotoConfirm(): void {
    if ((`${this.otp}`).length == 4) {
      this.submit = true;
      this.apiService.VerifyOtp(this.otp).subscribe(val => {
        if (val.status == true) {
          if (localStorage.getItem("CategoryID") == "AutoLoan") {
            this.apiService.applyAutoLoan().subscribe((autoLoanResp) => {
              localStorage.setItem('requestedCardData', JSON.stringify(val));
              localStorage.removeItem('selectedCard');
              this.submit = false;
              this.router.navigateByUrl('/cc-success');
            })
          } else {
            this.apiService.applyCard().subscribe(val => {
              localStorage.setItem('requestedCardData', JSON.stringify(val));
              localStorage.removeItem('selectedCard');

              this.submit = false;
              this.router.navigateByUrl('/cc-success');
            })
          }
        } else {
          this.submit = false;
          this.apiService.notify("Entered wrong otp ", "error")
        }

      })
    } else {
      this.apiService.notify("please enter valid 4 digit otp", "error")
      console.log((`${this.otp}`).length)
    }

  }
  // 6289
}
