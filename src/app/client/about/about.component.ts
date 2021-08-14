import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title } from '@angular/platform-browser';
import { Globals } from 'src/app/app.config';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  currentSlide = 1;
  totalSlides = 0;

  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    autoplayTimeout: 3500,
    items: 1,
    loop: true,
    mouseDrag: true,
    animateOut: 'fadeOut',
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    nav: false,
  }
  activeSlides: SlidesOutputData;

  slidesStore: any[];

  constructor(private title: Title, private global: Globals) { 
    this.title.setTitle('ONE | About us');
    global.changeCss();
  }


  ngOnInit() {
    for (let i =0;i;i++){
      
    }
    }
  
    getPassedData(data: SlidesOutputData) {
      this.activeSlides = data;

      
  
      this.currentSlide = this.activeSlides['startPosition']+1;
    }

    openPDF() {
      console.log("hhhh")
      alert("LMAO")
    }
  
  }
  