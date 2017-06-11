import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Output() public width: EventEmitter<string> = new EventEmitter();
  @Output() public height: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.addEvent(window, "resize", this.resizeEvent)
  }



  resizeEvent = (event) => {
    this.width.next(event.target.innerWidth);
    this.height.next(event.target.innerHeight);
    console.log(event.target.innerWidth);
    console.log(event.target.innerHeight);
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
