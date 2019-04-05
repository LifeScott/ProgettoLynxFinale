import { Injectable } from '@angular/core';
import { AnimeItem } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lista : Array<AnimeItem> = [
    new AnimeItem("Fairy Tail",1,false),
    new AnimeItem("One Piece",2,false),
    new AnimeItem("Bleach",3,false)
  ]


  constructor() { }


  getLista(){
    return this.lista;
  }
  getAnimeById(id : number) {
    return this.lista.filter(item =>{
      return item.id === id;
    });
  }
}
