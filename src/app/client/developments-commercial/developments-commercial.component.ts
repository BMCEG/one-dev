import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/app.config';

@Component({
  selector: 'app-developments-commercial',
  templateUrl: './developments-commercial.component.html',
  styleUrls: ['./developments-commercial.component.scss']
})
export class DevelopmentsCommercialComponent implements OnInit {

  constructor(private global: Globals) {
    this.global.changeCss()
   }

  ngOnInit() {
  }

}
