import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  width: number;
  height: number;
  setWidth (width: number){
    this.width = width;
  }
  setHeight (height: number) {
    this.height = height;
  }
  getVideoVolume(): number {
    return (this.width * this.height) / this.getScreenVolume();
  }

  getScreenWidth() {
    return screen.width;
  }
  getScreenHeight() {
    return screen.height;
  }
  getScreenVolume() {
    return this.getScreenWidth() * this.getScreenHeight();
  }


}
