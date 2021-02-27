import { NavData } from './nav-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class NavService {
  socket: any;
  numberOfOnlineUsers = 0;
  numberOfOnlineUsersTESTE: number;
  showOnlineUsers = false;

  private _navData = new BehaviorSubject<NavData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() {
    this.socket = io()
    this.socket.on('numberOfOnlineUsers', (numberOfOnlineUsers) => {
      this.numberOfOnlineUsers = numberOfOnlineUsers;
    });
    this.numberOfOnlineUsersTESTE = 555;
  }

  get navData(): NavData {
    return this._navData.value
  }

  set navData(navData: NavData) {
    this._navData.next(navData)
  }

  switchShowOnlineUsers(): void {
    this.numberOfOnlineUsersTESTE++;
    if (this.showOnlineUsers) {
      document.getElementById('onlineUsers').style.color = '#3f51b5';
    } else {
      document.getElementById('onlineUsers').style.color = 'black';
    }
    this.showOnlineUsers = !this.showOnlineUsers;
    console.log(`showOnlineUsers switched to ${this.showOnlineUsers}`)
  }
}
