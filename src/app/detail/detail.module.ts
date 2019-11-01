import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage,
    children: [
      { path: 'detailenvoi', loadChildren: '../detailenvoi/detailenvoi.module#DetailenvoiPageModule' },
  { path: 'detailretrait', loadChildren: '../detailretrait/detailretrait.module#DetailretraitPageModule' },
  { path: 'comenvoi', loadChildren: '../comenvoi/comenvoi.module#ComenvoiPageModule' },
  { path: 'comretrait', loadChildren: '../comretrait/comretrait.module#ComretraitPageModule' },
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
  declarations: [DetailPage]
})
export class DetailPageModule { }
