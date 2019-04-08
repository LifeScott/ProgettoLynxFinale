import { Injectable } from '@angular/core';
import { AnimeItem } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lista : Array<AnimeItem> = [
    new AnimeItem("Fairy Tail",1,false,"assets/ff.jpg"),
    new AnimeItem("One Piece",2,false,"assets/download.jpg"),
    new AnimeItem("Bleach",3,false,"assets/bleach.jpg")
  ]


  constructor() { }


  getLista(){
    return this.lista;
  }
  getAnimeById(id : number) {
    return this.lista.find(item =>{
      return item.id === id;
    });
  }
}
