import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/app.config';
declare var Swiper:any;

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.scss']
})
export class InstitutesComponent implements OnInit {

  constructor( public global : Globals ) { }

  ngOnInit() {
    this.global.changeCss()
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });

  }

}
