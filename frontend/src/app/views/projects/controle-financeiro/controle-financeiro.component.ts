import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../../components/template/header/header.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-controle-financeiro',
  templateUrl: './controle-financeiro.component.html',
  styleUrls: ['./controle-financeiro.component.css']
})
export class ControleFinanceiroComponent implements OnInit {

  constructor(private headerService: HeaderService, private location: Location) {
    headerService.headerData = {
      title: 'ChatBot para Controle de Gastos',
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