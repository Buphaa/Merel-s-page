import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  email = '';
  contrasena = '';
  mensaje = '';
  usuario: any = null;

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('/api/auth/login', {
      email: this.email,
      contrasena: this.contrasena
    }, { withCredentials: true }).subscribe({
      next: () => {
        this.mensaje = 'Login exitoso';
        this.getUsuario();
      },
      error: (err: any) => {
        this.mensaje = 'Login fallido';
        console.error(err);
      }
    });
  }

  getUsuario() {
    this.http.get('/api/auth/me', { withCredentials: true }).subscribe({
      next: (data: any) => this.usuario = data,
      error: () => this.mensaje = 'No autenticado'
    });
  }

  logout() {
    this.http.get('/api/auth/logout', { withCredentials: true }).subscribe(() => {
      this.usuario = null;
      this.mensaje = 'Sesión cerrada';
    });
  }
}
