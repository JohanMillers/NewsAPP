import { Article } from './../../Inteface/Interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article[] = [];

  constructor(private storage: Storage) { 

    this.cargarFavorito();
  }

  guardarNoticias( noticia:Article ){

    const existe = this.noticias.find(noti => noti.title === noticia.title);
    if(!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos',this.noticias);
    }

  }

   async cargarFavorito(){
    
    const favoritos = await this.storage.get('favoritos');

    this.noticias = favoritos;
  }
}
