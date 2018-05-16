import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input('appMyvisibility') visible: boolean;
  private colors = ["Black","Yellow","Red","Blue"];
  constructor(private element: ElementRef) { 
    
  }
  ngOnInit() {
    this.element.nativeElement.style.visibility = this.visible?"visible":"hidden";
    this.element.nativeElement.style.color = this.colors[2];
  }
}
