import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-elm',
  template: ``
})
export class NgElmComponent implements OnInit {
  @Input() src: any;

  constructor(public element: ElementRef) {}

  ngOnInit() {
    this.src.embed(this.element.nativeElement);
  }
}
