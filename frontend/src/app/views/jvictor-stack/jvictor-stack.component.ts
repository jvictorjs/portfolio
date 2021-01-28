import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/nav/nav.service';
import {
  faYoutube, faLinkedin, faGithub, faJsSquare, faHtml5, faCss3,
  faStackOverflow, faCodepen, faDiscord, faUbuntu
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jvictor-stack',
  templateUrl: './jvictor-stack.component.html',
  styleUrls: ['./jvictor-stack.component.css']
})
export class JvictorStackComponent implements OnInit {

  faYoutube = faYoutube
  faLinkedin = faLinkedin
  faGithub = faGithub
  faEnvelope = faEnvelope
  faFileAlt = faFileAlt
  faFutbol = faFutbol
  faJsSquare = faJsSquare
  faHtml5 = faHtml5
  faCss3 = faCss3
  faStackOverflow = faStackOverflow
  faCodepen = faCodepen
  faDiscord = faDiscord
  faUbuntu = faUbuntu


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
