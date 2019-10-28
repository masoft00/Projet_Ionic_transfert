import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TransactionsPage } from './transactions.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionsPage,
    children: [
      { path: 'envoi', loadChildren: '../envoi/envoi.module#EnvoiPageModule' },
      { path: 'retrait', loadChildren: '../retrait/retrait.module#RetraitPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransactionsPage]
})
export class TransactionsPageModule { }
