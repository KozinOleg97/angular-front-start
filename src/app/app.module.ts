import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateCardComponent} from './create-card/create-card.component';
import {UpdateCardComponent} from './update-card/update-card.component';
import {CardListComponent} from './card-list/card-list.component';
import {CardDetailsComponent} from './card-details/card-details.component';
import {InjectionToken} from '@angular/core';
import {Injectable} from '@angular/core';
import {Optional} from '@angular/core';
import {Inject} from '@angular/core';
import {environment} from 'src/environments/environment';
import {FormsModule} from "@angular/forms";


export const ENVIRONMENT = new InjectionToken<{ [key: string]: any }>('environment');

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private readonly environment: any;

  // We need @Optional to be able start app without providing environment file
  constructor(@Optional() @Inject(ENVIRONMENT) environment: any) {
    this.environment = environment !== null ? environment : {};
  }

  getValue(key: string, defaultValue?: any): any {
    return this.environment[key] || defaultValue;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    UpdateCardComponent,
    CardListComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: ENVIRONMENT, useValue: environment}],
  bootstrap: [AppComponent]
})

export class AppModule {
}
