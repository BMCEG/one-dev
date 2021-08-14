import { Injectable } from "@angular/core";


@Injectable()
export class GlobalsFunction {
  getProjectTemp(project) {
    let images = project.images,
      temp = ''
    for (let i = 0; i < images.length; i++) {
      temp += this.createTemp(images[i].image, i, images.length);
    }
    return temp
  }

  createTemp(image = "", id = 0, length = 8) {
    let temp = ''
    if (id % 8 == 0 || id % 8 == 3)
      temp += '<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 image">\n'
    else if (id % 7 == 0)
      temp += '<div class="col-xl-12 image">\n'
    else
      temp += '<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 image">\n'
    temp += '<div class="img-wrapper img-' + id + '"'
    temp += ' >\n'
    // temp += '<a href="' + image + '"></a>\n'
    // temp += '<div class="img-overlay" length="' + length + '" index="' + id + '">\n'
    // temp += '<i class="fa fa-plus-circle" aria-hidden="true"></i>\n'
    temp += '</div>\n</div>\n</div>\n'

    return temp
  }

}
