import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnvoiService } from '../services/envoi.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.page.html',
  styleUrls: ['./envoi.page.scss'],
})
export class EnvoiPage implements OnInit {

  constructor(private envoie: EnvoiService, private router: Router,private alertController:AlertController) { }

  ngOnInit() {
  }
  OnSubmit(f) {
    this.envoie.postFile(
      f.value['nomCompleEnv'],
      f.value['telenv'],
      f.value['numpieceenv'],
      f.value['typepieceenv'],
      f.value['nomCompleBen'],
      f.value['teleben'],
      f.value['montant'],
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
    return (localStorage.getItem('username'));
  }

 async presentAlertConfirm(i) {
  let choice;
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            
          }
        }
      ]
    });

    return choice;

  }

}
