import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUser(): string | null{
    return localStorage.getItem('username');
  }

  isLogged(): boolean{
    return localStorage.getItem('username') !== null;
  }

  login(username: string, password: string): boolean {
    if (username === 'user' && password === '123') {
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logout(): void{
    localStorage.removeItem('username');
  }
}
