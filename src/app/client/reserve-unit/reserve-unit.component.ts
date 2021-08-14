import { Component, OnInit } from "@angular/core";
import * as $ from "jquery/dist/jquery.min.js";
import { Title } from "@angular/platform-browser";
import { Globals } from "src/app/app.config";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-reserve-unit",
  templateUrl: "./reserve-unit.component.html",
  styleUrls: ["./reserve-unit.component.scss"]
})
export class ReserveUnitComponent implements OnInit {
  constructor(
    private title: Title,
    private api: ApiService,
    private global: Globals
  ) {
    this.title.setTitle("ONE | Reserve unit");
    global.changeCssProjects();
  }

  ngOnInit() {
    $(function() {
      $(".submit").click(function() {
        $(".submit").attr("disabled", "disabled");
        setTimeout(function() {
          $(".submit").removeAttr("disabled");
        }, 5000);
      });
    });
  }

  subForm_reserve(form) {
    console.log(form);
    this.api.addResereUnit(form.value).subscribe(
      data => {
        form.reset();
        window.scrollTo(0, 0);
      },
      error => {}
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
    const stringAllow = /[a-z\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !stringAllow.test(inputChar)) {
      event.preventDefault();
    }
  }
}
