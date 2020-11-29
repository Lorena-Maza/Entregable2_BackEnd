import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:8000/adminapp';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user) {
    return this.http.post<any>(this.URL + '/registro', user);
  }

  signInUser(user) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/persona']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
