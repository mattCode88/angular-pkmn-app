import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SearchComponent } from './search/search.component';
import { TypeComponent } from './type/type.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: 'search', component: SearchComponent, canActivate: [LoggedInGuard] },
  { path: 'types', component: TypesComponent, canActivate: [LoggedInGuard] },
  { path: 'types/:type', component: TypeComponent, canActivate: [LoggedInGuard] },
  { path: 'pokemon/:name', component: PokemonComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
