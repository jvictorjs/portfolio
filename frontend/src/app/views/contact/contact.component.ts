import { NavService } from './../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';
import { faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faYoutube = faYoutube
  faLinkedin = faLinkedin
  faGithub = faGithub
  faEnvelope = faEnvelope
  faFileAlt = faFileAlt


  constructor(private navService: NavService) {
    navService.navData = {
      title: 'Contact',
      icon: 'mail_outline',
      routeUrl: 'contact'
    }
  }

  ngOnInit(): void {
  }

}
