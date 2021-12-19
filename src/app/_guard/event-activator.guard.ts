import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../_services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventActivatorGuard implements CanActivate {

constructor(private eventService: EventService, private router: Router){

}

  canActivate(
    route: ActivatedRouteSnapshot) {
   
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if(!eventExists) {
      this.router.navigateByUrl('/error');
    }

    return eventExists;
  }
  
}
