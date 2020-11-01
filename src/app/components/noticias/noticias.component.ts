import { Article } from './../../../Inteface/Interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
@Input() Noticias: Article[] = [];
@Input() enFavorito = false;

  constructor() { }

  ngOnInit() {}

}
