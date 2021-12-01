import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateCardComponent} from './endpoints/cards/create-card/create-card.component';
import {UpdateCardComponent} from './endpoints/cards/update-card/update-card.component';
import {CardListComponent} from './endpoints/cards/card-list/card-list.component';
import {CardDetailsComponent} from './endpoints/cards/card-details/card-details.component';

import {Injectable} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {defineLocale, enGbLocale, ruLocale} from 'ngx-bootstrap/chronos';
import {deLocale} from 'ngx-bootstrap/locale';
import {CreateAbonentComponent} from './endpoints/abonents/create-abonent/create-abonent.component';
import {AbonentListComponent} from './endpoints/abonents/abonent-list/abonent-list.component';
import {NgxBootstrapMultiselectModule} from "ngx-bootstrap-multiselect";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {CorrectionAddDialogComponent} from "./endpoints/corrections/correction-add-dialog/correction-add-dialog.component";
import {AbonentAddDialogComponent} from './endpoints/abonents/abonent-add-dialog/abonent-add-dialog.component';


//export const ENVIRONMENT = new InjectionToken<{ [key: string]: any }>('environment');

defineLocale('engb', enGbLocale);
defineLocale('ru', ruLocale);

@Injectable({
  providedIn: 'root',
})
// export class EnvironmentService {
//   private readonly environment: any;
//
//   // We need @Optional to be able start app without providing environment file
//   constructor(@Optional() @Inject(ENVIRONMENT) environment: any) {
//     this.environment = environment !== null ? environment : {};
//   }
//
//   getValue(key: string, defaultValue?: any): any {
//     return this.environment[key] || defaultValue;
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    UpdateCardComponent,
    CardListComponent,
    CardDetailsComponent,
    CreateAbonentComponent,
    AbonentListComponent,
    CorrectionAddDialogComponent,
    AbonentAddDialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgxBootstrapMultiselectModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [/*{provide: ENVIRONMENT, useValue: environment}*/],
  bootstrap: [AppComponent],
  entryComponents: [CorrectionAddDialogComponent]
})

export class AppModule {
}
