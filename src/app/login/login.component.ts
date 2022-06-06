import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {

    if (this.authService.isLogged()) this.router.navigate(['/home']);

  }

  ngOnInit(): void {
  }

  login(user: string, password: string): void {
    this.authService.login(user, password);
    user = '';
    password = '';
    this.router.navigate(['/home']);
  }

}
