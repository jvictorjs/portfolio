import { Component, OnInit } from '@angular/core';
import { NavService } from './../../../components/template/nav/nav.service';
import { Observable } from 'rxjs';
import * as moment from 'moment'

@Component({
  selector: 'app-audio-app',
  templateUrl: './audio-app.component.html',
  styleUrls: ['./audio-app.component.css']
})

export class AudioAppComponent implements OnInit {
  intervalId: any;
  eventClock = { date: new Date(), minute: 0, second: 0 };
  audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  files = [
    {
      url: './../../../assets/audio/air_plane_ding_dong_sound_effect.mp3',
      name: 'Air Plane Ding Dong'
    },
    {
      url: './../../../assets/audio/pplay.mp3',
      name: 'Pplay'
    },
    {
      url: './../../../assets/audio/easily.mp3',
      name: 'Easily'
    }
  ];
  currentTime = '00:00:00';
  duration = '00:00:00';
  seek = 0;
  audioMaxLength = 0

  constructor(private navService: NavService) {
    navService.navData = {
      title: 'Audio App',
      icon: 'music_note',
      routeUrl: 'audio-app'
    }
  }

  ngOnInit(): void {

  }

  

  stramObserver(url) {
    return new Observable(observer => {
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        console.log(event);
        this.seek = this.audioObj.currentTime;
        this.audioMaxLength = this.audioObj.duration;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime = this.timeFormat(this.audioObj.currentTime);
      }

      this.addEvent(this.audioObj, this.audioEvents, handler);
      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;

        this.removeEvent(this.audioObj, this.audioEvents, handler)
      }
    });
  }

  addEvent(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler)
    });
  }

  removeEvent(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler)
    });
  }

  setSeekTo(ev) {
    this.audioObj.currentTime = ev.target.value;
  }

  openFile(url) {
    this.stramObserver(url).subscribe(event => {
    })
    console.log(url);
  }

  play() {
    this.audioObj.play();
    console.log('Clicked Play Button');
  }

  pause() {
    this.audioObj.pause();
    console.log('Clicked Pause Button');
  }

  stop() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('Clicked Stop Button');
  }

  setVolume(ev) {
    this.audioObj.volume = ev.target.value;
    console.log(ev.target.value);
  }

  timeFormat(time, format = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  startCountDownTimer(): void {
    setInterval(() => {
      // console.log(this.eventClock.date)
      this.eventClock.date = new Date(this.eventClock.date.getTime() - 1000);
    }, 1000);
  }
}
