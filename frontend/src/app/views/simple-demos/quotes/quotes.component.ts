import { NavService } from '../../../components/template/nav/nav.service';
import { Location } from '@angular/common';
import { Quote } from './quote.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { QuoteDataSource } from './quotes.datasource';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<ProductRead2Item>;
  @ViewChild(MatTable) table: MatTable<Quote>;
  dataSource: QuoteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['quote', 'author'];

  baseUrl = 'https://script.google.com/macros/s/AKfycby9ZWcPcTWaTtvyCK8tv4pJXfe0-VZUo0vacJXF9JGx2xid8Xr2eEOy/exec?getQuotes=all'
  quotes: Quote[] = [];

  constructor(private navService: NavService, private location: Location, private http: HttpClient,
    private quoteService: QuoteService) {
    navService.navData = {
      title: 'Quotes',
      icon: 'format_quote',
      routeUrl: 'quotes'
    }
  }

  navigationGoBack() {
    this.location.back();

  }

  refresh(): void {
    this.showLoader();
    this.quoteService.read().subscribe(quotes => {
      this.dataSource = new QuoteDataSource(quotes);
      console.log(quotes);
      this.ngAfterViewInit();
      this.hideLoader();
    });

  }

  ngOnInit() {
    this.dataSource = new QuoteDataSource(this.quotes);

    // STACKOVERFLOW https://stackoverflow.com/questions/46746598/angular-material-how-to-refresh-a-data-source-mat-table
    // STACKOVERFLOW https://stackoverflow.com/questions/40817336/whats-the-difference-between-ngoninit-and-ngafterviewinit-of-angular2

    /*
    in order to show the correct quota table data, it is necessary to set a new quoteDataSource object, 
    angular has some weird limitations dealing with table content redering with sort and paginator
    */
    this.refresh()

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  read(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
  }

  hideLoader(): void {
    // Setting display of spinner element to none 
    document.getElementById('loadingQuote').style.display = 'none';
    document.getElementById('quotesTable').style.display = 'inline';
  }

  showLoader(): void {
    // Setting display of spinner element to inline 
    document.getElementById('loadingQuote').style.display = 'inline';
    document.getElementById('quotesTable').style.display = 'none';
  }
}