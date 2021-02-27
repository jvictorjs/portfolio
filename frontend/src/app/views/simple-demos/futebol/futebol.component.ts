import { NavService } from '../../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-futebol',
  templateUrl: './futebol.component.html',
  styleUrls: ['./futebol.component.css']
})
export class FutebolComponent implements OnInit {

  constructor(private navService: NavService, private location: Location) {
    navService.navData = {
      title: 'Live Soccer Events',
      icon: 'sports_soccer',
      routeUrl: 'futebol'
    }
  }

  ngOnInit(): void {
  }

  navigationGoBack() {
    this.location.back();
  }
}
