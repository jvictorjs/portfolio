import { NavService } from './../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.css']
})
export class MyExperienceComponent implements OnInit {

  constructor(private navService: NavService) {
    navService.navData = {
      title: "My Experience",
      icon: 'work',
      routeUrl: 'my-experience'
    }
  }

  ngOnInit(): void {
  }

}
