import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
nome : string;


  constructor() { }

  ngOnInit() {
this.retrieveData();

  }
retrieveData(){
  this.nome = sessionStorage.getItem('user');


}
}
