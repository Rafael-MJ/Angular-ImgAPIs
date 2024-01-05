import { Component } from '@angular/core';

@Component({
  selector: 'app-api-bannerbear',
  templateUrl: './api-bannerbear.component.html',
  styleUrls: ['./api-bannerbear.component.css']
})
export class ApiBannerbearComponent {

  KEY_TEMP: string = '';
  KEY_API: string = '';

  n_template: number = 0;
  n_txt: string = '';
  n_txtclr: string = '#000';
  n_img: string = '';
  n_theme: string = 'https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg';
  n_theme_ico: string = 'https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg';

  private tempChristmas() {
    this.n_txtclr = '#00FF22';
    this.n_theme = 'https://cdn.vectorstock.com/i/preview-1x/17/86/christmas-border-with-firtree-and-balls-vector-44511786.jpg';
    this.n_theme_ico = 'https://cdn-icons-png.flaticon.com/512/3695/3695375.png';
  }

  public getImg() {
    if (this.n_template == 1) {
      this.tempChristmas();
    }

    var data = {
      "template" : this.KEY_TEMP,
      "modifications": [
        {
          "name": "image",
          "image_url": this.n_img
        },
        {
          "name": "b_texture",
          "image_url": this.n_theme
        },
        {
          "name": "b_texture_ico",
          "image_url": this.n_theme_ico
        },
        {
          "name": "message",
          "text": this.n_txt,
          "color": this.n_txtclr,
          "background": null
        }
      ],
      "webhook_url": null,
      "transparent": null,
      "metadata": null
    }

    fetch('https://api.bannerbear.com/v2/images', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${this.KEY_API}`
      }
    })
  }
}