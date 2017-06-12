import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    YoutubeVideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
