import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  public bas_de_page={
    logo:'assets/images/logo.png',
    lorem:'MAKARIMAL AKHLAQ SOFT'
  }
  menus = [
    { title: 'Envoi', url: 'transactions/envoi', icon: 'send' },
    { title: 'Retrait', url: 'transactions/retrait', icon: 'trending-down' },
  ]
  constructor(
    private router: Router, 
    private transerv:TransactionsService) { }

  ngOnInit() {
  }

}
