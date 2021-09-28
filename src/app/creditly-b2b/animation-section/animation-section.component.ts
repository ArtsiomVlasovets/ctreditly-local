import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-animation-section',
  templateUrl: './animation-section.component.html',
  styleUrls: ['./animation-section.component.scss']
})
export class AnimationSectionComponent implements OnInit {

	scriptAnimArr = [
	//   '/assets/gsap.min.js',
	//   '/assets/ScrollTrigger.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js'
		"https://objectstorage.me-jeddah-1.oraclecloud.com/n/axtscqt3skdc/b/creditly/o/assets%2Fv1%2Fjs%2Fgsap.min.js",
		"https://objectstorage.me-jeddah-1.oraclecloud.com/n/axtscqt3skdc/b/creditly/o/assets%2Fv1%2Fjs%2FScrollTrigger.min.js"
		
  ];
    @ViewChild('animation_wrapper', { static: true }) animWrapper: ElementRef<HTMLDivElement>;
  // animWrapper = document.getElementById("animation_wrapper")
  animId;

  constructor(@Inject(DOCUMENT) private document: Document) { }


  ngOnInit(): void {
	  this.importSVG();
	  this.addScripts();
  }

gsapAnim()
{
    this.animId = document.querySelector("#animation_wrapper svg").getAttribute('id')
    this.animId = "#" + this.animId + " "
    gsap.set("#animation_wrapper", { opacity: 1 })

    gsap.registerPlugin(ScrollTrigger)


    // gsap.set('#crM1', {x: '50%', y: '50%'})
    // gsap.set('#crM3', {x: '-50%', y: '50%'})
    // gsap.set('#crM2', {y: '100%'})
    gsap.set('#crcl', {y: '50%'})

    gsap.set('#crp1, #crp2, #crp3, #crp4', {strokeDasharray: 10, strokeDashoffset: 10})
    gsap.to('#crp1, #crp2, #crp3, #crp4', {strokeDashoffset: 30, repeat: -1, ease: 'none'})

    gsap.to('#gcr1 > g:nth-of-type(1) > *', {fill: '#ebebec', duration: 1, stagger: {each: 1, repeat: -1, yoyo: true, repeatDelay: 2}})
    gsap.to('#gcr1 > g:nth-of-type(2) > *', {fill: '#21252c', duration: 1, stagger: {each: 1, repeat: -1, yoyo: true, repeatDelay: 2}})

    gsap.to('#gcr2 > g:nth-of-type(1) > *', {fill: '#ebebec', duration: 1, stagger: {each: 1, repeat: -1, yoyo: true, repeatDelay: 1}})
    gsap.to('#gcr2 > g:nth-of-type(2) > *', {fill: '#21252c', duration: 1, stagger: {each: 1, repeat: -1, yoyo: true, repeatDelay: 1}})

    gsap.to('#gcr3 > g:nth-of-type(1) > *', {fill: '#ebebec', duration: 1, stagger: {each: 1, repeat: -1, yoyo: true, repeatDelay: 2}})
    gsap.to('#gcr3 > g:nth-of-type(2) > *', {fill: '#21252c', duration: 1, stagger: {each: 1, repeat: -1, yoyo: true, repeatDelay: 2}})

    gsap.to('#gcr4 > g:nth-of-type(1) > *', {fill: '#ebebec', duration: 1, stagger: {each: 1, repeat: -1, yoyo: true, repeatDelay: 1}})
    gsap.to('#gcr4 > g:nth-of-type(2) > *', {fill: '#21252c', duration: 1, stagger: {each: 1, repeat: -1, yoyo: true, repeatDelay: 1}})

    gsap.timeline({scrollTrigger: {trigger: '#animation_wrapper', scrub: 1, start: 'bottom-=20% bottom', end: 'bottom-=5% top'}})
        .to('#crcl', {y: 0, ease: 'steps(12)', duration: 5})

    gsap.to('#crl', {y: -10, duration: 2, ease: 'sine.inOut', repeat: -1, yoyo: true})
}



 

 importSVG()
{
    this.displayContents()
}

 displayContents()
{
	//  this.animWrapper.nativeElement.innerHTML = contents;
  //  this.document.getElementById("#cr").style.width = "100%";
  //  this.document.getElementById("#cr").style.height = "100%";
        // document.querySelector("#animation_wrapper svg").style.width = "100%"
        // document.querySelector("#animation_wrapper svg").style.height = "100%"
	 setTimeout(this.gsapAnim, 200);
}



 addScripts()
{
    let scriptList = document.createElement('div')
    scriptList.classList.add('containerScriptList')
    this.animWrapper.nativeElement.appendChild(scriptList)

    this.scriptAnimArr.forEach((elem)=>{
        let tempScipt = document.createElement('script')
		tempScipt.src = elem;
		// tempScipt.nonce = "r@nd0m";
		
        scriptList.appendChild(tempScipt)
    })
 }
  
  


}