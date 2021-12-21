import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Globals } from 'src/app/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  arabic = true;
  title_project_rout: any;
  constructor(private translate: TranslateService, private router: Router, @Inject(DOCUMENT) private document: Document, private global: Globals) {
    this.translate.setDefaultLang('ar');
    this.title_project_rout = this.global.our_projects;
  }


  useLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
    if (language == 'ar')
      this.arabic = true;
    else
      this.arabic = false;
  }


  







  // changeOnscroll () {
  //   $('.navbar').scrollBy(0, 1); // 0 pixels horizontal and 1 pixel down
  //   $('.navbar').scrollBy(0, -1); // 0 pixels horizontal and 1 pixel up
  // }

  ngOnInit() { 

    // $('.nav-lang').css({
    //   color: $(this).scrollTop() >= 1 ?
    //   'white' : 'black'
    // })
  }

}
