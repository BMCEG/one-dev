import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/app.config';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-explore-properties',
  templateUrl: './explore-properties.component.html',
  styleUrls: ['./explore-properties.component.scss']
})
export class ExplorePropertiesComponent implements OnInit {
  project_id: any;
  current_lang: string;
  title: any;
  description: any;
  subtitle: any;
  description2: any;
  list_title :any;
  list_li = [];

  constructor(private global: Globals, private route: ActivatedRoute, private router:Router,  private translate: TranslateService) { 

  translate.onLangChange.subscribe((val) => {
    this.current_lang = translate.store.currentLang;
    this.getDataTranslate();
  });

  this.route.params.subscribe(params => {
  this.project_id = this.global.our_projects[params['id']-1];
  this.getDataTranslate();
    });

    global.changeCss();
    this.getDataTranslate();
  }

  getDataTranslate() {
    if (this.translate.store.currentLang === 'ar') {
      this.list_li = []
      this.title = this.project_id.title_ar;
      this.description = this.project_id.description_ar;
      this.subtitle = this.project_id.subtitle_ar;
      this.description2 = this.project_id.description2_ar;
      this.list_title = this.project_id.list_title_ar;

      
      for (let index = 0; index < this.project_id.list.length; index++) {
        this.list_li.push(this.project_id.list[index].li_ar);
      }
      

    } else {
      this.list_li = []
      this.title = this.project_id.title_en;
      this.description = this.project_id.description_en;
      this.subtitle = this.project_id.subtitle_en;
      this.description2 = this.project_id.description2_en;
      this.list_title = this.project_id.list_title_en;

      for (let index = 0; index < this.project_id.list.length; index++) {
        this.list_li.push(this.project_id.list[index].li_en);
      }

      
    }
  }

  ngOnInit() {
  }

}
