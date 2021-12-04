import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsListComponent } from './events/events-list.component';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailsComponent},   
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }