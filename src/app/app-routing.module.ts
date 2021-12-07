import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventsAppComponent } from './events-app.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventActivatorGuard } from './_guard/event-activator.guard';
import { PreventUnsavedChangesGuard } from './_guard/prevent-unsaved-changes.guard';
import { EventListResolver } from './_resolver/event-list.resolver';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [PreventUnsavedChangesGuard] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventActivatorGuard]},
  { path: 'error', component: ErrorComponent },   
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module')
                                      .then(m => m.UserModule)}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }