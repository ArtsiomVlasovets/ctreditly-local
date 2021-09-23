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

  sendOTPForm: FormGroup;
  sendOTpisSubmitted = false;
  sessionResp: any;
   maxTime = 30;
 
  verifyOTPForm: FormGroup;
  updatePasswordForm: FormGroup;
  constructor(private router: Router, private creditlyServices: CreditlyServicesService,
    private fb: FormBuilder, private _el: ElementRef) {
    this.sendOTPForm = this.fb.group({
      phone: ['', Validators.required]
    });

    this.verifyOTPForm = this.fb.group({
      otp: ['', Validators.required]
    });

    this.updatePasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });

     }

  ngOnInit(): void {

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


   sendOTP(curr, next): void {
    let form = this.sendOTPForm.value;
     this.sendOTpisSubmitted = true;
       curr.className = 'hiddenBoxes';
        next.className = 'forgotpass2';
    // if (this.sendOTPForm.valid) {
    //   this.creditlyServices.forgotPassword({ phone: form.phone }).subscribe((resp) => {
    //      this.creditlyServices.notify(resp.message, 'success');
    //       this.maxTime = 30;
    //     this.StartTimer();
    //     curr.className = 'hiddenBoxes';
    //     next.className = 'forgotpass2';
    //   }, err => {
         
    //       this.creditlyServices.notify(err.message, 'error');
    //   })
    // } else {
      
    //   this.creditlyServices.notify("Please enter Phone number", 'error');
    // }
  }

   StartTimer() {

    setTimeout(x => {
          if (this.maxTime <= 0) { }
             this.maxTime -= 1;

          if (this.maxTime > 0) {
           
            this.StartTimer();
          } 

      }, 1000);
  }

   resendOTP(): void {

   }
  
  verifyOTP(curr, next) {
        curr.className = 'hiddenBoxes';
        next.className = 'forgotpass3';
  }

   updatePassword(curr): void {
    /* this.showForgotPwdFlag= false;
    this.innerForgotPwdFlag = false; */
   
    if (true) {
     
     let form ={}
      this.creditlyServices.updatePassword(form).subscribe((resp) => {
        console.log("updatePassword resp", resp);
        if (resp.status == true) {
          
          this.creditlyServices.notify(resp.message, "success");
        } else {
         
          this.creditlyServices.notify(resp.message, "error");
        }

      })
    } else {
     
      this.creditlyServices.notify("Please enter all fields", "error");
    }
   }
  
  



}
