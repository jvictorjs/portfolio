import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Component, OnInit } from '@angular/core';
import { NavService } from './../../../components/template/nav/nav.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-controle-financeiro',
  templateUrl: './controle-financeiro.component.html',
  styleUrls: ['./controle-financeiro.component.css']
})
export class ControleFinanceiroComponent implements OnInit {

  project_ptbr = {
    platform: 'Telegram Chatbot',
    platform_icon: 'chat',
    status: 'Em Produção',
    access: 'Privado',
    access_icon: 'lock'
  }

  project_en = {
    platform: 'Telegram Chatbot',
    platform_icon: 'chat',
    status: 'Production',
    access: 'Private',
    access_icon: 'lock'
  }

  constructor(private navService: NavService, private location: Location) {
    navService.navData = {
      title: 'Controle Financeiro',
      icon: 'attach_money',
      routeUrl: 'controle-financeiro'
    }
  }

  ngOnInit(): void {
  }

  navigationGoBack() {
    this.location.back();
  }
}