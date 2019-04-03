import { Component } from '@angular/core';
import { LoginService } from './Service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProgettoLynxFinale';
  menu: boolean;
  constructor(private loginservice : LoginService){
   this.loginservice.loginsEvent$.subscribe(() =>{
     this.menu = this.loginservice.checkLogin();
   });
    

  }


  logout(){
    this.loginservice.doLogout();
  }
}
