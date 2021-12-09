import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISession } from '../_models/event.model';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {
 event: any;
 addMode: boolean;

  constructor(private eventService : EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
     this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(this.event.sessions.map(x=>x.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelSession() {
    this.addMode = false;
  }
}
