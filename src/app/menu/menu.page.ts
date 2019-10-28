import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menus = [
    { title: 'Accueil', url: '/menu/home', icon: 'home' },
    { title: 'Transactions', url: '/menu/transactions/envoi', icon: 'paper-plane' },
    { title: 'Détail Transactions', url: '/menu/detail', icon: 'list' },
    { title: 'Deconnexion', url: '/logout', icon: 'log-out' },
  ]
  constructor(private router: Router, private logservice: LoginService) { }

  ngOnInit() {
  }
  onMenuAction(m) {
    if(m.url=='/logout'){
      //this.logservice.logout();
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl(m.url);
    }
  }
}
