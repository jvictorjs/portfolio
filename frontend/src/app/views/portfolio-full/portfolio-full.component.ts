import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/header/header.service';

@Component({
  selector: 'app-portfolio-full',
  templateUrl: './portfolio-full.component.html',
  styleUrls: ['./portfolio-full.component.css']
})
export class PortfolioFullComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'All Projects',
      icon: 'work',
      routeUrl: 'portfolio-full'
    }
  }

  ngOnInit(): void {
  }

}
