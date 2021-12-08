import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../_models/event.model';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events :IEvent[]; 
  constructor(private eventService: EventService,  private toastrService: ToastrService, private route: ActivatedRoute){
   }

   ngOnInit() {
      this.events = this.route.snapshot.data['events'];
   }

  //  handleThumbNailClick(eventName:string) {
  //    this.toastrService.success(eventName);
  //  }
}
