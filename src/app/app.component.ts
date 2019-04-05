import { Component } from '@angular/core';
import { LoginService } from './Service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProgettoLynxFinale';

  idSectionToShow: number = 1;

  changeSection(id: number) {
    this.idSectionToShow = id;
  }

  constructor() { }
} 


