import { Injectable } from "@angular/core";

declare var $: any;

@Injectable()
export class Globals {
  id = 1;
  counter = 0;

  modalVideo: any;
  currentVideo: any;
  currentPoster: any;
  poster: any;

  static_projects = [
    {
      // ------------------------------------------------------------------------------------
      id: 1,
      unit_pdf: "../../../assets/pdfs/264A.pdf",

      images: [
        {
          image: "../../../assets/img/Project/003_264_A/264-A-location-1.jpg",
        },

        {
          image: "../../../assets/img/Project/003_264_A/264-A-location-2.jpg",
        },

        {
          image: "../../../assets/img/Project/003_264_A/264-A-location-3.jpg",
        },
      ],
      img_counter: 8,
      unit_images: [
        {
          image: "../../../assets/img/Project/003_264_A/264-A-unit-1.jpg",
        },

        {
          image: "../../../assets/img/Project/003_264_A/264-A-unit-2.jpg",
        },

        {
          image: "../../../assets/img/Project/003_264_A/264-A-unit-3.jpg",
        },
        {
          image: "../../../assets/img/Project/003_264_A/264-A-unit-4.jpg",
        },
      ],
      phases: [
        {
          id: 1,
          date: "Jun 2019",
          phase_description: "phase test1",
          phase_description_en: "phase test1",
          phase_description_ar: "تست ١١",
          project: 2,
        },
      ],
      arabic: {
        title: "264-A",
        long_description:
          "يقع في منطقة شمال بيت الوطن التي تعتبر بقعة ذهبية في القاهرة الجديدة ، على بعد دقائق من طريق السويس و 90 طريق ، بالقرب من منطقة العرض ومنطقة الأندية. موقع برايم وان يُعتبر موقعًا متميزًا به حديقة ذات إطلالة فريدة في بيت الوطن.",
        lunch_str: "موعد التسليم فى",
        lunch_date: "٢٠٢٢",
        location: "بيت الوطن التكملية - القاهرة الجديدة",
      },
      english: {
        title: "264-A",
        long_description:
          "Located at North Beit Alwatan area which considered as golden spot in new cairo, minutes from suez road & 90 road, close to view zone & clubs area. Prime one location perceived as a prime which it has a unique view garden at beit al watan.",
          lunch_str: "Delivery in",
          lunch_date: "2022",
        location: "Beit El Watan ElTakmylia - New Cairo",
      },
      main_location:
        "../../../assets/img/Project/003_264_A/264-A-main-location.jpg",
      main_view: "../../../assets/img/Project/003_264_A/264-A-main-view.jpg",
      main_image: "../../../assets/img/Project/003_264_A/264-A-main-image.jpg",
    },
    // ------------------------------------------------------------------------------------
    {
      id: 2,
      unit_pdf: "../../../assets/pdfs/138-139B.pdf",

      images: [
        {
          image:
            "../../../assets/img/Project/002-138-139B/139-b-location-1.jpg",
        },
        {
          image:
            "../../../assets/img/Project/002-138-139B/139-b-location-2.jpg",
        },
        {
          image:
            "../../../assets/img/Project/002-138-139B/139-b-location-3.jpg",
        },
      ],
      unit_images: [
        {
          image: "../../../assets/img/Project/002-138-139B/139-b-unit-1.jpg",
        },
        { image: "../../../assets/img/Project/002-138-139B/139-b-unit-2.jpg" },
        {
          image: "../../../assets/img/Project/002-138-139B/139-b-unit-3.jpg",
        },
        {
          image: "../../../assets/img/Project/002-138-139B/139-b-unit-4.jpg",
        },
      ],
      phases: [
        {
          id: 1,
          date: "Jun 2019",
          phase_description: "phase test1",
          phase_description_en: "phase test1",
          phase_description_ar: "تست ١١",
          project: 2,
        },
      ],
      arabic: {
        title: "138-139B",
        long_description:
          "يقع Eminence على طريق شمال بيت الوطن جنوب السويس ، على بعد دقائق من 90 طريق ومنطقة خدمات ، Eminence به مرافق فريدة مثل منطقة اللياقة البدنية ومنطقة الأطفال والقمر الصناعي المركزي والمدخل الفريد والاتصال الداخلي والمصعد.",
          lunch_str: "موعد التسليم فى",
          lunch_date: "٢٠٢٢",
          location: "بيت الوطن التكملية - القاهرة الجديدة",
      },
      english: {
        title: "138-139B",
        long_description:
          "Eminence located at north beit al watan “South suez road”, minutes from 90 road & services area, Eminence has unique facilities like Fitness area , kids area , central satellite , unique entrance , intercom and elevator.",
          lunch_str: "Delivery in",
          lunch_date: "2022",
        location: "Beit El Watan ElTakmylia - New Cairo",
      },
      main_location:
        "../../../assets/img/Project/002-138-139B/139-b-main-location.jpg",
      main_view: "../../../assets/img/Project/002-138-139B/139-b-main-view.jpg",
      main_image:
        "../../../assets/img/Project/002-138-139B/139-b-main-image.jpg",
    },
    // ------------------------------------------------------------------------------------
    {
      id: 3,
      unit_pdf: "../../../assets/pdfs/26F.pdf",

      images: [
        {
          image: "../../../assets/img/Project/004_26_F/26-f-location-1.jpg",
        },
        {
          image: "../../../assets/img/Project/004_26_F/26-f-location-2.jpg",
        },
        {
          image: "../../../assets/img/Project/004_26_F/26-f-location-3.jpg",
        },
      ],
      unit_images: [
        {
          image: "../../../assets/img/Project/004_26_F/26-f-unit-1.jpg",
        },
        {
          image: "../../../assets/img/Project/004_26_F/26-f-unit-2.jpg",
        },
        {
          image: "../../../assets/img/Project/004_26_F/26-f-unit-3.jpg",
        },
      ],
      phases: [
        {
          id: 1,
          date: "Jun 2019",
          phase_description: "phase test1",
          phase_description_en: "phase test1",
          phase_description_ar: "تست ١١",
          project: 2,
        },
      ],
      arabic: {
        title: "26-F",
        long_description:
          "بصرف النظر عن المجمع المصغر العادي الموجود في بيت الوطن ، يقدم بريميوم وان لسكانه مرافق سكنية فاخرة مع أنواع وحدات مختلفة تستجيب لطلب السوق السكنية.",
          lunch_str: "موعد التسليم فى",
          lunch_date: "٢٠٢٢",
          location: "الحي الأول - بيت الوطن - القاهرة الجديدة",
      },
      english: {
        title: "26-F",
        long_description:
          "Apart from the ordinary mini compound being in the Beit Al watan, Premium one offers its residents with premium facilities residential community with different units’ types responding to the residential market demand.",
          lunch_str: "Delivery in",
          lunch_date: "2022",
        location: "1st District - Beit El Watan - New Cairo",
      },
      main_location:
        "../../../assets/img/Project/004_26_F/26-f-main-location.jpg",
      main_view: "../../../assets/img/Project/004_26_F/26-f-main-view.jpg",
      main_image: "../../../assets/img/Project/004_26_F/26-f-main-image.jpg",
    },
    // ------------------------------------------------------------------------------------
    {
      id: 4,
      launchDateEN: "Launched",
      launchDateAR: "تم التسليم",
      homeTitleEN: "149-G",
      homeTitleAR: "149-G",
      img_home: "../../../assets/img/",
      unit_pdf: "../../../assets/pdfs/149G.pdf",
      images: [
        {
          image:
            "../../../assets/img/Project/005_149_New-Narges/149-G-location-1.jpg",
        },
        {
          image:
            "../../../assets/img/Project/005_149_New-Narges/149-G-location-2.jpg",
        },
      ],
      unit_images: [
        {
          image:
            "../../../assets/img/Project/005_149_New-Narges/149-G-unit-1.jpg",
        },
        {
          image:
            "../../../assets/img/Project/005_149_New-Narges/149-G-unit-2.jpg",
        },
        {
          image:
            "../../../assets/img/Project/005_149_New-Narges/149-G-unit-3.jpg",
        },
        {
          image:
            "../../../assets/img/Project/005_149_New-Narges/149-G-unit-4.jpg",
        },
      ],
      phases: [
        {
          id: 1,
          date: "Jun 2019",
          phase_description: "phase test1",
          phase_description_en: "phase test1",
          phase_description_ar: "تست ١١",
          project: 2,
        },
      ],
      arabic: {
        title: "149-G",
        long_description:
          "خطوات من منطقه الفيو زون التى تربط مابين 'بيت الوطن' أرقى مناطق التجمع الخامس والعاصمه الاداريه الجديده ودقائق الى اهم المحاور الرئيسيه التى تربط القاهره.",
        lunch_str: "موعد التسليم فى",
        lunch_date: "٢٠٢٣",
        location: "النرجس الجديدة - القاهرة الجديدة",
      },
      english: {
        title: "149-G",
        long_description:
          "One step from view zone, The access point between new cairo & new capital, minutes to reach main highways.",
        lunch_str: "Delivery in",
        lunch_date: "2023",
        location: "New Narges - New Cario",
      },
      main_location:
        "../../../assets/img/Project/005_149_New-Narges/149-G-main-location.jpg",
      main_view:
        "../../../assets/img/Project/005_149_New-Narges/149-G-main-view.jpg",
      main_image:
        "../../../assets/img/Project/005_149_New-Narges/149-G-main-image.jpg",
    },
    // ------------------------------------------------------------------------------------
    {
      id: 5,
      launchDateEN: "Launched",
      launchDateAR: "تم التسليم",
      homeTitleEN: "19-O",
      homeTitleAR: "19-O",
      img_home: "../../../assets/img/",
      unit_pdf: "../../../assets/pdfs/19O.pdf",
      images: [
        {
          image: "../../../assets/img/Project/map-location/19-o-1.png",
        },
        {
          image: "../../../assets/img/Project/map-location/19-o-2.jpg",
        },
        {
          image: "../../../assets/img/Project/map-location/19-o-3.jpg",
        },
      ],
      unit_images: [
        {
          image: "../../../assets/img/Project/001_19_O/19-o-unit-1.jpg",
        },
        {
          image: "../../../assets/img/Project/001_19_O/19-o-unit-2.jpg",
        },
      ],
      phases: [
        {
          id: 1,
          date: "Jun 2019",
          phase_description: "phase test1",
          phase_description_en: "phase test1",
          phase_description_ar: "تست ١١",
          project: 2,
        },
      ],
      arabic: {
        title: "19-O",
        long_description:
          "خطوات من منطقه الفيو زون التى تربط مابين 'بيت الوطن' أرقى مناطق التجمع الخامس والعاصمه الاداريه الجديده ودقائق الى اهم المحاور الرئيسيه التى تربط القاهره.",
          lunch_str: "موعد التسليم فى",
          lunch_date: "٢٠٢٢",
          location: "الحي الخامس - بيت الوطن - القاهرة الجديدة",
      },
      english: {
        title: "19-O",
        long_description:
          "One step from view zone, The access point between new cairo & new capital, minutes to reach main highways.",
        lunch_str: "Delivery in",
        lunch_date: "2022",
        location: "5th District - Beit El Watan - New Cairo",
      },
      main_location: "../../../assets/img/Project/map-location/19-o-main.jpg",
      main_view: "../../../assets/img/Project/001_19_O/19O.jpg",
      main_image:
        "../../../assets/img/Project/001_19_O/19-O-main-view.jpg",
    },
    // ------------------------------------------------------------------------------------
    {
      id: 6,
      launchDateEN: "Launched",
      launchDateAR: "تم التسليم",
      homeTitleEN: "88-E",
      homeTitleAR: "88-E",
      img_home: "../../../assets/img/",
      unit_pdf: "../../../assets/pdfs/E88.pdf",
      images: [
        {
          image: "../../../assets/img/Project/006_E88/88-E-location-1.jpg",
        },
        {
          image: "../../../assets/img/Project/006_E88/88-E-location-2.jpg",
        },
        {
          image: "../../../assets/img/Project/006_E88/88-E-location-3.jpg",
        },
      ],
      unit_images: [
        {
          image: "../../../assets/img/Project/006_E88/88-E-unit-1.jpg",
        },
        {
          image: "../../../assets/img/Project/006_E88/88-E-unit-2.jpg",
        },
        {
          image: "../../../assets/img/Project/006_E88/88-E-unit-2.jpg",
        },
      ],
      phases: [
        {
          id: 1,
          date: "Jun 2019",
          phase_description: "phase test1",
          phase_description_en: "phase test1",
          phase_description_ar: "تست ١١",
          project: 2,
        },
      ],
      arabic: {
        title: "88-E",
        long_description:
          "خطوات من منطقه الفيو زون التى تربط مابين 'بيت الوطن' أرقى مناطق التجمع الخامس والعاصمه الاداريه الجديده ودقائق الى اهم المحاور الرئيسيه التى تربط القاهره.",
          lunch_str: "موعد التسليم فى",
          lunch_date: "٢٠٢٢",
          location: "مصر الجديدة",
      },
      english: {
        title: "88-E",
        long_description:
          "One step from view zone, The access point between new cairo & new capital, minutes to reach main highways.",
        lunch_str: "Delivery in",
        lunch_date: "2022",
        location: "New Cairo",
      },
      main_location:
        "../../../assets/img/Project/006_E88/88-E-main-location.jpg",
      main_view: "../../../assets/img/Project/006_E88/88-E-main-view.jpg",
      main_image: "../../../assets/img/Project/006_E88/88-E-main-image.jpg",
    },
    // ------------------------------------------------------------------------------------
  ];

