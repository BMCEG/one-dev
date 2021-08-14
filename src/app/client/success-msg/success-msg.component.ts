import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-success-msg',
  templateUrl: './success-msg.component.html',
  styleUrls: ['./success-msg.component.scss']
})
export class SuccessMsgComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('ONE | Success message');
  }

  ngOnInit() {
  }

}
