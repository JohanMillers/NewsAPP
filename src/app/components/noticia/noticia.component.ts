import { Article } from './../../../Inteface/Interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia:any = {};
  constructor() { }

  ngOnInit() {}

}
