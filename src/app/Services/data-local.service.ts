import { Article } from './../../Inteface/Interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage,
              private Toast: ToastController) { 
    this.cargarFavorito()
  }
  async presentToast(message: string) {
    const toast = await this.Toast.create({
      message,
      position: 'top',
      duration: 1500
    });
    toast.present();
  }

  guardarNoticias( noticia:Article ){

    const existe = this.noticias.find(noti => noti.title === noticia.title);

    if (!existe) {
      this.noticias.unshift(noticia);
    this.storage.set('favorite', this.noticias);
    }
    this.presentToast('Agregado a Favorito')
  }

   async cargarFavorito(){

    const favorites = await this.storage.get('favorite');
    
    if (favorites){
      this.noticias = favorites;
    }
  }

  borrarNoticias(noticia: Article){
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
    this.storage.set('favorite', this.noticias);
    this.presentToast('Borrado de  Favorito')
  }
}
