import { Location } from '@angular/common';
import { Component, ElementRef, OnInit , ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-credit-cards',
  templateUrl: './compare-credit-cards.component.html',
  styleUrls: ['./compare-credit-cards.component.scss']
})
export class CompareCreditCardsComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef,static:true }) public widgetsContent: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }
  cards=JSON.parse(localStorage.getItem("compairCards"));
  id=localStorage.getItem("CategoryID");
  constructor(private router: Router,private location:Location) { }

  ngOnInit(): void {
  }

  public navigateToCardsList(): void {
    let nav:string="";
    if(localStorage.getItem("compareBy")=="personal"){
      nav="creditly/personalFinance"
    }
    if(localStorage.getItem("compareBy")=="mortgage"){
      nav="creditly/mortgage"
    }
    if(localStorage.getItem("compareBy")=="card"){
      nav="creditly/cards-list"
    }
    if(localStorage.getItem("compareBy")=="AutoLoan"){
      nav="creditly/autoLease"
    }
    this.router.navigateByUrl(nav);
  }
  removeCard(i){
    this.cards.splice(i,1);
    localStorage.setItem("compairCards",JSON.stringify(this.cards));
    if(this.cards.length==0){
      localStorage.removeItem("compairCards");
      this.location.back();
    }
  }
  public applyForCreditCard(data): void {
    localStorage.setItem("selectedCard", JSON.stringify(data));
    if(localStorage.getItem("sessionToken"))
    this.router.navigateByUrl('creditly/applycard');
    else
    this.router.navigateByUrl('/login');
  }
}

