import {
  NgModule,
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ng-elm',
  template: `
    <div #el></div>
  `,
})
class NgElmComponent implements OnInit {
  @Input() src: any;
  @Input() flags: any;
  @Input() ports: any;
  @ViewChild('el', { static: true }) element: ElementRef;

  ngOnInit() {
    const app = this.src.init({
      flags: this.flags,
      node: this.element.nativeElement,
    });

    if (typeof this.ports !== 'undefined') {
      this.ports(app.ports);
    }
  }
}

@NgModule({
  declarations: [NgElmComponent],
  exports: [NgElmComponent],
})
export class NgElmModule {}
