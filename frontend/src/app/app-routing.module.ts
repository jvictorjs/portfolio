import { AudioAppComponent } from './views/simple-demos/audio-app/audio-app.component';
import { CountdownTimerComponent } from './views/simple-demos/countdown-timer/countdown-timer.component';
import { SimpleDemosComponent } from './views/simple-demos/simple-demos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProductCrudComponent } from './views/simple-demos/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { FutebolComponent } from './views/simple-demos/futebol/futebol.component';
import { FutebolEventReadComponent } from './components/futebol/futebol-event-read/futebol-event-read.component';
import { ControleFinanceiroComponent } from './views/projects/controle-financeiro/controle-financeiro.component';
import { FiresafeComponent } from './views/projects/firesafe/firesafe.component';
import { PortfolioTableComponent } from './views/portfolio-table/portfolio-table.component';
import { PortfolioListComponent } from './views/portfolio-list/portfolio-list.component';
import { MyExperienceComponent } from './views/my-experience/my-experience.component';
import { JvictorStackComponent } from './views/jvictor-stack/jvictor-stack.component';
import { ContactComponent } from './views/contact/contact.component';
import { ResumeComponent } from './views/resume/resume.component';
import { QuotesComponent } from './views/simple-demos/quotes/quotes.component';
import { FutebolUpcomingComponent } from './components/futebol/futebol-upcoming/futebol-upcoming.component';
import { SocketIoComponent } from './views/simple-demos/socket-io/socket-io.component';
import { MedReminderSettingsComponent } from './views/simple-demos/med-reminder-settings/med-reminder-settings.component';
import { SendingTelegramMessagesComponent } from './views/simple-demos/sending-telegram-messages/sending-telegram-messages.component';

const routes: Routes = [
  {
    path: "",
    component: AboutComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "futebol",
    component: FutebolComponent
  },
  {
    path: "futebol-upcoming",
    component: FutebolUpcomingComponent
  },
  {
    path: "futebol/event/:id",
    component: FutebolEventReadComponent
  },
  {
    path: "controle-financeiro",
    component: ControleFinanceiroComponent
  },
  {
    path: "firesafe",
    component: FiresafeComponent
  },
  {
    path: "portfolio-table",
    component: PortfolioTableComponent
  },
  {
    path: "portfolio-list",
    component: PortfolioListComponent
  },
  {
    path: "my-experience",
    component: MyExperienceComponent
  },
  {
    path: "jvictor-stack",
    component: JvictorStackComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "demos",
    component: SimpleDemosComponent
  },
  {
    path: "quotes",
    component: QuotesComponent
  },
  {
    path: "socket-io",
    component: SocketIoComponent
  },
  {
    path: "countdown-timer",
    component: CountdownTimerComponent
  },
  {
    path: "audio-app",
    component: AudioAppComponent
  },
  {
    path: "med-reminder-settings",
    component: MedReminderSettingsComponent
  },
  {
    path: "sending-telegram-messages",
    component: SendingTelegramMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
