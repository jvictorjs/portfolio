import { Component, OnInit } from '@angular/core';
import { NavService } from './../../components/template/nav/nav.service';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-demos',
  templateUrl: './simple-demos.component.html',
  styleUrls: ['./simple-demos.component.css']
})
export class SimpleDemosComponent implements OnInit {
  faFutbol = faFutbol

  constructor(private navService: NavService) {
    navService.navData = {
      title: 'Demos',
      icon: 'developer_mode',
      routeUrl: 'demos'
    }
  }

  ngOnInit(): void {
  }

}