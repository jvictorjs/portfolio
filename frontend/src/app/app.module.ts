import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/simple-demos/product-crud/product-crud.component';

import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';

import { FutebolComponent } from './views/simple-demos/futebol/futebol.component';
import { FutebolReadComponent } from './components/futebol/futebol-read/futebol-read.component';

import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { FutebolEventReadComponent } from './components/futebol/futebol-event-read/futebol-event-read.component';
import { ControleFinanceiroComponent } from './views/projects/controle-financeiro/controle-financeiro.component';
import { FiresafeComponent } from './views/projects/firesafe/firesafe.component';
import { PortfolioTableComponent } from './views/portfolio-table/portfolio-table.component';
import { ProjectsTableComponent } from './components/projects/projects-table/projects-table.component';
import { MyExperienceComponent } from './views/my-experience/my-experience.component';
import { JvictorStackComponent } from './views/jvictor-stack/jvictor-stack.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioListComponent } from './views/portfolio-list/portfolio-list.component';
import { ResumeComponent } from './views/resume/resume.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimpleDemosComponent } from './views/simple-demos/simple-demos.component';
import { QuotesComponent } from './views/simple-demos/quotes/quotes.component';
import { FutebolUpcomingComponent } from './components/futebol/futebol-upcoming/futebol-upcoming.component'
import { ChartsModule } from 'ng2-charts';
import { SocketIoComponent } from './views/simple-demos/socket-io/socket-io.component';
import { CountdownTimerComponent } from './views/simple-demos/countdown-timer/countdown-timer.component';
import { AudioAppComponent } from './views/simple-demos/audio-app/audio-app.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [ // componentes, diretivas e pipes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    FutebolComponent,
    FutebolReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    FutebolEventReadComponent,
    ControleFinanceiroComponent,
    FiresafeComponent,
    PortfolioTableComponent,
    ProjectsTableComponent,
    MyExperienceComponent,
    JvictorStackComponent,
    ContactComponent,
    PortfolioListComponent,
    ResumeComponent,
    SimpleDemosComponent,
    QuotesComponent,
    FutebolUpcomingComponent,
    SocketIoComponent,
    CountdownTimerComponent,
    AudioAppComponent
  ],
  imports: [ // módulos
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    FontAwesomeModule,
    ChartsModule,
    MatRippleModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
