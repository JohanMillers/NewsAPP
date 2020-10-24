import { NewsReponses, Article } from './../../../Inteface/Interfaces';
import { NewsServicesService } from './../../Services/news-services.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public Noticias: Article[] = [];

  @ViewChild( IonInfiniteScroll ) inifiteScroll: IonInfiniteScroll;

  constructor(private NewsServicesService: NewsServicesService) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  cargarNoticias(event?){
    this.NewsServicesService.getTopHeadlines()
    .subscribe(news => {
      console.log(news);
      //condicion para evaluar si hay mas articulos que mostral
      if (news.articles.length === 0){
        this.inifiteScroll.disabled = true;
        this.inifiteScroll.complete();
        return;
      }
       //condicion para evaluar si hay mas articulos que mostral
      this.Noticias.push(...news.articles);

      if (event) {
        this.inifiteScroll.complete();
      }
    });
  }

  loadData(event){
    console.log(event);
    this.cargarNoticias(event);
  }

  



}
