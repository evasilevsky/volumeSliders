import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {
  width: number;
  height: number;
  el: HTMLFrameElement;
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
    this.el.width = this.width;
    this.el.height = this.height;
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

  onload(ev: Event) {
    this.el = <HTMLFrameElement>ev.srcElement;
    console.log(this.el.clientWidth + ", " + this.el.clientHeight);
    this.el.width = this.el.clientWidth;
    this.el.height =  this.el.clientHeight;
  }


  // onYouTubeIframeAPIReady() {
  //   var player;
  //   player = new YT.Player('player', {
  //     width: 1280,
  //     height: 720,
  //     videoId: 'M7lc1UVf-VE',
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
  //       'onStateChange': onPlayerStateChange,
  //       'onError': onPlayerError
  //     }
  //   });
  // }

  onPlayerReady(event) {
    event.target.setVolume(100);
    event.target.playVideo();
  }
}
