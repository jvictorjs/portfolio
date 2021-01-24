import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/nav/nav.service';

@Component({
  selector: 'app-jvictor-stack',
  templateUrl: './jvictor-stack.component.html',
  styleUrls: ['./jvictor-stack.component.css']
})
export class JvictorStackComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'JVictor Stack',
      icon: 'settings_ethernet',
      routeUrl: 'jvictor-stack'
    }
  }
  ngOnInit(): void {
  }

}
