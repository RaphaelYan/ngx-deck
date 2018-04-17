import { Component, AfterViewInit, Input } from '@angular/core';

declare var Modernizr: any;
declare var Stack: any;
declare var classie: any;

@Component({
  selector: 'deck-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements AfterViewInit {
  @Input() public items = [];
  private slamet: any;

  public accept(callback) {
    this.slamet.accept(callback);
  }

  public reject() {
    this.slamet.reject();
  }

  public ngAfterViewInit() {
    this.init();
  }

  private init() {
    this.slamet = new Stack(document.getElementById('stack_slamet'), {
      infinite: false,
      onEndStack: (instance) => {
        setTimeout(() => {
          console.warn('onEndStack');
        }, 300);
      }
    });
  }
}
