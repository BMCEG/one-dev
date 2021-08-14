import { Component, OnInit } from "@angular/core";
import { Globals } from "src/app/app.config";
declare var $: any;

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  videos: any;
  constructor(public global: Globals) {
    this.videos = global.videos;
    console.log(this.videos);
    this.global.changeCss();
  }
  ngOnInit() {
    $("#scroll").click(function() {
      $("html , body").animate({ scrollTop: 600 }, "100");
    });

    $("#videoOne").on("shown.bs.modal", function(e) {
      $("#videoOne video")
        .get(0)
        .play();
    });
    $("#videoOne").on("hidden.bs.modal", function(e) {
      $("#videoOne video")
        .get(0)
        .pause();
      $("#videoOne video").get(0).currentTime = 0;
    });



    $("#videoOne").on("hidden.bs.modal", function(e) {
      $("#myModal video").attr("src", $("#myModal iframe").attr("src"));
    });
  }
}
