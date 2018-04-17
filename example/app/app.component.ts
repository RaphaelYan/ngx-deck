import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../src/touch-animation/touch-animation.directive.scss',
    '../../src/stack/stack.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('stack') stack;
  public items: any[] = [
    'assets/img/1.jpg',
    'assets/img/2.gif',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
    'assets/img/5.jpg',
  ];
  public counter: number = 0;

  public ngAfterViewInit() {
    this.stack.init();
  }

  public accept(event) {
    this.stack.accept(() => {
      this.counter += 1;
    });
  }

  public reject(event) {
    this.stack.reject();
  }
}
