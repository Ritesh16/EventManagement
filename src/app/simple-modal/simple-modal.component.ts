import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JQ_TOKEN } from '../_services/jquery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
@Input() title: string;
@Input() elementId: string;
@ViewChild('modalContainer') containerEl: ElementRef;

  constructor(private router:Router, @Inject(JQ_TOKEN) private $: any ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  }

  closeModal() {
     this.$(this.containerEl.nativeElement).modal('hide');
  }
}
