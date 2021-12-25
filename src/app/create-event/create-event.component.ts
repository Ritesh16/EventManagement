import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  newEvent;
  constructor(private router:Router, private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigateByUrl('/events');
  
    });
  }

  cancel(){
    this.isDirty = false;
    this.router.navigateByUrl('/events');
  }

}
