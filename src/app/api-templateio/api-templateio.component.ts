import { Component } from '@angular/core';

interface PostData {
  overrides: {
    name: string;
    stroke: string;
    backgroundColor?: string;
    src?: string;
    text?: string;
    textBackgroundColor?: string;
    color?: string;
  }[];
}

@Component({
  selector: 'app-api-templateio',
  templateUrl: './api-templateio.component.html',
  styleUrls: ['./api-templateio.component.css']
})

export class ApiTemplateioComponent {
  KEY_TEMP: string = ''; // set Template Key
  KEY_API: string = ''; // set API Key

  n_template: number = 0;
  n_txt: string = '';
  n_txtclr: string = '#000';
  n_img: string = 'https://images.unsplash.com/photo-1600891964092-4316c288032e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTc1MDZ8MHwxfHNlYXJjaHw0fHxzdGVha3xlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=1080';
  n_theme: string = 'https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg';
  n_theme_ico: string = 'https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg';
  n_imageresult: string = "https://logos.flamingtext.com/Word-Logos/exemplo-design-sketch-name.png";

  loading: string = 'https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-39.gif';

  private tempChristmas() {
    this.n_txtclr = '#00FF22';
    this.n_theme = 'https://cdn.vectorstock.com/i/preview-1x/17/86/christmas-border-with-firtree-and-balls-vector-44511786.jpg';
    this.n_theme_ico = 'https://cdn-icons-png.flaticon.com/512/3695/3695375.png';
  }

  public getImg() {
    if (this.n_template == 1) {
      this.tempChristmas();
    }

    const data: PostData = {
      "overrides": [
        {
            "name": "background-color",
            "stroke": "grey",
            "backgroundColor": "#848484"
        },
        {
            "name": "image",
            "stroke": "grey",
            "src": this.n_img
        },
        {
            "name": "b_texture",
            "stroke": "grey",
            "backgroundColor": "#000000",
            "src": this.n_theme
        },
        {
            "name": "b_texture_ico",
            "stroke": "grey",
            "src": this.n_theme_ico
        },
        {
            "name": "txt",
            "stroke": "grey",
            "text": this.n_txt,
            "textBackgroundColor": "rgba(246, 243, 243, 0)",
            "color": this.n_txtclr
        }
      ]
    }
    this.postData(data)
  }

  private postData(data: PostData) {

    this.n_imageresult = this.loading;

    let responseJSON = '';

    fetch('https://rest.apitemplate.io/v2/create-pdf?template_id='+this.KEY_TEMP, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json',
        'X-API-KEY': this.KEY_API
      }
    }).then(response => response.json())
    .then(response => {
      responseJSON = response;
      const download_url = response.download_url;
      const download_url_png = response.download_url_png;
      const status = response.status;
      const transaction_ref = response.transaction_ref;

      // Tests

      console.log("a: " + download_url);
      console.log("b: " + download_url_png);
      console.log("c: " + status);
      console.log("d: " + transaction_ref);
      console.log("e: " + responseJSON);

      this.n_imageresult = download_url;
    });
  }
}