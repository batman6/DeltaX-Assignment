import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { CelebsComponent } from './celebs/celebs.component';
import { AddComponent } from './add/add.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvshowsComponent,
    CelebsComponent,
    AddComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
