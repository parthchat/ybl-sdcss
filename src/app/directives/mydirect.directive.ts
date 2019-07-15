import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autsfocus]'
})
export class MydirectDirective {

  @Input() public appAutoFocus: boolean;

  public constructor(private el: ElementRef) {

  }

  public ngAfterContentInit() {

      setTimeout(() => {

          this.el.nativeElement.focus();

      }, 100);

  }

}
