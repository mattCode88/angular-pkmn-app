import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: any[] = [];

  constructor() {

    this.results = [
      {name: 'bulbasaur'},
      {name: 'charizard'},
      {name: 'blastoise'},
      {name: 'venusaur'},
      {name: 'mew'},
      {name: 'togepi'}
    ]
   }

  ngOnInit(): void {
  }

}
