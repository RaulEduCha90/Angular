import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;


  constructor(private authService: AuthService, private router: Router) {}



  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']); // Cambia a tu ruta protegida
    } else {
      this.error = true;
    }
  }
    
}
