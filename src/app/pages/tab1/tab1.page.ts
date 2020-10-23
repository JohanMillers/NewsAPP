import { NewsServicesService } from './../../Services/news-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private NewsServicesService: NewsServicesService) {}

  ngOnInit() {
    this.NewsServicesService.getTopHeadlines().subscribe(news => {
      console.log(news);
    })
  }

  



}
