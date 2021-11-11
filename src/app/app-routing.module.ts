import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardListComponent} from "./endpoints/cards/card-list/card-list.component";
import {CardDetailsComponent} from "./endpoints/cards/card-details/card-details.component";
import {CreateCardComponent} from "./endpoints/cards/create-card/create-card.component";
import {CreateAbonentComponent} from "./endpoints/abonents/create-abonent/create-abonent.component";
import {AbonentListComponent} from "./endpoints/abonents/abonent-list/abonent-list.component";

const routes: Routes = [
  {path: `cards`, component: CardListComponent},
  {path: `card-details/:id`, component: CardDetailsComponent},
  {path: `create-card`, component: CreateCardComponent},
  {path: `create-abonent`, component: CreateAbonentComponent},
  {path: `abonents`, component: AbonentListComponent},
  {path: ``, redirectTo: `cards`, pathMatch: `full`}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
