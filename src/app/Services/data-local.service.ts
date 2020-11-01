import { Article } from './../../Inteface/Interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage) { 
    this.cargarFavorito()

  }

  guardarNoticias( noticia:Article ){

    const existe = this.noticias.find(noti => noti.title === noticia.title);

    if (!existe) {
      this.noticias.unshift(noticia);
    this.storage.set('favorite', this.noticias);
    }
  }

   async cargarFavorito(){

    const favorites = await this.storage.get('favorite');
    
    if (favorites){
      this.noticias = favorites;
    }
  
  }
}
