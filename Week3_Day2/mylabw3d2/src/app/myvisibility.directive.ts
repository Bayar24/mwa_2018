import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input('value') visible: boolean;
  constructor(private element: ElementRef) { 
    
  }
  ngOnInit() {
    this.element.nativeElement.visible = false;
  }
}
