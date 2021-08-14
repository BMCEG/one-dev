import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/app.config';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor(private global: Globals) {
    this.global.changeCssProjects();
  }
  ngOnInit() {
  }

}