  our_projects = [
    {
      id: 1,
      header_title: "INSTITUTES",
      title_en: "INSTITUTES DEVELOPMENTS",
      title_ar: "مؤسسات التعليم العالي",

      subtitle_en: "The higher institution of science and technology",
      subtitle_ar: "المعهد العالى للعلوم والتكنولوجيا",
      description_en:
        "Higher Institute of Commercial Sciences and Computer at al aresh in 2002. Higher Institute of Commercial Sciences and Computer at al aresh in 2018.",
      list_title_en: "",
      list_title_ar: "",
      list: [
        {
          li_en: "",
          li_ar: "",
        },
      ],
      description2_en:
        "The higher institution of science and technology, executed by One developments.The institution is degreed and trusted by the Egyptian supreme council of universities and the minister of higher education. The institution proposes bachelor degrees across different studies and sciences. One development aims to support the education development process in Egypt and accordingly We introduce building methods that suit the modern concept of architecture while maintaining the theme and halo of educational buildings.",
      description_ar:
        "المعهد العالي للعلوم التجارية والحاسوب بالعريش عام 2002 المعهد العالي للعلوم التجارية والحاسوب بالعريش عام 2018",
      description2_ar:
        "المعهد العالى للعلوم والتكنولوجيا احدى مشاريع شركة وان للتطوير العقاري المعهد معادل من المجلس الاعلي للجامعات بدرجة البكالوريوس في التجاره التي تمنحها الجامعات المصريه في التخصصات الموجوده بالتعاون مع نخبه ممتازه من الساده الاستاذه ومعاونيهم و معتمد من السيد الاستاذ الدكتور وزير التعليم العاليوذلك اسهاما من الشركة فى خطة تطوير التعليم بجمهورية مصر العربيهوكما نحرص على اختيار المواقع الحيوية لجميع مشاريعنا تم اختيار مواقع المعهد بعناية كما تم مراعاة احدث المعاير الهندسية فى البناء مع المحافظة على الشكل المميز",
      image: "../../../assets/img/institute.jpg",
    },
    {
      id: 2,
      header_title: "government",
      title_en: "Government DEVELOPMENTS",
      title_ar: "المنشآت الحكومية",
      description_en:
        "Construction, real estate, and hospitality development. Our business expanded into public sector, with a successful record and rapid development occurring in Egypt. The company portfolio includes highly complex and prestigious projects for both private and public sectors.",
      list_title_en: "To list a few:",
      list_title_ar: "وتشمل هذه المشاريع:",
      list: [
        {
          li_en: "City Center Bridge “suez road”",
          li_ar: "جسر سيتي سنتر ”طريق السويس“",
        },
        {
          li_en: "Participating in new capital Road construction",
          li_ar: "المشاركة في بناء طريق رأس المال الجديد",
        },
        {
          li_en: "Tantawy Mosque “ NA Road”",
          li_ar: 'مسجد طنطاوى "NA Road"',
        },
        {
          li_en: "Participating in Suez Canal",
          li_ar: "المشاركة في قناة السويس",
        },
        {
          li_en: "Galala Road",
          li_ar: "طريق جلال",
        },
      ],
      description_ar:
        "تطوير البناء والعقارات والضيافة. توسعت أعمالنا لتشمل القطاع العام ، مع سجل ناجح وتطور سريع في مصر. تتضمن محفظة الشركة مشاريع معقدة للغاية ومرموقة لكل من القطاعين العام والخاص.",
      image: "../../../assets/img/home.jpg",
    },
  ];

