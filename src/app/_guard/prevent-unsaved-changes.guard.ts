import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEventComponent } from '../create-event/create-event.component';
import { ConfirmService } from '../_services/confirm.service';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {

  constructor(private confirmService: ConfirmService) {

  }


  canDeactivate(
    component: CreateEventComponent): Observable<boolean> | boolean{
    if(component.isDirty) {
      return this.confirmService.confirm();
    }

    return true;
  }
  
}
