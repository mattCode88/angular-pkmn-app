import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  query: string;
  pokemons: any[] | undefined;
  types: any[] | undefined;

  constructor(private http: HttpClient) {
    this.query = '';
    this.types = [];
    this.pokemons = [];
  }

  getFilteredPokemon(name: string) {
    return this.pokemons?.filter((pokemon: any) => pokemon.name.includes(name.toLowerCase()));
  }

  getPokemon(name: string): any {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  findAll() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`).subscribe((res: any) => this.pokemons = res.results);
  }

  getAllTypes(): any {
    return this.http.get(`https://pokeapi.co/api/v2/type?limit=20`);
  }

  getType(type: string): any {
    return this.http.get(`https://pokeapi.co/api/v2/type/${type}`);
  }

}
