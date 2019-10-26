import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public infos={
  logo:'assets/images/transfert.jpg',
  logo1:'assets/images/logo.png',
  lorem:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, accusantium ipsam soluta quaerat voluptates explicabo optio debitis placeat. Laboriosam architecto magni perspiciatis eos nulla omnis necessitatibus cupiditate hic magnam deleniti.',
  lorem1:'MAKARIMAL AKHLAQ SOFT'
}
  constructor() {}
}
