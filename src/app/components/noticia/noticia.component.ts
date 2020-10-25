import { Article, Source } from './../../../Inteface/Interfaces';
import { Component, Input, OnInit } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia:any = {};
  @Input() indice: number;
  constructor(private iab: InAppBrowser,
              private socialSharing: SocialSharing,
              public actionSheetCtr: ActionSheetController) { }

  ngOnInit() {}

  abrirNews(){
    // console.log('Noticia', this.noticia.url)
    const browser = this.iab.create(this.noticia.url, '_system');

  }

  async lanzarMenu(){
    const actionSheet = await this.actionSheetCtr.create({
    
      buttons: [{
        text: 'Compartir',
        icon: 'share-social',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      }, 
      {
        text: 'Favorito',
        icon: 'star',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

  }

}
