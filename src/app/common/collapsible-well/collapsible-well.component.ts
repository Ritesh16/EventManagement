import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {
  visible = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.visible = !this.visible;
  }
}
