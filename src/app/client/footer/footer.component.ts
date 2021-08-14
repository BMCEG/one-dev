import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  successSubmission = false;
  failedSubmission = false;

  onSubmit(form) {
    console.log(form.value)
    this.api.addNewsletter(form.value.Email).subscribe(
      data => {
        this.successSubmission = true;
        setTimeout(() => { this.successSubmission = false; }, 5000);
      },
      error => {
        this.failedSubmission = true;
        setTimeout(() => { this.failedSubmission = false; }, 3000);
      }
    )
    form.reset();
  }
}