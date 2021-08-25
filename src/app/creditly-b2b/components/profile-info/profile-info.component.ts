import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  @ViewChild('confirm') public childModal;
  constructor(public apiService: CreditlyServicesService,public uploadService:FileUploadService) { }
  progress={
    p1:0,
    p2:0,
    p3:0
  };
  reqCancel:number=0;
  idCancel:number=0;
  submitReq=false;
  slides = [];
  request = [];
  finding = false;
  fileName1:string;
  fileName2:string;
  fileName3:string;
  idState=1;
  salaryState=1;
  otherState=1;
  idFile:File;
  salaryFile:File;
  otherFile:File;
  slideConfig = {
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='slick-next'></div>",
    prevArrow: "<div class='slick-prev'></div>",
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  ngOnInit(): void {
    console.log()
    this.apiService.request.subscribe(res => {
      this.request = JSON.parse(localStorage.getItem("productRequest"))
    })
  }
  onFileChange1(event) {
    if (event.target.files.length > 0) {
      this.idFile = event.target.files[0];
      this.fileName1=this.idFile.name;
      this.idState=2;
    }
  }
  onFileChange2(event) {
    if (event.target.files.length > 0) {
      this.salaryFile = event.target.files[0];
      this.fileName2=this.salaryFile.name;
      this.salaryState=2;
    }
  }
  onFileChange3(event) {
    if (event.target.files.length > 0) {
       this.otherFile = event.target.files[0];
      this.fileName3=this.otherFile.name;
      this.otherState=2;
    }
  }
  submit(){
    if(this.idState==2||this.salaryState==2||this.otherState==2)
    {
      this.submitReq=true;
      if(this.idState==2) this.submitUser("p1",this.idFile);
      if(this.salaryState==2) this.submitUser("p2",this.salaryFile);
      if(this.otherState==2) this.submitUser("p3",this.otherFile);
  }else{
    this.apiService.notify("please upload file","error")
  }
  }
  submitUser(by,file:File) {
    this.uploadService.addUser(
      1,
      file
    ).subscribe((event: HttpEvent<any>) => {
    if(by=="p1")this.idState=3;
    if(by=="p2")this.salaryState=3;
    if(by=="p3")this.otherState=3;
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress[by] = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          if(by=="p1")this.idState=4;
          if(by=="p2")this.salaryState=4;
          if(by=="p3")this.otherState=4;
          this.submitReq=true;
          setTimeout(() => {
            this.progress[by] = 0;
          }, 1500);
      }
    })
  }
  cancel(id,req){
    this.reqCancel=req;
    this.idCancel=id;
  }
  click(){
    document.getElementById("confirmBtn").click();
  }
  cancelByConfirm(){
    this.submitReq=true;
    this.apiService.UpdateReqStatus(this.idCancel).subscribe(val=>{
    this.submitReq=false;
    document.getElementById("confirmBtn").click();
      if(this.request.findIndex(val=>val.id==this.idCancel)>-1){
        this.request[this.request.findIndex(val=>val.id==this.idCancel)]["requestStatus"]["code"]=107;
        this.request[this.request.findIndex(val=>val.id==this.idCancel)]["requestStatus"]["description"]="Cancel by user";

        // this.request[this.request.findIndex(val=>val.id==this.idCancel)]["status"]=107;
      }
    })
  }
}
