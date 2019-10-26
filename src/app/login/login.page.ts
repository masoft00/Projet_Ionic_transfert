import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public donnees = {
  logo: "assets/images/userlogo.png",
}
  constructor(private LogService:LoginService, private router:Router) { }

  ngOnInit() {
  }
  //Cette methode me permet de se connecter vers mon API
  onLogin(data) {
    this.LogService.login(data)
      .subscribe(resp => {
        // tslint:disable-next-line: typedef-whitespace
        const jwt = resp.body.token;
        console.log(jwt);
        this.LogService.saveJwtToken(jwt);
        //ce_bout_de_code_me_permet_de_faire_une_redirection
        this.router.navigateByUrl('/menu/home');
      }, err => {
      });
  }

    getLogin() {
  return(localStorage.getItem('username'));
  }

  // constructor(private logService: LoginService, private router: Router) { }
  //  public donnees = {
  //   logo: "assets/images/userlogo.png",
  // }

  //  ngOnInit() {
  // }

  // onLogin(user) {
  //   let res = this.logService.login(user.username,user.password);
  // if (res == true) {
  //    this.router.navigateByUrl('/menu/home');
  //   }
  // }
  // constructor(private LogService:LoginService, private router:Router) { }

  // ngOnInit() {
  // }
  // //Cette methode me permet de se connecter vers mon API
  // onLogin(data) {
  //   this.LogService.login(data)
  //     .subscribe(resp => {
  //       // tslint:disable-next-line: typedef-whitespace
  //       const jwt = resp.body.token;
  //       console.log(jwt);
  //       this.LogService.saveJwtToken(jwt);

  //       //ce_bout_de_code_me_permet_de_faire_une_redirection
  //       this.router.navigateByUrl('/menu');
  //     }, err => {
  //     });
  // }

  //   getLogin() {
  // return(localStorage.getItem('username'));
  // }
}
