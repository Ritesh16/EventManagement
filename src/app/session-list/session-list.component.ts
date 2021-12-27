import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISession } from '../_models/event.model';
import { AuthService } from '../_services/auth.service';
import { VoterService } from '../_services/voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
 @Input() sessions: ISession[];
 @Input() filterBy: string;
 @Input() sortBy: string;
 @Input() eventId: number;

 visibleSessions: ISession[];

  constructor(public authService: AuthService, private voterService: VoterService) { }

  ngOnChanges(): void {
    if(this.sessions) {
      this.filterSessions(this.filterBy);

      this.sortBy == 'name' ? this.visibleSessions.sort(sortByNameAsc) :
              this.visibleSessions.sort(sortByVotesAsc);
    }
  }

  filterSessions(filterBy: string) {
    if(filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else{
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filterBy;
      });
    }
  }

  toggleVote(session: ISession) {
    if(this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId,session, this.authService.currentUser.userName);
    } else { 
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
    }

    if(this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesAsc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }
}

function sortByNameAsc(s1: ISession, s2: ISession){
  if(s1.name > s2.name) return 1;
  else if(s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesAsc(s1: ISession, s2: ISession){
  return s2.voters.length - s1.voters.length;
}
