import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Globals } from 'src/app/app.config';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  filestring: any;
  fileExt: any;
  labelText = '';
  constructor(private title: Title,private global: Globals, private api: ApiService) {
    this.title.setTitle('ONE | Careers');
    this.global.changeCss()
  }
  ngOnInit() {
  }

  subFormCareer(form) {
    console.log(form)
    form.value['cv'] = this.filestring;
    this.api.addJobApplication(form.value).subscribe(
      data => {
        console.log(data);
        form.reset();
        window.scrollTo(0, 0);
      },
      error => {
        console.log(error);
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

  handleFileInput(event) {
    console.log(event)
    const reader = new FileReader();
    this.fileExt = event.target.value.split('.')[event.target.value.split('.').length - 1];
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(event.target.files[0]);
    this.labelText = event.target.value;
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.filestring = 'data:file/' + this.fileExt + ';base64,' + btoa(binaryString);
  }

}
