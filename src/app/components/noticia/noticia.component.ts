import { Article } from './../../../Inteface/Interfaces';
import { Component, Input, OnInit } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia:any = {};
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  abrirNews(){
    // console.log('Noticia', this.noticia.url)
    const browser = this.iab.create(this.noticia.url, '_system');

  }

}
