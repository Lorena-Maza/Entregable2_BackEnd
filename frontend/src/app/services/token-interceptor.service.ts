
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import {AuthService} from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req, next) {
    console.log(req)
    if (req.url!= "http://localhost:8000/adminapp/registro" && req.url!= "http://localhost:8000/adminapp/login"){
      let tokenizeReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
      return next.handle(tokenizeReq);
    } return next.handle(req);   
  }
}