  videos = [
    {
      modal_video: "../../../assets/videos/one_1.mp4",
      poster: "../../../assets/videos/one_1.png",
    },{

      modal_video: "../../../assets/videos/show-reel.mp4",
      poster: "../../../assets/videos/show-reel.png",
    },
    {
      modal_video: "../../../assets/videos/24C-1.m4v",
      poster: "../../../assets/videos/24C-1.png",
    },
    {
      modal_video: "../../../assets/videos/D-53-1.m4v",
      poster: "../../../assets/videos/D-53-1.png",
    },
    {
      modal_video: "../../../assets/videos/G149-1.m4v",
      poster: "../../../assets/videos/G149-1.png",
    },
    {
      modal_video: "../../../assets/videos/O-19-1.m4v",
      poster: "../../../assets/videos/O-19-1.png",
    },
    {
      modal_video: "../../../assets/videos/Comp 1_1 (1).mp4",
      poster: "../../../assets/videos/sc3.jpg",
    },
  ];

  modalData(i) {
    this.modalVideo = this.videos[i];
    this.currentVideo = this.modalVideo.modal_video;
  }

  changeCssProjects() {
    this.style();
    var checkScrollBar2 = function () {
      $(".navbar").css({
        backgroundColor: $(this).scrollTop() >= 0 ? "white" : "white",
        borderBottom:
          $(this).scrollTop() >= 0
            ? "0.5px solid #cccccc"
            : "0.5px solid #cccccc",
      });
      $(".nav-item").css({
        color: $(this).scrollTop() >= 0 ? "black" : "black",
      });
      $(".nav-link").css({
        color: $(this).scrollTop() >= 0 ? "black" : "black",
      });

      $(".nav-lang").css({
        color: $(this).scrollTop() >= 0 ? "black" : "black",
      });

      $(".social a").css({
        color: $(this).scrollTop() >= 0 ? "black" : "black",
      });

      $(".logo").css({
        display: $(this).scrollTop() >= 0 ? "none" : "none",
        opacity: $(this).scrollTop() >= 0 ? "0" : "0",
      });
      $(".logo-black").css({
        display: $(this).scrollTop() >= 0 ? "block" : "block",
        opacity: $(this).scrollTop() >= 0 ? "1" : "1",
      });
      $(".icon-bar").css({
        backgroundColor: $(this).scrollTop() >= 1 ? "black" : "black",
      });
    };
    $(window).on("load resize scroll", checkScrollBar2);
  }

