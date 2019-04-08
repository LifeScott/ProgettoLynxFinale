import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  //"**/*.spec.ts",
  //"**/*.d.ts",

  name: string;
  menuList: MenuItem[] = [
    { id: 1, descrizione: 'Homepage', selezionato: false, linkPath: 'homepage' },
    { id: 2, descrizione: 'Lista', selezionato: false, linkPath: 'lista' },
    { id: 3, descrizione: 'Cards', selezionato: false, linkPath: 'cards' },
    { id: 4, descrizione: 'Feedback', selezionato: false, linkPath: 'feedback' },
    { id: 5, descrizione: 'Profilo', selezionato: false, linkPath: 'profilo' }
    
  ];
  menulogout : boolean ;
  //fare subscribe e ngIf
  @Output('showSection')
  showSectionEvent: EventEmitter<number> = new EventEmitter();
  
  constructor(private service  : LoginService) {
    this.menulogout = this.service.checkLogin();
    this.service.loginsEvent$.subscribe(() =>{
      this.menulogout = this.service.checkLogin();
    });
   }

  ngOnInit() {
    
  }

 logout(){
   this.service.doLogout();
 }
  
  showSection(id: number) {
    this.showSectionEvent.emit(id);
  
  }

  

}
