import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styles: [
    `
      .container { padding-left:20px; padding-right: 20px }
      .event-image { height: 100px; }
     `  ]
})
export class EventsDetailsComponent implements OnInit {
 event: any;

  constructor(private eventService : EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
