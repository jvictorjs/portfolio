import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { NavService } from './../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';
import { faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faFutbol } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faYoutube = faYoutube
  faLinkedin = faLinkedin
  faGithub = faGithub
  faEnvelope = faEnvelope
  faFileAlt = faFileAlt

  baseUrl = 'https://script.google.com/macros/s/AKfycbyktSv0DMZXzRmvjX3HPgsepI7tDPuNc2l1e5nF4wkn-fA9paIE/exec' // PRODUÇÃO
  name = ''
  contact = ''
  message = ''

  constructor(private navService: NavService,
    private snackBar: MatSnackBar, private http: HttpClient) {
    navService.navData = {
      title: 'Contact',
      icon: 'mail_outline',
      routeUrl: 'contact'
    }
  }


  ngOnInit(): void {
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
      duration: 10000,
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

  sendTelegramMessage() {
    this.showSnackBarMessage(`Sending your message...`);
    this.setGoogleAppsNewTrigger().subscribe(response => {
      console.log(response);
      this.showSnackBarMessage(`Message sent ✅`);
      this.name = ''
      this.contact = ''
      this.message = ''
    });
  }

  setGoogleAppsNewTrigger(): Observable<any[]> {
    /*
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET , PUT , POST , DELETE",
        "Access-Control-Allow-Headers": "Content-Type, x-requested-with"
      })
    };

    const body = { title: 'Angular POST Request Example' };
    return this.http.post<any>(this.baseUrl, body, httpOptions);
    */
    // STACKOVERFLOW https://stackoverflow.com/questions/55420376/encode-string-for-url-angular
    return this.http.get<any[]>(this.baseUrl
      + '?schedule_message=' + encodeURIComponent('New contact message from portfolio site.'
        + '\n<b>name</b>  = ' + this.name
        + '\n<b>contact</b> = ' + this.contact
        + '\n<b>message</b> = ' + this.message
        + '\n'))
  }
}

