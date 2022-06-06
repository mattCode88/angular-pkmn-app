import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  types: any[] | undefined;

  constructor(private pokemonService: PokemonService) {

    pokemonService.getAllTypes().subscribe((res: any) => this.types = res.results);

  }

  ngOnInit(): void {
  }

}
