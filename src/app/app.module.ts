import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes} from '@angular/router'
import { ModalComponent } from './components/modal/modal.component';
import { StoreModule } from '@ngrx/store';


const appRoutes : Routes = [
  { path :"" , component: SearchComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
    SearchBarComponent,
        SearchResultsComponent,
        SearchResultComponent,
        SearchComponent,
        ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
