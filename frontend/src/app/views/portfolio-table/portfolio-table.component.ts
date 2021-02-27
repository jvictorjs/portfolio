import { Component, OnInit } from '@angular/core';
import { NavService } from './../../components/template/nav/nav.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {

  constructor(private navService: NavService) {
    navService.navData = {
      title: 'All Projects Table',
      icon: 'work',
      routeUrl: 'portfolio-table'
    }
  }

  ngOnInit(): void {
  }

}
