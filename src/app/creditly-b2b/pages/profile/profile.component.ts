import { Component, OnInit,ChangeDetectorRef,AfterViewInit, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit ,AfterViewInit {

  constructor(private router:Router,public ApiService:CreditlyServicesService,private cdr: ChangeDetectorRef) { }
  public currentTab='profile';
  profileDate = JSON.parse(localStorage.getItem('loginResponse'));
  slides = [];
  percent:number=0
  applyStickyStyles: boolean = false;
  showEnglishLogo: boolean = false;

  @HostListener('window:scroll', ['$event'])


  scrollHandler(event) {
    // Get the navbar
    var navbar = document.getElementById("myHeader");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      // navbar.classList.add("sticky")
      this.applyStickyStyles = true;
    } else {
      // navbar.classList.remove("sticky");
      this.applyStickyStyles = false;
    }
  }

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
    'responsive': [
      {
        'breakpoint': 1024,
        'settings': {
          'slidesToShow': 3,
        }
      },
      {
        'breakpoint': 600,
        'settings': {
          'slidesToShow': 2,
        }
      },
      {
        'breakpoint': 480,
        'settings': {
          'slidesToShow': 1,
        }
      }
    ]
  };
  ngAfterViewInit() {
    this.percent= this.ApiService.formCompletion*20+20;
    this.cdr.detectChanges();
  }
  calculate(){
    
  }
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
    this.ApiService.formCompletion=0;
    this.ApiService.finding=true;
    this.ApiService.getRequests().subscribe(val=>{
      localStorage.setItem("productRequest",JSON.stringify(val.userRequests))
      this.ApiService.finding=false;
      this.ApiService.request.next(true)
    },err=>{
      this.ApiService.finding=false;
    })
  }

  public selectLanguage(type): void {
    console.log("event language", type);
    if (type == "AR") {
      this.showEnglishLogo = true;
    } else {
      this.showEnglishLogo = false;
    }
  }

  logout():void{
    let masterData=localStorage.getItem("masterData");
    let token=localStorage.getItem("token");
    localStorage.clear();
    localStorage.setItem('masterData',masterData);
    localStorage.setItem('token',token);
    this.ApiService.to="Login";
    this.router.navigateByUrl("/login");
  }

}
