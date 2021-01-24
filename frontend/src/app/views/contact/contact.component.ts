import { HeaderService } from './../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Contact',
      icon: 'mail_outline',
      routeUrl: 'contact'
    }
  }

  ngOnInit(): void {
  }

}
