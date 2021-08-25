import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from '../creditly-services.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  sessionResp: any;
  loginFormValidationFlag: boolean = false;
  submit: boolean = false;
  showForgotPwdFlag: boolean = false;
  innerForgotPwdFlag: boolean = false;
  forgotIqmaId: any;
  validIqamaForgotFlag: boolean;
  updatePasswordForm: FormGroup;
  updatePwdFormFlag: boolean = false;
  sendOTPFlag: boolean = false;
  updatePwdSubmitFlag: boolean = false;
  OTPExpireTime: number = 120;
  interval;
  constructor(private router: Router, private creditlyServices: CreditlyServicesService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.loadUpdatePwdForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      Mobile: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      password: new FormControl('', [Validators.required])
    });
  }

  public loadUpdatePwdForm(): void {
    this.updatePasswordForm = this.fb.group({
      otp: ['', Validators.required],
      newPwd: ['', Validators.required],
      confirmPwd: ['', Validators.required]
    })
  }

  public gotoCardsSearchPage() {
    this.router.navigateByUrl('/');
  }

  loginProcess() {
    this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
    if (!this.formGroup.controls["Mobile"].valid)
      this.creditlyServices.notify("Please enter valid mobile number", "error");
    if (!this.loginFormValidationFlag) {
      this.submit = true;
      var randomNumber = Math.floor(Math.random() * 20000000 + 1);
      let req = {
        uUID: randomNumber.toString(),
        platformType: 1,
        systemInfo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36"
      }
      this.creditlyServices.login(this.formGroup.value, localStorage.getItem("token")).subscribe(result => {
        if (result != null && result != undefined) {
          localStorage.setItem("loginResponse", JSON.stringify(result));
          if (result?.userSessions?.length) {
            localStorage.setItem("sessionToken", result?.userSessions[0]?.token);
            localStorage.setItem("token", result?.userSessions[0]?.token);
            this.creditlyServices.to = "Profile";
            this.router.navigateByUrl('/userProfile');
          } else {
            this.submit = false;
            this.creditlyServices.notify(result.message, "error");
          }
        }
      }, err => {
        this.submit = false;
        this.creditlyServices.notify("Oops! something went wrong...", "error");
      })
    }
  }

  public forgotPassword(): void {
    this.showForgotPwdFlag = true;
  }

  public goToLogin(): void {
    this.showForgotPwdFlag = false;
  }

  public sendOTP(): void {
    console.log("forgotIqmaId", this.forgotIqmaId)
    /* this.validIqamaForgotFlag = false;
    this.innerForgotPwdFlag = true; */
    this.sendOTPFlag = true;
    if (this.forgotIqmaId) {
      this.creditlyServices.forgotPassword(this.forgotIqmaId).subscribe((resp) => {
        console.log("forgotPassword resp", resp);
        if (resp.status == true) {
          this.sendOTPFlag = false;
          this.forgotIqmaId = null;
          this.creditlyServices.notify(resp.message, 'success');
          this.validIqamaForgotFlag = false;
          this.innerForgotPwdFlag = true;
          this.OTPExpireTime = 10;
          this.startOTPCountdown();
        } else {
          this.sendOTPFlag = false;
          this.creditlyServices.notify(resp.message, 'error');
        }
      })
    } else {
      this.validIqamaForgotFlag = true
      this.sendOTPFlag = false;
      this.creditlyServices.notify("Please enter Nationality ID/Iqama", 'error');
    }
  }

  public startOTPCountdown(): void {

    this.interval = setInterval(() => {
      if (this.OTPExpireTime > 0) {
        this.OTPExpireTime--;
      }else if(this.OTPExpireTime == 0) {
        this.resendOTP();
      } else {
        this.pauseTimer();
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  public resendOTP(): void {
    this.sendOTPFlag = false;
    this.validIqamaForgotFlag = false;
    this.innerForgotPwdFlag = false;
  }

  public updatePassword(): void {
    /* this.showForgotPwdFlag= false;
    this.innerForgotPwdFlag = false; */
    this.updatePwdSubmitFlag = true;
    this.updatePwdFormFlag = this.updatePasswordForm.invalid ? true : false;
    if (!this.updatePwdFormFlag) {
      let req = {
        OTP: this.updatePasswordForm.value.otp,
        Password: this.updatePasswordForm.value.newPwd,
        ConfirmPassword: this.updatePasswordForm.value.confirmPwd
      }
      console.log("req", req);
      this.creditlyServices.updatePassword(req).subscribe((resp) => {
        console.log("updatePassword resp", resp);
        if (resp.status == true) {
          this.updatePwdSubmitFlag = false;
          this.updatePasswordForm.reset();
          this.showForgotPwdFlag = false;
          this.innerForgotPwdFlag = false;
          this.creditlyServices.notify(resp.message, "success");
        } else {
          this.updatePwdSubmitFlag = false;
          this.creditlyServices.notify(resp.message, "error");
        }

      })
    } else {
      this.updatePwdSubmitFlag = false;
      this.creditlyServices.notify("Please enter all fields", "error");
    }
  }

}
