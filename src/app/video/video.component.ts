import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  width: number;
  height: number;
  constructor() { }

  ngOnInit() {
    this.addEvent(window, "resize", this.resizeEvent)
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

  resizeEvent = (event) => {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
  addEvent = (object, type, callback) => {
    if (object == null || typeof (object) == 'undefined') return;
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
      object.attachEvent("on" + type, callback);
    } else {
      object["on" + type] = callback;
    }
  }
}
