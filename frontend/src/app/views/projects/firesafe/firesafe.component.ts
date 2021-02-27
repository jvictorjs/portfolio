import { Component, OnInit } from '@angular/core';
import { NavService } from './../../../components/template/nav/nav.service';

@Component({
  selector: 'app-firesafe',
  templateUrl: './firesafe.component.html',
  styleUrls: ['./firesafe.component.css']
})
export class FiresafeComponent implements OnInit {

  constructor(private navService: NavService) {
    navService.navData = {
      title: 'FireSafe - Uma aplicação feita no Hackaton Nasa Space Apps Challenge 2020',
      icon: 'local_fire_department',
      routeUrl: 'firesafe'
    }
  }

  ngOnInit(): void {
  }

}
