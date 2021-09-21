import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditlyServicesService } from '../creditly-services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

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
    private fb: FormBuilder, private _el: ElementRef) { }

  ngOnInit(): void {
    this.initForm();
    this.loadUpdatePwdForm();
  }

  @HostListener('keyup', ['$event']) onKeyDown(e: any) {
    console.log(e);
    if (e.srcElement.maxLength === e.srcElement.value.length) {

        e.preventDefault();

        let nextControl: any = e.srcElement.nextElementSibling;
        let previousControl: any = e.srcElement.previousElementSibling;
       // Searching for next similar control to set it focus
        while (true)
        {
          if (nextControl) {
            if (nextControl.type === e.srcElement.type) {
              nextControl.focus();
              return;
            }
            else {
              nextControl = nextControl.nextElementSibling;
            }
          }
          else {
            return;
          }
               
        }
    }
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

  public sendOTP(): void {
    console.log("forgotIqmaId", this.forgotIqmaId)

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
      this.creditlyServices.notify("Please enter Phone number", 'error');
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
