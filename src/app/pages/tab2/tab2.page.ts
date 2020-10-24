import { Article } from './../../../Inteface/Interfaces';
import { NewsServicesService } from './../../Services/news-services.service';
import { IonSegment } from '@ionic/angular';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild( IonSegment ) Segment:IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  category:any = [];
  Noticias: Article[] = [];

  constructor(private NewsServices: NewsServicesService) {}

  
  ngOnInit(): void {
    this.category = this.categorias[2];

    this.cargarNoticias(this.categorias[2])
    
  }
  //Funcion que esta pentiente del cambio de Segment
  segmentChanged(ev: any) {
    this.Noticias = [];
    // console.log(ev.detail.value);
    this.cargarNoticias(ev.detail.value);
  }
  //Funcion que esta pentiente del cambio de Segment
  
  //Funcion que cargar las noticias
  cargarNoticias(categoria: string){
    this.NewsServices.getNewsforCategory(categoria).subscribe(resp =>{
      console.log(resp);
      console.log(categoria)
      this.Noticias.push(...resp.articles);
    })
  }
  //Funcion que cargar las noticias

  

 

}
