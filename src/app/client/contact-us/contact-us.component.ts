import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import { Title } from '@angular/platform-browser';
import { Globals } from 'src/app/app.config';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  showMsg = false;
  showMsgError = false;
  errorMsg = [];

  constructor(private title: Title, private api: ApiService, private global: Globals) {
    this.title.setTitle('ONE | Contact us');
    global.changeCss();
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
    this.api.addContactUs(form.value).subscribe(
      data => {
        form.reset();
        window.scrollTo(0, 0);
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
