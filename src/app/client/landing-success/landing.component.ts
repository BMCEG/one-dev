import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import { Title } from '@angular/platform-browser';
import { Globals } from 'src/app/app.config';
import { ApiService } from 'src/app/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingSuccess implements OnInit {
  arabic = true;

  showMsg = false;
  showMsgError = false;
  errorMsg = [];

  constructor(private translate: TranslateService, private title: Title, private api: ApiService, private global: Globals) {
    this.translate.setDefaultLang('ar');
    this.title.setTitle('ONE | Landing Page');
    // global.changeCss();
  }
  useLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
    if (language == 'ar')
      this.arabic = true;
    else
      this.arabic = false;
  }


  ngOnInit() {
    $(function () {
      $('.submit').click(function () {
        $('.submit').attr('disabled', 'disabled');
        setTimeout(function () {
          $('.submit').removeAttr('disabled');
        }, 5000);
      });
    });
  }

  subForm(form) {

    this.showMsg = true;
    this.api.addLandingContactUs(form.value).subscribe(
      data => {
        form.reset();
        window.location.href ='/landing/success';
        // window.scrollTo(0, 0);
        this.showMsg = true;
      },
      error => {

      }
    );
  }

  keyPressNum(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  keyPressStr(event: any) {
    const stringAllow = /[a-z\A-Z\ \[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0] \ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !stringAllow.test(inputChar)) {
      event.preventDefault();
    }
  }
}