  changeCss() {
    this.style2();
    var checkScrollBar = function () {
      $(".navbar").css({
        backgroundColor:
          $(this).scrollTop() > 1 ? "white" : "rgba(0, 0, 0, 0.1)",
        borderBottom:
          $(this).scrollTop() > 1
            ? "0.5px solid #cccccc"
            : "0.5px solid transparent",
      });
      $(".nav-item").css({
        color: $(this).scrollTop() >= 1 ? "black" : "white",
      });
      $(".nav-link").css({
        color: $(this).scrollTop() >= 1 ? "black" : "white",
      });

      $(".nav-lang").css({
        color: $(this).scrollTop() >= 1 ? "black" : "white",
      });

      $(".social a").css({
        color: $(this).scrollTop() >= 1 ? "black" : "white",
      });

      $(".logo").css({
        display: $(this).scrollTop() >= 1 ? "none" : "block",
        opacity: $(this).scrollTop() >= 1 ? "0" : "1",
      });
      $(".logo-black").css({
        display: $(this).scrollTop() >= 1 ? "block" : "none",
        opacity: $(this).scrollTop() >= 1 ? "1" : "0",
      });
      $(".icon-bar").css({
        backgroundColor: $(this).scrollTop() >= 1 ? "black" : "white",
      });
    };
    $(window).on("load resize scroll", checkScrollBar);
  }

