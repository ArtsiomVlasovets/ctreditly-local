import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { $, promise } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotifierService } from 'angular-notifier';
// import { baseUrl } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root',
})
export class CreditlyServicesService {

  shareProductUrl = "http://beta.creditly.sa/#/";
  // shareProductUrl = "http://localhost:2040/#/";

  private subject = new Subject<any>();
  public bank = new Subject<any>();
  public contact = new Subject<any>();
  public employement = new Subject<any>();
  public financial = new Subject<any>();
  request = new Subject<any>();
  formCompletion = 0;
  finding = false;
  private readonly notifier: NotifierService;
  baseUrl = environment.baseUrl;
  mainBaseUrl = environment.mainBaseUrl;
  headers = new HttpHeaders();
  to = "";
  req = {
    uUID: Math.floor(Math.random() * 20000000 + 1).toString(),
    platformType: 1,
    systemInfo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36"
  };
  encryptSecretKey = "Creditly#Secret"

  validObject: any = { bank: { valid: false, change: false }, contact: { valid: false, change: false }, employment: { valid: false, change: false }, financial: { valid: false, change: false } };
  selectedVehicleID: any;
  autoLoanItem = localStorage.getItem("CategoryID") == "AutoLoan" ? [JSON.parse(localStorage.getItem("selectedCard"))] : [];
  profileDate = JSON.parse(localStorage.getItem("loginResponse"));

