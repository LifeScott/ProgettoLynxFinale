import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  name: string;
  menuList: MenuItem[] = [
    { id: 1, descrizione: 'Homepage', selezionato: false, linkPath: 'homepage' },
    { id: 2, descrizione: 'Lista', selezionato: false, linkPath: 'lista' },
    { id: 3, descrizione: 'Cards', selezionato: false, linkPath: 'cards' },
    { id: 4, descrizione: 'Feedback', selezionato: false, linkPath: 'feedback' },
    { id: 5, descrizione: 'Profilo', selezionato: false, linkPath: 'profilo' },
    { id: 6, descrizione: 'Esci', selezionato: false, linkPath: 'esci' }
  ];

  @Output('showSection')
  showSectionEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  
  showSection(id: number) {
    this.showSectionEvent.emit(id);
  }

}
