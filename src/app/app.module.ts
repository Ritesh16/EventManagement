import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './_pipe/duration.pipe';
import { JQ_TOKEN } from './_services/jquery.service';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { EventService } from './_services/event.service';
import { ModalTriggerDirective } from './_directives/modal-trigger.directive';
import { UpvoteComponent } from './upvote/upvote.component';
import { LocationValidatorDirective } from './_directives/location-validator.directive';
import { HttpClientModule } from '@angular/common/http';

let JQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavComponent,
    EventsDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    ConfirmDialogComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [
 EventService,
 {provide: JQ_TOKEN, useValue: JQuery}

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
