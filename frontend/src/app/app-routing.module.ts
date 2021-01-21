import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { FutebolComponent } from './views/futebol/futebol.component';
import { FutebolEventReadComponent } from './components/futebol/futebol-event-read/futebol-event-read.component';
import { ControleFinanceiroComponent } from './views/projects/controle-financeiro/controle-financeiro.component';
import { FiresafeComponent } from './views/projects/firesafe/firesafe.component';
import { PortfolioTableComponent } from './views/portfolio-table/portfolio-table.component';
import { PortfolioListComponent } from './views/portfolio-list/portfolio-list.component';
import { MyExperienceComponent } from './views/my-experience/my-experience.component';
import { JvictorStackComponent } from './views/jvictor-stack/jvictor-stack.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
