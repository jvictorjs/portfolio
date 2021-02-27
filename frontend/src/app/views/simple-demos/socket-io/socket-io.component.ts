import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../components/template/nav/nav.service';

@Component({
  selector: 'app-socket-io',
  templateUrl: './socket-io.component.html',
  styleUrls: ['./socket-io.component.css']
})
export class SocketIoComponent implements OnInit {
  showOnlineUsers = false;

  constructor(private navService: NavService,) {
    navService.navData = {
      title: 'SocketIO',
      icon: 'import_export',
      routeUrl: 'socket-io'
    }
  }

  ngOnInit(): void {
  }

  switchShowOnlineUsers() {
    if (this.showOnlineUsers) {
      document.getElementById('onlineUsersSocketIODemoView').style.color = '#fff';
    } else {
      document.getElementById('onlineUsersSocketIODemoView').style.color = 'black';
    }
    this.showOnlineUsers = this.navService.showOnlineUsers;
    this.showOnlineUsers = !this.showOnlineUsers
    this.navService.switchShowOnlineUsers();
  }

  // STACKOVERFLOW https://stackoverflow.com/questions/53730983/angular-updating-component-value-when-service-value-changes
  get numberOfOnlineUsers(): number {
    return this.navService.numberOfOnlineUsers;
  }
}
