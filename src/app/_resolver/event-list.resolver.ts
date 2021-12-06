import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map } from 'rxjs';
import { Observable, of } from 'rxjs';
import { EventService } from '../_services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<any> {
  constructor(private eventService:EventService){
  }

  resolve() {
    return this.eventService.getEvents().pipe(map(events=>events));
  }
}