  style() {
    $(".navbar").css({
      backgroundColor: $(this).scrollTop() >= 0 ? "white" : "white",
      borderBottom:
        $(this).scrollTop() >= 0
          ? "0.5px solid #cccccc"
          : "0.5px solid #cccccc",
    });
    $(".nav-item").css({
      color: $(this).scrollTop() >= 0 ? "black" : "black",
    });
    $(".nav-link").css({
      color: $(this).scrollTop() >= 0 ? "black" : "black",
    });

    $(".nav-lang").css({
      color: $(this).scrollTop() >= 0 ? "black" : "black",
    });

    $(".social a").css({
      color: $(this).scrollTop() >= 0 ? "black" : "black",
    });

    $(".logo").css({
      display: $(this).scrollTop() >= 0 ? "none" : "none",
      opacity: $(this).scrollTop() >= 0 ? "0" : "0",
    });
    $(".logo-black").css({
      display: $(this).scrollTop() >= 0 ? "block" : "block",
      opacity: $(this).scrollTop() >= 0 ? "1" : "1",
    });
    $(".icon-bar").css({
      backgroundColor: $(this).scrollTop() >= 1 ? "black" : "black",
    });
  }
  style2() {
    $(".navbar").css({
      backgroundColor: $(this).scrollTop() > 1 ? "white" : "rgba(0, 0, 0, 0.0)",
      borderBottom:
        $(this).scrollTop() > 1
          ? "0.5px solid #cccccc"
          : "0.5px solid transparent",
    });
    $(".nav-item").css({
      color: $(this).scrollTop() >= 1 ? "black" : "white",
    });
    $(".nav-link").css({
      color: $(this).scrollTop() >= 1 ? "black" : "white",
    });

    $(".nav-lang").css({
      color: $(this).scrollTop() >= 1 ? "black" : "white",
    });

    $(".social a").css({
      color: $(this).scrollTop() >= 1 ? "black" : "white",
    });

    $(".logo").css({
      display: $(this).scrollTop() >= 1 ? "none" : "block",
      opacity: $(this).scrollTop() >= 1 ? "0" : "1",
    });
    $(".logo-black").css({
      display: $(this).scrollTop() >= 1 ? "block" : "none",
      opacity: $(this).scrollTop() >= 1 ? "1" : "0",
    });
    $(".icon-bar").css({
      backgroundColor: $(this).scrollTop() >= 1 ? "black" : "white",
    });
  }
}
