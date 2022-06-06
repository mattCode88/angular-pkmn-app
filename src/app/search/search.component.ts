import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  q: string;
  results: any[] | undefined;

  constructor(private pokemonServices: PokemonService) {

    this.q = this.pokemonServices.query;
    if (this.q !== '') this.submit(this.q);

  }

  submit(query: string): void {
    this.pokemonServices.query = query;
    this.results = this.pokemonServices.getFilteredPokemon(query);
  }

}