  constructor(private http: HttpClient, notifierService: NotifierService) {
    this.notifier = notifierService;
    this.to = localStorage.getItem("sessionToken") ? "Profile" : "Login";
    this.headers = this.headers
      .set(
        'Authorization',
        'API_User_Auth ' +
        'JGNyZWRpdGx5d2ViYXBpOmUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNl'
      )
      .set('API_Key', '5A2A6A7E-F86F-4877-83D3-9')
      .set('APP_Type', '1')
      .set('APP_Code', 'CR1T1')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'en');
  }
  change(value) {
    this.subject.next(value);
  }

  subscribe(): Observable<any> {
    return this.subject.asObservable();
  }
  public generateSessionToken(data): Observable<any> {
    let headers = this.headers.set('Token', 'bb20c0eb6075e1127022d303f1e377fd');
    return this.http.post(this.baseUrl + 'init', data, { headers: headers });
  }

  login(data, token): Observable<any> {
    let headers = this.headers.set('Token', token);
    localStorage.setItem("refreshRequest", this.encryptData({ password: data.password, mobile: data.Mobile }))
    return this.http.post(`${this.baseUrl}login`, data, { headers: headers });
  }
  refreshData() {
    let value: any = this.decryptData(localStorage.getItem("refreshRequest"));
    let obj = { Mobile: value.mobile, password: value.password };
    this.login(obj, localStorage.getItem("token")).subscribe(result => {
      if (result != null && result != undefined) {
        localStorage.setItem("loginResponse", JSON.stringify(result));
      }
    })
  }
  public initToken() {
    return new Promise((resolve, reject) => {
      this.generateSessionToken(this.req).subscribe((resp) => {
        let sessionResp = resp
        if (sessionResp != undefined && sessionResp != null) {
          resolve(true);
          localStorage.setItem("token", sessionResp?.token);
        }
      }, err => {
        reject(false);
      })
    })
  }
  registerFirstStep(data, token): Observable<any> {
    let headers = this.headers.set('Token', token);
    return this.http.post(`${this.baseUrl}register`, data, {
      headers: headers,
    });
  }
  registerSubStep(data): Observable<any> {
    let headers = this.headers.set(
      'Token',
      localStorage.getItem('token')
    );
    return this.http.post(`${this.baseUrl}register`, data, {
      headers: headers,
    });
  }
  master(token: string): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));
    return this.http.get(`${this.mainBaseUrl}Index/masters`, { headers: headers });
  }
  profileContact(data): Observable<any> {
       let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));

    return this.http.post(`${this.mainBaseUrl}user/profile/updateContact`, data, {
      headers: headers,
    });
  }
  profileEmployment(data): Observable<any> {
       let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));

    return this.http.post(`${this.mainBaseUrl}user/profile/updateEmployment`, data, {
      headers: headers,
    });
  }
  profileBank(data): Observable<any> {
       let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));

    return this.http.post(`${this.mainBaseUrl}user/profile/updateBank`, data, {
      headers: headers,
    });
  }
  profileFinance(data): Observable<any> {
       let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));

    return this.http.post(`${this.mainBaseUrl}user/profile/updateFinance`, data, {
      headers: headers,
    });
  }
  cardList(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));
    return this.http.post(`${this.mainBaseUrl}Card/list`, data, {
      headers: headers,
    });
  }
  financeList(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));
    return this.http.post(`${this.mainBaseUrl}Loan/list`, data, {
      headers: headers,
    });
  }
  verification(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    return this.http.post(`${this.mainBaseUrl}session/register/validation`, data, {
      headers: headers,
    });
  }

  notify(msg, status) {
    this.notifier.notify(status, msg);
  }



  /* Auto Loans */

  public getAutoLoansList(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    try {
      return this.http.post(this.mainBaseUrl + "Auto/list", data, { headers: headers })
    } catch (error) {
      return error;
    }
  }

  public calculateNetSalaryAutoLoans(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    try {
      return this.http.post(this.mainBaseUrl + "user/UserIncomeStrategy", data, { headers: headers })
    } catch (error) {
      return error;
    }
  }

  public getAllVehiclesList(): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    try {
      return this.http.get(this.mainBaseUrl + "Auto/vehicledetails", { headers: headers })
    } catch (error) {
      return error;
    }
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
  public applyAutoLoan(): Observable<any> {

    let req = {

      UserID: this.profileDate.userSessions[0].userID,
      CategoryID: 3,
      autoMainID: this.autoLoanItem[0].autoMainID,
      ProductID: this.autoLoanItem[0].id,
      BankID: this.autoLoanItem[0].bankID,
      UserRequestStatusCode: 101,
      UserRequestProductInfo: {
        LoanOrCardAmount: this.autoLoanItem[0].actualLoanAmount,
        Duration: this.autoLoanItem[0].numberOfPayments,
        ProfitRate: this.autoLoanItem[0].rate,
        MonthlyInstallment: this.autoLoanItem[0].monthlyInstallment,
        ProductCategoryID: 1,
        SalaryTransfer: this.autoLoanItem[0].hasNoSalaryTransfer,
        TotalAmounttobepaid: this.autoLoanItem[0].totalPayments,
        APR: this.autoLoanItem[0].apr,
        Status: true,
        Request_datetime: new Date().toISOString(),
        ManagementFees: this.FilterValue(1, this.autoLoanItem[0]?.fees)
      }
    }

    if(this.selectedVehicleID != undefined) {
      req['VehicleId'] = parseInt(this.selectedVehicleID)
  } 

    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    try {
      return this.http.post(this.mainBaseUrl + "User/request/update", req, { headers: headers })
    } catch (error) {
      return error;
    }
  }

  UserIncomeStrategy(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    return this.http.post(`${this.mainBaseUrl}/user/UserIncomeStrategy`, data, {
      headers: headers,
    });
  }
  getVerificationOtp(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    return this.http.get(`${this.mainBaseUrl}/user/applyproduct/${data}`, {
      headers: headers,
    });
  }
  VerifyOtp(otp): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    return this.http.get(`${this.mainBaseUrl}/user/verifyapplyproduct/${otp}`, {
      headers: headers,
    });
  }

  applyCard(): Observable<any> {
    let payload = {

      "UserID": JSON.parse(localStorage.getItem("loginResponse")).userPersonalEmployement?.userID,
      "CategoryID": parseInt(localStorage.getItem("CategoryID")),
      "ProductID": parseInt(JSON.parse(localStorage.getItem("selectedCard")).id),
      "BankID": parseInt(JSON.parse(localStorage.getItem("selectedCard")).bankID),
      "UserRequestStatusCode": 101,
      "UserRequestProductInfo":
      {
        "LoanOrCardAmount": parseFloat(JSON.parse(localStorage.getItem("selectedCard"))?.limit) ? parseFloat(JSON.parse(localStorage.getItem("selectedCard")).limit) : 0,
        "ProfitRate": parseFloat(JSON.parse(localStorage.getItem("selectedCard")).rate),
        "ProductCategoryID": parseFloat(JSON.parse(localStorage.getItem("selectedCard")).cardTypeID),
        "SalaryTransfer": (JSON.parse(localStorage.getItem("selectedCard")).hasNoSalaryTransfer),
        "APR": parseFloat(JSON.parse(localStorage.getItem("selectedCard")).apr),
        "Status": true,
        "Request_datetime": new Date().toISOString(),
      }
    }
    if (localStorage.getItem("CategoryID") == "2") {
      let selectCard = JSON.parse(localStorage.getItem("selectedCard"));
      let applyLoanData = JSON.parse(localStorage.getItem("applyLoanData"));
      payload.UserRequestProductInfo.LoanOrCardAmount = selectCard.actualLoanAmount;
      payload.UserRequestProductInfo.ProductCategoryID = selectCard.loanTypeID;
      payload.UserRequestProductInfo["Duration"] = applyLoanData.duration;
      payload.UserRequestProductInfo["MonthlyInstallment"] = selectCard.monthlyPaymentAmount;
      payload.UserRequestProductInfo["TotalAmounttobepaid"] = selectCard.allPaymentExcludingFees + selectCard.feesTotal;
      payload.UserRequestProductInfo["ManagementFees"] = applyLoanData.mangementFee;
    }
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    return this.http.post(`${this.mainBaseUrl}/User/request/update`, payload, {
      headers: headers,
    });
  }
  getRequests(): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    return this.http.get(`${this.mainBaseUrl}/user/request`, {
      headers: headers,
    });
  }
  DBR(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    return this.http.post(`${this.mainBaseUrl}/user/UserDBRStrategy`, data, {
      headers: headers,
    });
  }

  encryptData(data) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
    }
  }
  decryptData(data) {

    try {
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
  UpdateReqStatus(id): Observable<any> {
    let data={
      "UserRequestID":id,
      "UserRequestStatusCode":107,
      "Comment":null
  }
  let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));
    return this.http.post(`${this.mainBaseUrl}/user/request/statusupdate`, data, {
      headers: headers,
    });
  }

  /* Forgot passwrod & reset pwd */

  forgotPassword(id):Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    try {
      return this.http.get(this.mainBaseUrl + `Session/forgotpassword/${id}`, { headers: headers })
    } catch (error) {
      return error;
    }
  }

  updatePassword(data):Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    try {
      return this.http.post(this.mainBaseUrl + `session/forgotpassword`, data, { headers: headers })
    } catch (error) {
      return error;
    }
  }

  /* Forgot passwrod & reset pwd */

  /* View Shared Product Details API call */

  getSharedProductDetails(data):Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    try {
      return this.http.post(this.mainBaseUrl + `Loan/details`, data, { headers: headers })
    } catch (error) {
      return error;
    }
  }


  /* View Shared Product Details API call */

  /* Open bank account API call */

  openBankAccount(data):Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    try {
      return this.http.post(this.mainBaseUrl + `User/request/update`, data, { headers: headers })
    } catch (error) {
      return error;
    }
  }


  shareIntent(url) {

    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    console.log(headers);
      return this.http.post(this.mainBaseUrl + `/Card/urldetail`, url, { headers: headers })
    
  }

  /* Open bank account API call */

}
// "Mobile":"556746315",
//   "password":"Creditly@123"