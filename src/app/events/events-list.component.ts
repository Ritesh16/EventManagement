import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events :any[]; 
  constructor(private eventService: EventService,  private toastrService: ToastrService, private route: ActivatedRoute){
   }

   ngOnInit() {
      this.events = this.route.snapshot.data['events'];
   }

  //  handleThumbNailClick(eventName:string) {
  //    this.toastrService.success(eventName);
  //  }
}
