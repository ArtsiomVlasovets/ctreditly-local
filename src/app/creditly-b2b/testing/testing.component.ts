import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.ScrollAnimations();
  }

  ScrollAnimations() {
    gsap.set('#crcl', { y: '50%' })

    gsap.set('#crp1, #crp2, #crp3, #crp4', { strokeDasharray: 4, strokeDashoffset: 4 })
    gsap.to('#crp1, #crp2, #crp3, #crp4', { strokeDashoffset: 12, repeat: -1, ease: 'none' })

    gsap.to('#gcr1 > g:nth-of-type(1) > *', { fill: '#ebebec', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 2 } })
    gsap.to('#gcr1 > g:nth-of-type(2) > *', { fill: '#21252c', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 2 } })

    gsap.to('#gcr2 > g:nth-of-type(1) > *', { fill: '#ebebec', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 1 } })
    gsap.to('#gcr2 > g:nth-of-type(2) > *', { fill: '#21252c', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 1 } })

    gsap.to('#gcr3 > g:nth-of-type(1) > *', { fill: '#ebebec', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 2 } })
    gsap.to('#gcr3 > g:nth-of-type(2) > *', { fill: '#21252c', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 2 } })

    gsap.to('#gcr4 > g:nth-of-type(1) > *', { fill: '#ebebec', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 1 } })
    gsap.to('#gcr4 > g:nth-of-type(2) > *', { fill: '#21252c', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 1 } })

    gsap.timeline({ scrollTrigger: { trigger: '#animation_wrapper', scrub: 1, start: 'bottom-=20% bottom', end: 'bottom-=40% top' } })
      .to('#crcl', { y: 0, ease: 'steps(12)', duration: 5 })

    gsap.to('#crl', { y: -10, duration: 2, ease: 'sine.inOut', repeat: -1, yoyo: true })
  }

  gsapAnim() {

    let animWrapper = document.getElementById("animation_wrapper")
    let animId

    animId = document.querySelector("#animation_wrapper svg").getAttribute('id')
    animId = "#" + animId + " "
    gsap.set("#animation_wrapper", { opacity: 1 })

    gsap.registerPlugin(ScrollTrigger)


    // gsap.set('#crM1', {x: '50%', y: '50%'})
    // gsap.set('#crM3', {x: '-50%', y: '50%'})
    // gsap.set('#crM2', {y: '100%'})
    gsap.set('#crcl', { y: '50%' })

    gsap.set('#crp1, #crp2, #crp3, #crp4', { strokeDasharray: 4, strokeDashoffset: 4 })
    gsap.to('#crp1, #crp2, #crp3, #crp4', { strokeDashoffset: 12, repeat: -1, ease: 'none' })

    gsap.to('#gcr1 > g:nth-of-type(1) > *', { fill: '#ebebec', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 2 } })
    gsap.to('#gcr1 > g:nth-of-type(2) > *', { fill: '#21252c', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 2 } })

    gsap.to('#gcr2 > g:nth-of-type(1) > *', { fill: '#ebebec', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 1 } })
    gsap.to('#gcr2 > g:nth-of-type(2) > *', { fill: '#21252c', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 1 } })

    gsap.to('#gcr3 > g:nth-of-type(1) > *', { fill: '#ebebec', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 2 } })
    gsap.to('#gcr3 > g:nth-of-type(2) > *', { fill: '#21252c', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 2 } })

    gsap.to('#gcr4 > g:nth-of-type(1) > *', { fill: '#ebebec', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 1 } })
    gsap.to('#gcr4 > g:nth-of-type(2) > *', { fill: '#21252c', duration: 1, stagger: { each: 1, repeat: -1, yoyo: true, repeatDelay: 1 } })

    gsap.timeline({ scrollTrigger: { trigger: '#animation_wrapper', scrub: 1, start: 'bottom-=20% bottom', end: 'bottom-=40% top' } })
      .to('#crcl', { y: 0, ease: 'steps(12)', duration: 5 })

    gsap.to('#crl', { y: -10, duration: 2, ease: 'sine.inOut', repeat: -1, yoyo: true })
  }


}
