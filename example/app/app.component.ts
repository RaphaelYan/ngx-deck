import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';

declare var Modernizr: any;
declare var Stack: any;
declare var classie: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../src/touch-animation.directive.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  public items: any[] = [
    'assets/img/1.jpg',
    'assets/img/2.gif',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
    'assets/img/5.jpg',
  ];
  public counter: number = 0;
  private slamet: any;

  public accept(event) {
    this.slamet.accept(() => {
      this.counter += 1;
    });
  }

  public reject(event) {
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
