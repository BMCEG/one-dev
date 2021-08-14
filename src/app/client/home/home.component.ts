import { Component, OnInit } from "@angular/core";
import { SlidesOutputData, CarouselComponent } from "ngx-owl-carousel-o";
import { OwlOptions } from "ngx-owl-carousel-o";
import { Title } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";
import { Globals } from "src/app/app.config";
import { getOrSetAsInMap } from "@angular/animations/browser/src/render/shared";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  currentSlide = 1;
  totalSlides = 0;
  proj_title: any;
  projects_length: number;
  current_index = 0;

  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    autoplayTimeout: 3500,
    items: 1,
    loop: true,
    mouseDrag: true,
    animateOut: "fadeOut",
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ["", ""],
    nav: false
  };
  activeSlides: SlidesOutputData;

  slidesStore: any[];
  employees: any[];
  projects: any;
  emplyeeName: string[];
  current_lang: string;
  imgOfProject: any[];
  projectLink = "/projects";
  desc_project: any[];

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private global: Globals
  ) {
    global.counter++;
    this.title.setTitle("ONE Development");

    translate.onLangChange.subscribe(val => {
      this.current_lang = translate.store.currentLang;
    });

    global.changeCss();
    this.imgOfProject = global.static_projects;
    this.desc_project = global.our_projects;
  }

  set_id(id) {
    this.global.id = id;
  }

  ngOnInit() {
    for (let i = 0; i; i++) {}
  }

  openPDF() {
    console.log("hello")
  }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    this.currentSlide = this.activeSlides["startPosition"] + 1;
  }
}
