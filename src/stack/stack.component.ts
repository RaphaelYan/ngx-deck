import { Component, Input } from '@angular/core';

declare var Modernizr: any;
declare var Stack: any;
declare var classie: any;

@Component({
  selector: 'deck-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  @Input() public items = [];
  private slamet: any;

  public accept(callback) {
    this.slamet.accept(callback);
  }

  public reject(callback) {
    this.slamet.reject(callback);
  }

  public init() {
    if (typeof Stack === 'undefined') {
      return console.error('Please include Stack assets/js');
    }
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
