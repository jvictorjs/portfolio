import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { NavService } from '../../../components/template/nav/nav.service';
import { EMPTY, Observable } from 'rxjs';
import * as moment from 'moment'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { PassCodeDialog } from '../pass-code-dialog.component';

@Component({
  selector: 'sending-telegram-messages',
  templateUrl: './sending-telegram-messages.component.html',
  styleUrls: ['./sending-telegram-messages.component.css']
})
export class SendingTelegramMessagesComponent implements OnInit {

  baseUrl = 'https://script.google.com/macros/s/AKfycbyktSv0DMZXzRmvjX3HPgsepI7tDPuNc2l1e5nF4wkn-fA9paIE/exec' // PRODUÇÃO

  interval;
  eventClock = { date: new Date(), minute: 0, second: 0 };


  counterTimerSeconds = 0;
  hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53', '54', '55', '56', '57', '58', '59'];

  selectedHours = '22';
  selectedMinutes = '30';
  bolSendNow = false;

  constructor(private navService: NavService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    public dialog: MatDialog) {
    navService.navData = {
      title: 'Sending Messages',
      icon: 'send',
      routeUrl: 'sending-telegram-messages'
    }
  }

  ngOnInit(): void {

  }



  timeFormat(time, format = "mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  convertSecondsToClock(seconds: number) {
    let hh = '' + Math.floor(seconds / 3600);
    let mm = '' + Math.floor((seconds % 3600) / 60);
    let ss = '' + Math.floor(seconds % 60);
    if (hh.length < 2) hh = '0' + hh
    if (mm.length < 2) mm = '0' + mm
    if (ss.length < 2) ss = '0' + ss
    return hh + ":" + mm + ":" + ss;
  }


  showTimerSelectionDiv() {
    //document.getElementById('timer-selection-div').style.display = 'inline'; // none OR inline
    document.getElementById('stop-button').style.display = 'none'; // none OR inline
    document.getElementById('start-button').style.display = 'inline'; // none OR inline
  }

  hideTimerSelectionDiv() {
    // document.getElementById('timer-selection-div').style.display = 'none'; // none OR inline
    document.getElementById('stop-button').style.display = 'inline'; // none OR inline
    document.getElementById('start-button').style.display = 'none'; // none OR inline
  }

  showPlayerPlayButtonAndHidePause() {
    document.getElementById('play-sound-button').style.display = 'inline'; // none OR inline
    document.getElementById('pause-sound-button').style.display = 'none'; // none OR inline
  }

  hidePlayerPlayButtonAndShowPause() {
    document.getElementById('play-sound-button').style.display = 'none'; // none OR inline
    document.getElementById('pause-sound-button').style.display = 'inline'; // none OR inline
  }



  showSnackBarMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['msg-default']
    });
  }


  // STACKOVERFLOW https://medium.com/aprendajs/angular-6-com-uma-fun%C3%A7%C3%A3o-para-delay-192b4562f2b4
  // nossa função delay com suporte a promisse.
  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => { resolve(true); }, ms);
    });
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('⚠ An error occurred.', true)
    return EMPTY
  }

  setNewTriggerTime() {
    this.showSnackBarMessage(`Sending your message...`);
    this.setGoogleAppsNewTrigger().subscribe(response => {
      console.log(response);
      this.showSnackBarMessage(`Message sent ✅`);
    });
  }

  setGoogleAppsNewTrigger(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl
      + '?send_message=' + encodeURIComponent('New message from portfolio site telegram message demo:'
        + '\n<b>message</b> = ' + this.message
        + '\n'))
  }


  setTimer(event) {
    // this.counterTimerSeconds = this.getTotalTimerSelectionInSeconds();
    // console.log(event)
    console.log(`${this.selectedHours}:${this.selectedMinutes}`)
    return this.counterTimerSeconds;
  }

  pass_code = '123456'
  message = ''

  openPassCodeDialog(): void {
    if (this.message.length === 0) {
      this.showSnackBarMessage(`Message field cannot be empty.`);
    } else {
      const dialogRef = this.dialog.open(PassCodeDialog, {
        width: '333px',
        data: { pass_code: '', message: this.message, title: 'Insert Pass Code to schedule this message' }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (this.pass_code === result) {
          this.setNewTriggerTime()
        } else {
          this.showSnackBarMessage('Wrong pass code.')
        }
      });
    }
  }

  switchBolSendNow(): void {
    //  [(ngModel)]="bolLoopMode" parameter automatically switches the bolLoopMode value
    console.log(`bolSendNow switched to = ${this.bolSendNow}`)
  }
}
