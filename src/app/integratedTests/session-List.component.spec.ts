import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SessionListComponent } from "../session-list/session-list.component";
import { ISession } from "../_models/event.model";
import { DurationPipe } from "../_pipe/duration.pipe";
import { AuthService } from "../_services/auth.service";
import { VoterService } from "../_services/voter.service";

describe('SessionListComponent', () => {

    let mockAuthService,
        mockVotersService,
        fixture: ComponentFixture<SessionListComponent>, /// wrapper around actual component.
        component: SessionListComponent, 
        element: HTMLElement,
        debugEl: DebugElement;

    
        beforeEach(() => {
            // Test bed actually creates component.
           mockAuthService = { isAuthenticated: () => true, currentUser: {userName: 'Joe'}};
           mockVotersService = { userHasVoted: () => true };

            TestBed.configureTestingModule({
                declarations: [
                    SessionListComponent,
                    DurationPipe
                ],
                providers: [
                    { provide: AuthService, useValue: mockAuthService },
                    { provide: VoterService, useValue: mockVotersService }
                ]
            });

            fixture = TestBed.createComponent(SessionListComponent);
            component = fixture.componentInstance;

            debugEl = fixture.debugElement;
            element = fixture.nativeElement;
        });


    describe('initial display', () => {

        it('should have correct name', () => {
            component.sessions = <ISession[]>[
                { name: 'Session 1', id: 3, presenter: 'Joe', duration: 1, level: 'beginner',
                  abstract: 'abstract', voters: ['john', 'bob'] }
            ];

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;
            component.ngOnChanges();

            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
        });
    });
});