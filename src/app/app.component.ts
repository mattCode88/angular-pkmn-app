import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pokemon-app';

  constructor(private pokemonService: PokemonService, public authService: AuthService, private router: Router) {
  }

  /*ngOnInit è un metodo che viene chiamato in fase di inizializzazione del componente. In questo caso al caricamento dell' app
  chiamiamo il metodo findAll() per definire l' array con tutti i pokemon e renderlo disponibile a tutta l' app. */
  ngOnInit(): void {
    this.pokemonService.findAll();
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
