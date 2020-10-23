import { NewsReponses, Article } from './../../Inteface/Interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {

  constructor(private http: HttpClient) { }

// perticion a la api para noticias TopHeadlines
  getTopHeadlines() {
   return this.http.get<NewsReponses>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e28b5afd2ce743eb854240fa9be5e090`);
  }
  // perticion a la api para noticias TopHeadlines


}
