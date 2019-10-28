import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public bas_de_page={
    logo:'assets/images/logo.png',
    lorem:'MAKARIMAL AKHLAQ SOFT'
  }
  menus = [
    { title: 'Detail Envoi', url: 'detail/detailenvoi', icon: 'send' },
    { title: 'DEtail Retrait', url: 'detail/detailretrait', icon: 'trending-down' },
    { title: 'Com Envoi', url: 'detail/comenvoi', icon: 'trending-down' },
    { title: 'Com Retrait', url: 'detail/comretrait', icon: 'trending-down' },
   
  ]
  constructor() { }

  ngOnInit() {
  }

}
