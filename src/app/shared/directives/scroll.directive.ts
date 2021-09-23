import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @Output() onScroll = new EventEmitter<number>();
  percentValue: number = 0;

  constructor() { }

  @HostListener("scroll", ["$event"])
  onListenerTriggered(event: UIEvent): void {
    
    console.log("directive", event)

        // Calculate the scroll percentage
        // const percent = Math.round((event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight)) * 100);

        // Compare the new with old and only raise the event if values change
        // if(this.percentValue !== percent){
          
          // Update the percent value
          // this.percentValue = percent;

          // Emit the event
          // this.onScroll.emit(percent);
        // }
    }



}
