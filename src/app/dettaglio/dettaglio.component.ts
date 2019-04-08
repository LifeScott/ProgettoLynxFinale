import { Component, OnInit } from '@angular/core';
import { AnimeItem } from '../model/anime';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../Service/list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.sass']
})
export class DettaglioComponent implements OnInit {
   anime : AnimeItem;
  constructor(private router : ActivatedRoute ,private  listService : ListService , private location : Location) { }

  ngOnInit() {
    this.getAnime();
  }

  getAnime() {
    const id = + (this.router.snapshot.paramMap.get('id'));

    this.anime = this.listService.getAnimeById(id);

  }

  goBack(){
    this.location.back();
  }
}
