import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '../../node_modules/@ngrx/store';

import { AppComponent } from './app.component';
import {HeaderComponent } from './HeaderComponent/header.component';
import {SectionComponent } from './SectionsComponent/section.component';
import {NewsComponent} from './NewsComponent/news.component';
import {NewsItemComponent} from './NewsComponent/NewsItemComponent/newsitem.component'
import {NavbarComponent} from './NavbarComponent/navbar.component'
import {AppRoutingModule, routingComponents} from './Router/app-routing.module';


import { newsReducer} from './Store/news-reducer'


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SectionComponent, 
    routingComponents, NewsComponent, NewsItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, StoreModule.forRoot({'news' : newsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
