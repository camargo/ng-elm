import { NgModule, Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-elm',
  template: ``
})
class NgElmComponent implements OnInit {
  @Input() src: any;
  @Input() flags: any;
  @Input() ports: any;

  constructor(public element: ElementRef) {}

  ngOnInit() {
    const app = this.src.embed(this.element.nativeElement, this.flags);

    if (typeof this.ports !== 'undefined') {
      this.ports(app.ports);
    }
  }
}

@NgModule({
  declarations: [ NgElmComponent ],
  exports:      [ NgElmComponent ]
})
export class NgElmModule {}
