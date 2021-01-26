import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/nav/nav.service';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  faArrowAltCircleDown = faArrowAltCircleDown

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Resume',
      icon: 'text_snippet', // picture_as_pdf work
      routeUrl: 'resume'
    }
  }
  ngOnInit(): void {
  }

}