import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTouchAnimation]'
})
export class TouchAnimationDirective {
  @Input() private timer: number = 300;

  private animationInProgress: boolean = false;

  @HostListener('click', ['$event'])
  private onClick(event) {
    if (this.animationInProgress) {
      return;
    }

    this.animationInProgress = true;
    event.target.classList.add('active');
    setTimeout(() => {
      event.target.classList.remove('active');
      this.animationInProgress = false;
    }, this.timer);
  }
}
