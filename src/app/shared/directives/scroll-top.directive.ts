import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'a, [appScrollTop]'
})
export class ScrollTopDirective {

  @HostListener('click') onClick() {
    window.scrollTo(0, 0);
  }
}
