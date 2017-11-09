import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {
  NgModule,
} from '@angular/core';

import {
  RouterModule,
} from '@angular/router';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';

import '../styles/styles.scss';
import '../styles/headings.css';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NoContentComponent } from './not-found-404/no-content.component';
import { ToDoModule } from './to-do/to-do.module';
import { SharedModule } from './shared/shared.module';
import { MaterializeModule } from 'ng2-materialize';
import 'materialize-css';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetapsModule } from './metaps/metaps.module';
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    BrowserAnimationsModule,
    MetapsModule,
    MaterializeModule.forRoot(),
    ToDoModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  providers: []
})
export class AppModule {
}
