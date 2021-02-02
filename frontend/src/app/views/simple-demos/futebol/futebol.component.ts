import { HeaderService } from '../../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-futebol',
  templateUrl: './futebol.component.html',
  styleUrls: ['./futebol.component.css']
})
export class FutebolComponent implements OnInit {

  constructor(private headerService: HeaderService, private location: Location) {
    headerService.headerData = {
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
