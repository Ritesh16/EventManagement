import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ISession } from '../_models/event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
 @Output() saveNewSession = new EventEmitter();
 @Output() cancelSession = new EventEmitter();

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', 
          [Validators.required, 
           Validators.maxLength(400),
           this.restrictedWords(['foo', 'bar'])
          ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  cancel() {
    this.cancelSession.emit();
  }

  saveSession(formValues) {
    
    const session: ISession = {
      name: formValues.name,
      duration: formValues.duration,
      level: formValues.level,
      id: undefined,
      presenter: formValues.presenter,
      abstract: formValues.abstarct,
      voters:[],
      eventId:0
    }

    this.saveNewSession.emit(session);
  }

  private restrictedWords(words){
    return (control: FormControl) : {[key: string]: any} => {
      if(!words) return null;

      const invalidWords = words.map(w => control.value.includes(w) ? w :null)
                              .filter(w => w!= null);

      return control.value.includes('foo')
        ? {'restrictedWords' : invalidWords.join(', ')}
        : null;
    }

  }
}
