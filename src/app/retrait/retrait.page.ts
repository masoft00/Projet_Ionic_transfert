import { Component, OnInit } from '@angular/core';
import { RetraitService } from '../services/retrait.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {
  constructor(private RetraitService:RetraitService, private router: Router){

  }
  ngOnInit() {
  }
  OnSubmit(f) {
    this.RetraitService.postFile(
      f.value['code'],
      f.value['numpieceben'],
      f.value['typepieceben']
    ).subscribe(
      data => {
        //this.router.navigate(['/ListeComptes']);
      }
    );
  }
 isCaissier() {
    this.isCaissier();
 }
  
    getLogin() {
  return(localStorage.getItem('username'));
  }
}
