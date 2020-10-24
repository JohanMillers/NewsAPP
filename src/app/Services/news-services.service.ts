import { NewsReponses, Article } from './../../Inteface/Interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {
  apiKey='e28b5afd2ce743eb854240fa9be5e090';

  constructor(private http: HttpClient) { }

// perticion a la api para noticias TopHeadlines
  getTopHeadlines() {
   return this.http.get<NewsReponses>(`https://newsapi.org/v2/top-headlines?country=mx&apiKey=${this.apiKey}`);
  }
  // perticion a la api para noticias TopHeadlines

  getNewsforCategory(categoria:string){
    return this.http.get<NewsReponses>(`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${this.apiKey}`);
  }
}
