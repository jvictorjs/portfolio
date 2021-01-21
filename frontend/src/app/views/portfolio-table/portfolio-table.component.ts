import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'All Projects Table',
      icon: 'work',
      routeUrl: 'portfolio-table'
    }
  }

  ngOnInit(): void {
  }

}
