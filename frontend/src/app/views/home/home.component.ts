import { HeaderService } from './../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quote: any = { quote: '', author: '' };
  randomQuoteURL = "https://script.google.com/macros/s/AKfycby9ZWcPcTWaTtvyCK8tv4pJXfe0-VZUo0vacJXF9JGx2xid8Xr2eEOy/exec?getQuotes=random"

  constructor(private headerService: HeaderService, private http: HttpClient) {
    headerService.headerData = {
      title: 'Home',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    console.log('getRandomQuote()... ')
    this.quote = this.getRandomQuote().subscribe(quote => {
      this.quote = quote
    })
  }

  getRandomQuote(): Observable<Object> {
    return this.http.get<Object>(this.randomQuoteURL)
  }

  getNewRandomQuote(): void {
    console.log('getRandomQuote()... ')
    this.quote = this.getRandomQuote().subscribe(quote => {
      this.quote = quote
    })
  }

}
