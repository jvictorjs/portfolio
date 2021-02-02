import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/nav/nav.service';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-demos',
  templateUrl: './simple-demos.component.html',
  styleUrls: ['./simple-demos.component.css']
})
export class SimpleDemosComponent implements OnInit {
  faFutbol = faFutbol

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Simple Demos',
      icon: 'developer_mode',
      routeUrl: 'demos'
    }
  }

  ngOnInit(): void {
  }

}