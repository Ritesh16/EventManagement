import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  };

  iconColor: string;
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.vote.emit({});
  }

}
