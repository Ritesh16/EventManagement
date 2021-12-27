import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
        .subscribe(res => {
          if(!res) {
            this.loginInvalid = true;
          } else{
            this.router.navigateByUrl('/events');
          }
        });  
  }

  cancel(){
    this.router.navigateByUrl('/events');
  }

}
