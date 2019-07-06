import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { CelebsComponent } from './celebs/celebs.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'movies', component: MoviesComponent
  },
  {
    path: 'tvshows', component: TvshowsComponent
  },
  {
    path: 'celebs', component: CelebsComponent
  },
  {
    path: 'add', component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
