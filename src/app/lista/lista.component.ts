import { Component, OnInit } from '@angular/core';
import { ListService } from '../Service/list.service';
import { AnimeItem } from '../model/anime';
import { generateExpandoInstructionBlock } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {
  lista: AnimeItem[];
  genere: number;
  filtered: AnimeItem[];
  
  constructor(private service: ListService) { }

  ngOnInit() {
    this.retrieveList();
    this.filter();
  }
  filter() {
    this.filterLista();

  }
  retrieveList() {
    this.lista = this.service.getLista();
  }
  filterLista() {
    this.filtered = this.lista.filter(item => {
      return !this.genere || item.id === Number(this.genere);
    })
  }
  isFavorite(anime : AnimeItem){
    anime.favorite = ! anime.favorite;
  }

  filterByName(searchedstring : string){
    this.filtered = this.lista.filter(item =>{
      return !searchedstring || searchedstring === '' || item.getTitolo().toLowerCase().indexOf(searchedstring.toLowerCase()) !== -1;
    })
  }
}
