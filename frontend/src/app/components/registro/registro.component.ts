import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user = {}
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          // localStorage.setItem('token', res.token);
          alert(res.message);
          // this.router.navigate(['/private']);
        },
        err => console.log(err)          
      )
  }

}
