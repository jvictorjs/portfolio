import { NavService } from './../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quote: any = { quote: 'none', author: 'none' };
  randomQuoteURL = "https://script.google.com/macros/s/AKfycby9ZWcPcTWaTtvyCK8tv4pJXfe0-VZUo0vacJXF9JGx2xid8Xr2eEOy/exec?getQuotes=random"

  constructor(private navService: NavService, private http: HttpClient) {
    navService.navData = {
      title: 'Home',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    console.log('getRandomQuote()... ')
    this.quote = { quote: 'none', author: 'none' };
    this.showLoader();
    this.quote = this.getRandomQuote().subscribe(quote => {
      this.quote = quote
      this.hideLoader();
    })
  }

  hideLoader(): void {
    // Setting display of spinner element to none 
    document.getElementById('loadingQuote').style.display = 'none';
    document.getElementById('quote').style.display = 'inline';
  }

  showLoader(): void {
    // Setting display of spinner element to inline 
    document.getElementById('loadingQuote').style.display = 'inline';
    document.getElementById('quote').style.display = 'none';
  }

  getRandomQuote(): Observable<Object> {
    return this.http.get<Object>(this.randomQuoteURL)
  }

  getNewRandomQuote(): void {
    console.log('getRandomQuote()... ')
    this.showLoader();
    this.quote = this.getRandomQuote().subscribe(quote => {
      this.quote = quote
      this.hideLoader();
    })
  }
}
