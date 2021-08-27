import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-animation-section',
  templateUrl: './animation-section.component.html',
  styleUrls: ['./animation-section.component.scss']
})
export class AnimationSectionComponent implements OnInit {
  scriptAnimArr = [
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js'
  ];
    @ViewChild('animation_wrapper', { static: true }) animWrapper: ElementRef<HTMLDivElement>;
  // animWrapper = document.getElementById("animation_wrapper")
  animId;
    
contents = `
<svg version="1.1" id="cr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1000.9 615.7" enable-background="new 0 0 1000.9 615.7" xml:space="preserve">
<polygon fill="#282F3A" points="500.2,615.7 1000.9,307.8 1000.9,0 0,-0.1 0,307.8 "/>
<g>
	<defs>
		<polygon id="crcl" points="500.2,615.7 0,307.8 500.3,-0.1 1000.9,307.7 		"/>
	</defs>
	<clipPath id="crcl_1_">
		<use xlink:href="#crcl"  overflow="visible"/>
	</clipPath>
	<g clip-path="url(#crcl_1_)">
		<g id="crmm">
			<g>
				<g>
					<g id="crM1">
						<g transform="translate(454.723 1541.873)">
							<g opacity="0.4">
								<g transform="translate(125.113 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(125.113 192.414)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(250.138 192.414)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(187.581 230.896)">
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
										l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
										l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(0 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(187.625 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(62.556 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(312.783 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(250.093 38.483)">
									<g transform="translate(0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(187.537 0)">
									<g transform="translate(0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(125.024 38.483)">
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
										l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
										l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(187.67 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(62.629 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(312.738 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(250.226 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(375.339 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-433.8-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-433.8-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-412.9-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-412.9-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.2-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.2-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-350.4-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-350.4-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-371.3-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-371.3-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-392.1-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-392.1-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-392.1" y1="-1388" x2="-392.1" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-371.3" y1="-1375.2" x2="-371.3" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1375.2" x2="-412.9" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-350.4" y1="-1362.4" x2="-350.4" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1362.4" x2="-433.8" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1388" x2="-371.3" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-412.9" y1="-1336.7" x2="-371.3" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1375.2" x2="-350.4" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-433.8" y1="-1349.6" x2="-350.4" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-454.6" y1="-1362.4" x2="-329.6" y2="-1362.4"/>
									</g>
								</g>
							</g>
							<g transform="translate(451.173 1543.476)">
								<path id="crp1" fill="none" stroke="#01DBFF" stroke-dasharray="4" d="M-656.9-2622.3v-91.9 M-655.6-2777.6l-1.3-152.3
									 M-759.9-2775.6h-149.4 M-406.7-2775.6h-144.8 M-531.4-2852.8l-124.2,75.2 M-655.6-2777.6l-126.2,77.8 M-781.8-2851.7
									l126.2,74.1 M-531.4-2697.8l-124.2-79.8 M-551.3-2776l-105.4-63.8l-103.7,63.8 M-760.7-2776l104.5,64.4l103.3-64.4
									 M-465.6-2776.3l-191.6-116l-188.6,116 M-846.4-2776.3l190,117.1l187.9-117.1"/>
								<g id="gcr1" transform="translate(43.545 25.484)">
									<g>
										<path fill="#21252C" stroke="#01DBFF" d="M-700.6-2929.9l-21.1,12.8l21.1,12.8l20.9-12.8L-700.6-2929.9z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-700.4-2699.8l-21.1,12.8l21.1,12.8l20.9-12.8L-700.4-2699.8z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-605.6-2755.8l-21.1,12.8l21.1,12.8l20.9-12.8L-605.6-2755.8z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-792.4-2871.9l-21.1,12.8l21.1,12.8l20.9-12.8L-792.4-2871.9z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-605.6-2871.9l-21.1,12.8l21.1,12.8l20.9-12.8L-605.6-2871.9z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-796.5-2757.2l-21.1,12.8l21.1,12.8l20.9-12.8L-796.5-2757.2z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-699.4-2815.5l-21.1,12.8l21.1,12.8l20.9-12.8L-699.4-2815.5z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-700.4-2750.5l-21.1,12.8l21.1,12.8l20.9-12.8L-700.4-2750.5z"/>
									</g>
									<g>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-512.9-2814.6l-21.1,12.8l21.1,12.8l20.9-12.8L-512.9-2814.6z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-888.2-2814.6l-21.1,12.8l21.1,12.8l20.9-12.8L-888.2-2814.6z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-596.3-2814.6l-21.1,12.8l21.1,12.8l20.9-12.8L-596.3-2814.6z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-699.7-2877.3l-21.1,12.8l21.1,12.8l20.9-12.8L-699.7-2877.3z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-804.5-2814.6l-21.1,12.8l21.1,12.8l20.9-12.8L-804.5-2814.6z"/>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
			<g>
				<g>
					<g id="crM2">
						<g transform="translate(454.723 1541.873)">
							<g opacity="0.4">
								<g transform="translate(125.113 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(125.113 192.414)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(250.138 192.414)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(187.581 230.896)">
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
										l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
										l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
										l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(0 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(187.625 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(62.556 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(312.783 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(250.093 38.483)">
									<g transform="translate(0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(187.537 0)">
									<g transform="translate(0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(125.024 38.483)">
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
										l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
										l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
										l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(187.67 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(62.629 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(312.738 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(250.226 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
								<g transform="translate(375.339 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.7-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-183.7-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.8-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-162.8-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.1-1503.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.1-1503.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.3-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-100.3-1490.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1477.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1477.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1464.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1464.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1516.2
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1516.2z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142-1490.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L-142-1490.6z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142" y1="-1541.9" x2="-142" y2="-1464.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.2" y1="-1529" x2="-121.2" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1529" x2="-162.8" y2="-1477.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.3" y1="-1516.2" x2="-100.3" y2="-1490.6"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1516.2" x2="-183.7" y2="-1490.6"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1541.9" x2="-121.2" y2="-1541.9"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.8" y1="-1490.6" x2="-121.2" y2="-1490.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1529" x2="-100.3" y2="-1529"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.7" y1="-1503.4" x2="-100.3" y2="-1503.4"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.5" y1="-1516.2" x2="-79.5" y2="-1516.2"/>
									</g>
								</g>
							</g>
							<g transform="translate(451.173 1543.476)">
								<path id="crp2" fill="none" stroke="#01DBFF" stroke-dasharray="4" d="M-406.8-2776.2v-91.9 M-405.5-2931.4l-1.3-152.3
									 M-509.8-2929.4h-149.4 M-156.6-2929.4h-144.8 M-281.3-3006.6l-124.2,75.2 M-405.5-2931.4l-126.2,77.8 M-531.7-3005.5
									l126.2,74.1 M-405.5-2931.4l124.2,79.8 M-301.2-2929.9l-105.4-63.8l-103.7,63.8 M-510.6-2929.8l104.5,64.4l103.3-64.4
									 M-215.5-2930.1l-191.6-116l-188.6,116 M-596.3-2930.1l190,117.1l187.9-117.1"/>
								<g id="gcr2" transform="translate(43.545 25.484)">
									<g>
										<path fill="#21252C" stroke="#01DBFF" d="M-450.5-3083.7l-21.1,12.8l21.1,12.8l20.9-12.8L-450.5-3083.7z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-450.3-2853.6l-21.1,12.8l21.1,12.8l20.9-12.8L-450.3-2853.6z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-355.5-2909.7l-21.1,12.8l21.1,12.8l20.9-12.8L-355.5-2909.7z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-542.3-3025.8l-21.1,12.8l21.1,12.8l20.9-12.8L-542.3-3025.8z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-355.5-3025.8l-21.1,12.8l21.1,12.8l20.9-12.8L-355.5-3025.8z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-546.3-2911l-21.1,12.8l21.1,12.8l20.9-12.8L-546.3-2911z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-449.3-2969.3l-21.1,12.8l21.1,12.8l20.9-12.8L-449.3-2969.3z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-450.3-2904.3l-21.1,12.8l21.1,12.8l20.9-12.8L-450.3-2904.3z"/>
									</g>
									<g>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-262.8-2968.4l-21.1,12.8l21.1,12.8l20.9-12.8L-262.8-2968.4z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-638.1-2968.4l-21.1,12.8l21.1,12.8l20.9-12.8L-638.1-2968.4z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-346.2-2968.4l-21.1,12.8l21.1,12.8l20.9-12.8L-346.2-2968.4z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-449.6-3031.1l-21.1,12.8l21.1,12.8l20.9-12.8L-449.6-3031.1z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-554.4-2968.4l-21.1,12.8l21.1,12.8l20.9-12.8L-554.4-2968.4z"/>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
			<g>
				<g>
					<g id="crM3">
						<g transform="translate(454.723 1541.873)">
							<g opacity="0.4">
								<g transform="translate(125.113 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(125.113 192.414)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(250.138 192.414)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(187.581 230.896)">
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
										l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
										l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(0 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(187.625 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(62.556 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(312.783 76.965)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(250.093 38.483)">
									<g transform="translate(0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(187.537 0)">
									<g transform="translate(0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(125.024 38.483)">
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
										l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
										l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
										l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
										l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
									<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
										l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(187.67 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(62.629 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(312.738 153.931)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(250.226 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
								<g transform="translate(375.339 115.448)">
									<g transform="translate(0 0)">
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M66.5-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L66.5-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M87.4-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L87.4-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1349.6
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1349.6z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M149.9-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L149.9-1336.7z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M129.1-1323.9
											l-20.8-12.8l20.8-12.8l20.8,12.8L129.1-1323.9z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1311.1
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1311.1z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1362.4
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1362.4z"/>
										<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M108.2-1336.7
											l-20.8-12.8l20.8-12.8l20.8,12.8L108.2-1336.7z"/>
									</g>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="108.2" y1="-1388" x2="108.2" y2="-1311.1"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="129.1" y1="-1375.2" x2="129.1" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1375.2" x2="87.4" y2="-1323.9"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="149.9" y1="-1362.4" x2="149.9" y2="-1336.7"/>
									
										<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1362.4" x2="66.5" y2="-1336.7"/>
									<g transform="translate(0 12.828)">
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1388" x2="129.1" y2="-1388"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="87.4" y1="-1336.7" x2="129.1" y2="-1336.7"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1375.2" x2="149.9" y2="-1375.2"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="66.5" y1="-1349.6" x2="149.9" y2="-1349.6"/>
										
											<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="45.7" y1="-1362.4" x2="170.7" y2="-1362.4"/>
									</g>
								</g>
							</g>
							<g transform="translate(451.173 1543.476)">
								<path id="crp3" fill="none" stroke="#01DBFF" stroke-dasharray="4" d="M-156.6-2622.3v-91.9 M-155.3-2777.6l-1.3-152.3
									 M-259.6-2775.6h-149.4 M93.6-2775.6H-51.2 M-31.1-2852.8l-124.2,75.2 M-155.3-2777.6l-126.2,77.8 M-281.5-2851.7
									l126.2,74.1 M-155.3-2777.6l124.2,79.8 M-51-2776l-105.4-63.8L-260-2776 M-260.3-2776l104.5,64.4l103.3-64.4 M34.7-2776.3
									l-191.6-116l-188.6,116 M-346.1-2776.2l190,117.1l187.9-117.1"/>
								<g id="gcr3" transform="translate(43.545 25.484)">
									<g>
										<path fill="#21252C" stroke="#01DBFF" d="M-200.3-2929.9l-21.1,12.8l21.1,12.8l20.9-12.8L-200.3-2929.9z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-200.1-2699.8l-21.1,12.8l21.1,12.8l20.9-12.8L-200.1-2699.8z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-105.3-2755.8l-21.1,12.8l21.1,12.8l20.9-12.8L-105.3-2755.8z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-292.1-2871.9l-21.1,12.8l21.1,12.8l20.9-12.8L-292.1-2871.9z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-105.3-2871.9l-21.1,12.8l21.1,12.8l20.9-12.8L-105.3-2871.9z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-296.1-2757.2l-21.1,12.8l21.1,12.8l20.9-12.8L-296.1-2757.2z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-199.1-2815.5l-21.1,12.8l21.1,12.8l20.9-12.8L-199.1-2815.5z"/>
										<path fill="#21252C" stroke="#01DBFF" d="M-200.1-2750.5l-21.1,12.8l21.1,12.8l20.9-12.8L-200.1-2750.5z"/>
									</g>
									<g>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-12.6-2814.6l-21.1,12.8l21.1,12.8l20.9-12.8L-12.6-2814.6z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-387.9-2814.6l-21.1,12.8l21.1,12.8l20.9-12.8L-387.9-2814.6z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-96-2814.6l-21.1,12.8l21.1,12.8l20.9-12.8L-96-2814.6z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-199.4-2877.3l-21.1,12.8l21.1,12.8l20.9-12.8L-199.4-2877.3z"/>
										<path fill="#EBEBEC" stroke="#01DBFF" d="M-304.2-2814.6l-21.1,12.8l21.1,12.8l20.9-12.8L-304.2-2814.6z"/>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
			<g>
				<g>
					<g transform="translate(454.723 1541.873)" opacity="0.403">
						<g transform="translate(125.113 115.448)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(125.113 192.414)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(250.138 192.414)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(187.581 230.896)">
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
								l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
								l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
								l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
								l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
								l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
								l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
								l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
								l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
								l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							<path fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1234.1"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(0 115.448)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(187.625 76.965)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(62.556 76.965)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(312.783 76.965)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(250.093 38.483)">
							<g transform="translate(0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(187.537 0)">
							<g transform="translate(0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(125.024 38.483)">
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
								l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
								l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
								l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
								l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
								l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
								l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
								l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
								l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
							<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
								l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(187.67 153.931)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(62.629 153.931)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(312.738 153.931)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(250.226 115.448)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
						<g transform="translate(375.339 115.448)">
							<g transform="translate(0 0)">
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-183.8-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-183.8-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-162.9-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-162.9-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.2-1195.6
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.2-1195.6z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-100.4-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-100.4-1182.8z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-121.3-1170
									l-20.8-12.8l20.8-12.8l20.8,12.8L-121.3-1170z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1157.2
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1157.2z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1208.5
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1208.5z"/>
								<path fill="none" stroke="#00FFFF" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" d="M-142.1-1182.8
									l-20.8-12.8l20.8-12.8l20.8,12.8L-142.1-1182.8z"/>
							</g>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-142.1" y1="-1234.1" x2="-142.1" y2="-1157.2"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-121.3" y1="-1221.3" x2="-121.3" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1221.3" x2="-162.9" y2="-1170"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-100.4" y1="-1208.5" x2="-100.4" y2="-1182.8"/>
							
								<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1208.5" x2="-183.8" y2="-1182.8"/>
							<g transform="translate(0 12.828)">
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1234.1" x2="-121.3" y2="-1234.1"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-162.9" y1="-1182.8" x2="-121.3" y2="-1182.8"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1221.3" x2="-100.4" y2="-1221.3"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-183.8" y1="-1195.6" x2="-100.4" y2="-1195.6"/>
								
									<line fill="none" stroke="#DEDEDE" stroke-width="0.1" stroke-linecap="round" stroke-miterlimit="10" x1="-204.6" y1="-1208.5" x2="-79.6" y2="-1208.5"/>
							</g>
						</g>
					</g>
					<g transform="translate(451.173 1543.476)">
						<path id="crp4" fill="none" stroke="#01DBFF" stroke-dasharray="4" d="M47.8-926.5v-91.9 M49-1094.5l-1.2-139.6 M-55.2-1079.8
							h-149.4 M298-1079.8H153.2 M173.4-1157l-118.7,73 M38.1-1075.5L-77.1-1004 M-77.1-1155.9l113.5,69.1 M55.3-1077.4l118.1,75.4
							 M153.4-1080.2L48.1-1144l-103.7,63.8 M-55.9-1080.2l104.5,64.4l103.3-64.4 M239.2-1080.5l-191.6-116l-188.6,116
							 M-141.6-1080.5l190,117.1l187.9-117.1"/>
						<g id="gcr4">
							<g>
								<path fill="#21252C" stroke="#01DBFF" d="M47.6-1208.6l-21.1,12.8l21.1,12.8l20.9-12.8L47.6-1208.6z"/>
								<path fill="#21252C" stroke="#01DBFF" d="M47.9-978.5l-21.1,12.8l21.1,12.8l20.9-12.8L47.9-978.5z"/>
								<path fill="#21252C" stroke="#01DBFF" d="M142.7-1034.6l-21.1,12.8l21.1,12.8l20.9-12.8L142.7-1034.6z"/>
								<path fill="#21252C" stroke="#01DBFF" d="M-44.2-1150.7l-21.1,12.8l21.1,12.8l20.9-12.8L-44.2-1150.7z"/>
								<path fill="#21252C" stroke="#01DBFF" d="M49-1094.5l-21.1,12.8l21.1,12.8l20.9-12.8L49-1094.5z"/>
								<path fill="#21252C" stroke="#01DBFF" d="M142.7-1150.7l-21.1,12.8l21.1,12.8l20.9-12.8L142.7-1150.7z"/>
								<path fill="#21252C" stroke="#01DBFF" d="M-48.2-1035.9l-21.1,12.8l21.1,12.8l20.9-12.8L-48.2-1035.9z"/>
								<path fill="#21252C" stroke="#01DBFF" d="M47.9-1029.2l-21.1,12.8l21.1,12.8l20.9-12.8L47.9-1029.2z"/>
								<path fill="#21252C" stroke="#01DBFF" d="M47.9-1156l-21.1,12.8l21.1,12.8l20.9-12.8L47.9-1156z"/>
							</g>
							<g>
								<path fill="#EBEBEC" stroke="#01DBFF" d="M235.4-1093.3l-21.1,12.8l21.1,12.8l20.9-12.8L235.4-1093.3z"/>
								<path fill="#EBEBEC" stroke="#01DBFF" d="M-140-1093.3l-21.1,12.8l21.1,12.8l20.9-12.8L-140-1093.3z"/>
								<path fill="#EBEBEC" stroke="#01DBFF" d="M152-1093.3l-21.1,12.8l21.1,12.8l20.9-12.8L152-1093.3z"/>
								<path fill="#EBEBEC" stroke="#01DBFF" d="M-56.2-1093.3l-21.1,12.8l21.1,12.8l20.9-12.8L-56.2-1093.3z"/>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>
</g>
<g id="crl">
	<g transform="translate(663.905 1598.475)">
		<g transform="translate(0)">
			<path fill="#01DBFF" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-111.6-1216.8v35
				l-32-16.2L-111.6-1216.8z"/>
			<path fill="#282F3A" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-204.6-1198.5
				l61-35.6l32.1,17.3l-62.2,36.3L-204.6-1198.5z"/>
			<path fill="#282F3A" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-204.6-1126.5v-72.1
				l31,18.2v71.8L-204.6-1126.5z"/>
			<path fill="#EBEBEC" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-142.6-1162.1
				l-30.9,17.3v36.3l62.1-36L-142.6-1162.1z"/>
		</g>
	</g>
</g>
</svg>
`

  constructor(@Inject(DOCUMENT) private document: Document) { }


  ngOnInit(): void {
    this.init()
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
    this.displayContents(this.contents)
}

 displayContents(contents)
{
   this.animWrapper.nativeElement.innerHTML = contents
  //  this.document.getElementById("#cr").style.width = "100%";
  //  this.document.getElementById("#cr").style.height = "100%";
        // document.querySelector("#animation_wrapper svg").style.width = "100%"
        // document.querySelector("#animation_wrapper svg").style.height = "100%"
        setTimeout(this.gsapAnim, 200)
}

 init()
{
    this.importSVG()
    this.addScripts()
}

 addScripts()
{
    let scriptList = document.createElement('div')
    scriptList.classList.add('containerScriptList')
    this.animWrapper.nativeElement.appendChild(scriptList)

    this.scriptAnimArr.forEach((elem)=>{
        let tempScipt = document.createElement('script')
        tempScipt.src = elem
        scriptList.appendChild(tempScipt)
    })
 }
  
  


}