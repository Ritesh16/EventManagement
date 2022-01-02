import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IEvent, ISession } from '../_models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() : Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
    .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent>  {
    return this.http.get<IEvent>('/api/events/' + id)
    .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(event) {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/events', event, options)
        .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  updateEvent(event) {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/events', event, options)
        .pipe(catchError(this.handleError<IEvent>('updateEvent')));
  }


  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
    .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

  // searchSessions(searchTerm: string) {
  //   var term = searchTerm.toLocaleLowerCase();
  //   var results: ISession[] = [];

  //   EVENTS.forEach(event => {
  //     var matchingSessions = event.sessions.filter(session =>
  //       session.name.toLocaleLowerCase().indexOf(term) > -1);
  //       matchingSessions = matchingSessions.map((session:any) => {
  //         session.eventId = event.id;
  //         return session;
  //       });

  //       results = results.concat(matchingSessions);
  //   });

  //   var emitter = new EventEmitter(true);
  //   setTimeout(() => {
  //     emitter.emit(results);
  //   }, 100);

  //   return emitter;
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any) : Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}