import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'events-app',
  templateUrl: 'events-app.component.html' ,
  styles: [
    `
      .nav.navbar-nav {font-size: 15px;}
      #searchForm {margin-right: 100px}
      @media (max-width: 1200px) {#searchForm {display:none}}
    `
  ]
})
export class EventsAppComponent implements OnInit {
  title = 'EventManagement';

  constructor(private authService: AuthService) {
      
  }

  ngOnInit() {
      this.authService.checkAuthenticationStatus();
  }
}
