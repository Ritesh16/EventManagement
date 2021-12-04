import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events :any[]; 
  constructor(private eventService: EventService,  private toastrService: ToastrService){
    this.events = [];
   }

   ngOnInit() {
    this.events = this.eventService.getEvents();
   }

   handleThumbNailClick(eventName:string) {
     this.toastrService.success(eventName);
   }
}
