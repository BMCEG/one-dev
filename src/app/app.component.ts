import { Component } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [transition('1 <=> 2, 1 <=> 3, 1 <=> 4, 2 <=> 3, 2 <=> 4, 3 <=> 4, 2 <=> 5, 5 <=> 6, 1 <=> 7, 2 <=> 7, 3 <=> 7, 4 <=> 7', [style({ opacity: 0 }), 
      animate(400, keyframes([style({ opacity: 0.4 }), style({ opacity: 1 })]))])]),
      // animate(250, keyframes([style({ opacity: 0.4, offset: 0.9 }), style({ opacity: 1, offset: 1 })]))])]),
  ]
})
export class AppComponent {

  constructor() {
    this.resetLang();
  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  onActivate(event) {
    window.scroll(0, 0);
    
  }

  getBodyLang() {
    if (localStorage.getItem('lang'))
      if (localStorage.getItem('lang') == 'ar')
        return true;
    return false
  }

  resetLang() {
    localStorage.setItem('lang', 'en')
  }

  ngOnInit() {
    if ($(window).width() <= 1024) {
      $('.navbar-collapse').remove();
    } else {
      $('.navbar-collapse').show();
    }

    $('.mobile-toggle').click(function () {
      $('.navbar').toggleClass('side-nav-open');
    });

    // $('#mobile-nav').click(function () {
    //   $(".close").click();
    // });

    $('.clickTrigger').click(function () {
      $(".close").click();
      console.log("clicked")
    });

    // $('.side-link').click(function () {
    //   $(".close").click();
    //   console.log("clicked")
    // });

    
  }


}


