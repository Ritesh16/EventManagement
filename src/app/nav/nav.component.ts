import { Component, OnInit } from '@angular/core';
import { ISession } from '../_models/event.model';
import { AuthService } from '../_services/auth.service';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 searchTerm: string = "";
 foundSessions: ISession[];

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }

  searchSessions(searchTerm) {
     this.eventService.searchSessions(searchTerm).subscribe
      (sessions => {
        this.foundSessions = sessions;
      });
  }

}
