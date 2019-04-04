import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
 nome : string;

  constructor() { }

  ngOnInit() {
    this.nome = sessionStorage.getItem('user');
  }

  changeText(value:string){
    document.getElementById('pText').innerHTML = value;
  }

}
