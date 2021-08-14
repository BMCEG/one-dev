import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from '../../app.config';
import { GlobalsFunction } from '../../app.template.config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('projectId') projectId: ElementRef;



  customOptions: OwlOptions = {
    center: true,
    loop: true,
    mouseDrag: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };
  activeSlides: SlidesOutputData;


  customOptions2: OwlOptions = {
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    autoplayTimeout: 3500,
    items: 1,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    nav: false,
  }

  activeSlides2: SlidesOutputData;

  slidesStore: any[];

  // variables

  currentSlide = 1;
  totalSlides = 0;
  projects: any;
  newTitle: string;
  location: string;
  lunchStr: string;
  lunchDate: string;
  backGroundImg: any[];
  unitBackground: any[];
  newDescription: string;
  current_lang: string;
  image_length: number;
  unit_image_length: number;
  projects_length: number;
  current_project: any;
  imagesOfImages = [];
  temp: any;
  current_index = 0;
  myHtml: string = '<div><i>basic initial HTML</i></div>';
  static_project = [];
  index: any;
  id: any;
  proRout: any;

  constructor(private title: Title,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private globals: Globals,
    private globalfunctions: GlobalsFunction, ) {
    this.title.setTitle('ONE | Projects');
    this.globals.counter ++ ;
    this.id = globals.id;
    translate.onLangChange.subscribe((val) => {
      this.current_lang = translate.store.currentLang;
      this.change_lang_2(this.projects);
      this.getDataTranslate(this.current_index);
    });
  
    this.static_project = this.globals.static_projects
    console.log(this.static_project[this.id-1])
    this.proRout =  this.static_project[this.id-1]
    this.route.params.subscribe(params => {
      this.getProjects();
    });

  }



  ngOnInit() {

    
    function move_array(arr, old_index) {
      let array_length = arr.length,
        elment = arr[old_index];
      while (true) {
        arr = [arr[array_length - 1]].concat(arr);
        arr.length = array_length;
        if (arr[0] === elment) {
          break;
        }
      }
      return arr;
    }
    this.projects = move_array(this.projects,this.id-1);
    this.currentSlide = this.id;

    this.globals.changeCssProjects();
    let data = this.globals.static_projects,
      used_class = $('.projects-imgs'),
      img_length = 0;
    used_class.empty()
    used_class.append(this.globalfunctions.getProjectTemp(data[0]))
    for (let i = 0; i < data[0].images.length; i++) {
      $('.img-' + i).css({
        'background-image': 'url("' + data[0].images[i].image + '")',
      });
    }

    let $overlay = $('<div class="overlay-carosel"></div>'),
      $image = $('<img>'),
      $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>'),
      $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>'),
      $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

    // Add overlay
    $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $('#gallery').append($overlay);

    // Hide overlay on default
    $overlay.hide();
    let current_slider_index = 0;
    // When an image is clicked
    $('#gallery').on('click', '.img-overlay', function (event) {
      // Prevents default behavior
      event.preventDefault();
      current_slider_index = parseInt($(this).attr('index'))
      img_length = parseInt($(this).attr('length')) - 1
      // Adds href attribute to variable
      let imageLocation = $(this).prev().attr('href');
      // Add the image src to $image
      $image.attr('src', imageLocation);
      $image.css({
        'margin': '0',
        'width': '80%',
        'height': 'auto',
        'object-fit': 'contain',
        'padding': '5%',
      });
      // Fade in the overlay
      $overlay.fadeIn('slow');
      $overlay.css({
        'background': ' rgba(0, 0, 0, 0.7)',
        'width': '100%',
        'height': '100%',
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'display': 'flex',
        'justify-content': 'center',
        'align-item': 'center',
        'z-index': '999'
      });

      $nextButton.fadeIn('slow');
      $nextButton.css({
        'color': '#fff',
        'font-size': '2em',
        'transition': 'opacity 0.8s',
        'position': 'absolute',
        'top': '50%',
        'right': '10%',
        'transform': 'translate(-10%, -50%)',
      });


      $prevButton.fadeIn('slow');
      $prevButton.css({
        'color': '#fff',
        'font-size': '2em',
        'transition': 'opacity 0.8s',
        'position': 'absolute',
        'top': '50%',
        'left': '10%',
        'transform': 'translate(-10%, -50%)',
      });

      $exitButton.fadeIn('slow');
      $exitButton.css({
        'color': '#fff',
        'font-size': '2em',
        'transition': 'opacity 0.8s',
        'position': 'absolute',
        'top': '8%',
        'right': '10%'

      });
    });


    // When the overlay is clicked
    $overlay.click(function () {
      // Fade out the overlay
      $(this).fadeOut('slow');
    });

    function incrementRevers() {
      $('.overlay-carosel img').hide();
      $('.overlay-carosel img').attr('src',
        $('.img-' + current_slider_index + ' a').attr('href')).fadeIn(500);
    }
    // When next button is clicked
    $nextButton.click(function (event) {
      current_slider_index += 1
      if (current_slider_index > img_length) {
        current_slider_index = 0
      }
      incrementRevers()
      // Prevents overlay from being hidden
      event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function (event) {
      current_slider_index -= 1
      if (current_slider_index < 0) {
        current_slider_index = img_length
      }
      incrementRevers();
      // Prevents overlay from being hidden
      event.stopPropagation();
    });

    // When the exit button is clicked
    $exitButton.click(function () {
      // Fade out the overlay
      $('.overlay-carosel').fadeOut('slow');
    });


  }


 
  






  // index slider
  getPassedData(data: SlidesOutputData) {
    this.projects
    this.activeSlides = data;
    this.currentSlide = this.activeSlides['startPosition'] + 1;
    console.log(this.currentSlide)
    this.current_index = data.startPosition;
    // console.log(this.current_index)
    this.set_static_data(data.startPosition);
    this.getDataTranslate(data.startPosition);
    let datas = this.static_project,
      used_class = $('.projects-imgs')
    used_class.empty()
    used_class.append(this.globalfunctions.getProjectTemp(datas[data.startPosition]))
    this.projects.id = this.id;
    for (let i = 0; i < datas[data.startPosition].images.length; i++) {
      $('.img-' + i).css({
        'background-image': 'url("' + datas[data.startPosition].images[i].image + '")',
      });
    }
  }


  getDataTranslate(index, data = null) {
    if (this.translate.store.currentLang === 'ar') {
      this.newDescription = this.projects[index].arabic.long_description;
      this.newTitle = this.projects[index].arabic.title;
      this.location = this.projects[index].arabic.location;
      this.lunchStr = this.projects[index].arabic.lunch_str;
      this.lunchDate = this.projects[index].arabic.lunch_date;
    } else {
      this.newDescription = this.projects[index].english.long_description;
      this.newTitle = this.projects[index].english.title;
      this.location = this.projects[index].english.location;
      this.lunchStr = this.projects[index].english.lunch_str;
      this.lunchDate = this.projects[index].english.lunch_date;

    }
  }

  change_lang_2(data) {
    for (let i = 0; i < data.length; i++) {
      this.getDataTranslate(i, data);
      data[i].newTitle = this.newTitle;
      data[i].location = this.location;
      data[i].newDescription = this.newDescription;
      data[i].lunchStr = this.lunchStr;
      data[i].lunchDate = this.lunchDate;
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  getProjects = () => {
    this.projects = this.static_project
    // console.log(this.projects)
    for (let i = 0; i < this.static_project.length; i++) {
      this.getDataTranslate(i, this.static_project);
      const new_title = { 'newTitle': this.newTitle };
      const new_location = {'location': this.location}
      const new_desc = { 'newDescription': this.newDescription };
      const lunch_string = { 'lunchStr': this.lunchStr }
      const lunch_date_private = {'lunchDate': this.lunchDate }
      this.projects[i] = Object.assign({}, this.projects[i], new_title);
      this.projects[i] = Object.assign({}, this.projects[i], new_location);
      this.projects[i] = Object.assign({}, this.projects[i], new_desc);
      this.projects[i] = Object.assign({}, this.projects[i], lunch_string);
      this.projects[i] = Object.assign({}, this.projects[i], lunch_date_private)
    }
    this.getDataTranslate(0);

    this.set_static_data();
    this.projects_length = this.static_project.length;
  };

  get_current_project() {
    return this.current_project
  }

  set_static_data(index = 0) {
    this.backGroundImg = this.static_project[index].main_image;
    this.current_project = this.projects[index];

    this.image_length = (this.current_project.images.length);
    this.unit_image_length = (this.current_project.unit_images.length);
    
  }
}
