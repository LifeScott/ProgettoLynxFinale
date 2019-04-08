import { Component } from '@angular/core';
import { LoginService } from './Service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProgettoLynxFinale';
  showmenu : boolean ;
  idSectionToShow: number = 1;

  changeSection(id: number) {
    this.idSectionToShow = id;
  }

  constructor(private service : LoginService) { 
    this.showmenu = this.service.checkLogin();
    this.service.loginsEvent$.subscribe(() =>{
      this.showmenu = this.service.checkLogin();
    })
  }
} 


