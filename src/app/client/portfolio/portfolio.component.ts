import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/app.config';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {



  constructor(private global: Globals) { 
    this.global.changeCssProjects();
  }


  set_id(id) {
    this.global.id = id;
  }

  ngOnInit() {
    for (let i = 0; i; i++) {
    }
  }

}
