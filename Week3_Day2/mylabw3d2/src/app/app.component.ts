import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';
  currentColor = "green";
  onColorChange(color: string): void {
    this.currentColor = color;
  }
}
