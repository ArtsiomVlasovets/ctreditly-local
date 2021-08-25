import { Component, OnInit } from '@angular/core';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public currentDisplaySection: Number = 0;
  public mobileNo: string = '';
  public otp: string = '';
  public otpAbsher: string = '';
  sessionResp: any;
  public submit: boolean = false;
  loginFormValidationFlag: boolean = false;
  formGroup: FormGroup;
  timeLeft: number = 60;
  interval;
  constructor(
    private creditlyService: CreditlyServicesService,
    private datePipe: DatePipe,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      IqamaID: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required]),
      Gender: new FormControl(1, [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      comPassword: new FormControl('', [Validators.required]),
    });
  }
  register1(): void {
    var randomNumber = Math.floor(Math.random() * 20000000 + 1);
    let req = {
      uUID: randomNumber.toString(),
      platformType: 1,
      systemInfo:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
    };
    let re = /^\d+$/;

    this.loginFormValidationFlag = !(/^\d{10}$/).test(this.mobileNo) ? true : false;
    if (!this.loginFormValidationFlag && re.test(this.mobileNo)) {
      this.submit = true;
          this.creditlyService.verification({ Mobile: this.mobileNo }).subscribe(ver => {
            if (ver?.status == false) {
              this.creditlyService.notify(ver?.message, "warning");
              this.submit = false;
              return false
            } else {
              this.creditlyService
                .registerFirstStep(
                  {
                    Mobile: this.mobileNo,
                  },
                  localStorage.getItem("token")
                )
                .subscribe((result) => {
                  if (result?.status == true) {
                    this.currentDisplaySection = 1;
                    this.submit = false;
                    this.creditlyService.notify(
                      result.message ,
                      'success'
                    );
                    this.startTimer();
                  } else {
                    this.submit = false;
                    this.creditlyService.notify(
                      result.message + "  ( please check your mobile no.)",
                      'error'
                    );
                  }
                }, err => {
                  this.submit = false;
                  this.creditlyService.notify('Oops! something went wrong...', 'error');
                });
            }
          })
    } else {
      this.creditlyService.notify('Please enter valid mobile number', 'error');
    }
  }
  subRegister(data, next) {
    this.submit = true;
    this.creditlyService.registerSubStep(data).subscribe(
      (result) => {
        if (next == 4) {
          localStorage.setItem("loginResponse",JSON.stringify(result));
          if(result?.userSessions?.length){
              localStorage.setItem("sessionToken",result?.userSessions[0]?.token);
              this.creditlyService.to="Profile";
              this.router.navigateByUrl('/userProfile');
              this.creditlyService.notify('Successfully logged in...', 'success');
              this.submit = false;
               return;
          }else{
            this.submit=false;
            this.creditlyService.notify(result.message,"error");
          }
        }
        if (result?.status == true) {
          this.currentDisplaySection = next;
          this.submit = false;
          this.creditlyService.notify(result.message, 'success');
          if (next == 3) {
          this.timeLeft=60;
          this.startTimer();
          }
        } else
         { this.submit = false;
        this.creditlyService.notify(result.message, 'error');}
      },
      (err) => {
        this.submit = false;
        this.creditlyService.notify('Oops! something went wrong...', 'error')
      }
    );
  }
  register2() {
    this.loginFormValidationFlag = this.otp.length == 0 ? true : false;
    if (!this.loginFormValidationFlag) {
      this.subRegister(
        {
          mobile: this.mobileNo,
          otp: this.otp,
          otpType: 'Mobile',
        },
        2
      );
    }
  }

  register3() {
    this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
    let data = this.formGroup.value;
    data.DateOfBirth = this.datePipe.transform(
      new Date(this.formGroup.controls['DateOfBirth'].value),
      'dd-MM-yyyy'
    );
    delete data['comPassword'];
    if (
      !this.loginFormValidationFlag &&
      this.formGroup.controls['comPassword'].value ===
      this.formGroup.controls['Password'].value
    ) {
      this.creditlyService.verification({ IqamaID: this.formGroup.controls["IqamaID"].value }).subscribe(ver => {
        if (ver?.status == false) {
          this.creditlyService.notify(ver?.message, "warning")
          this.submit = false;
          return true
        } else {
          this.subRegister(
            {
              User: this.formGroup.value,
            },
            3
          );
        }
      })
    } else {
      this.creditlyService.notify("Password and Confirm password not match", "error")
    }
  }
  register4() {
    this.loginFormValidationFlag = this.otpAbsher.length == 0 ? true : false;
    if (!this.loginFormValidationFlag) {
      this.subRegister(
        {
          otp: this.otpAbsher,
          otpType: 'Absher',
        },
        4
      );
    }
  }



  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
 resendOtp(){
  this.timeLeft=-1;
  this.creditlyService
  .registerFirstStep(
    {
      Mobile: this.mobileNo,
    },
    this.sessionResp?.token
  )
  .subscribe((result) => {
    if (result?.status == true) {
      this.creditlyService.notify(
        result.message ,
        'success'
      );
      this.timeLeft=60;
      this.startTimer();
    }
 });
}

resendOtp2(){
  this.timeLeft=-1;
  this.creditlyService
  .registerSubStep(
    {
      User: this.formGroup.value,
    }
  )
  .subscribe((result) => {
    if (result?.status == true) {
      this.creditlyService.notify(
        result.message ,
        'success'
      );
      this.timeLeft=60;
      this.startTimer();
    }
 });
}
}
