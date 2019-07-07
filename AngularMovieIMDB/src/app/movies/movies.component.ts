import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private http: HttpClient, public rest: RestApiService, private route: ActivatedRoute, private router: Router) { }

  public movies: any;
  public years = [];

  // tslint:disable-next-line: max-line-length
  movieDetails: { name: string, year: 0, plot: string, poster: string, type: string } = { name: '', year: 0, plot: '', poster: '', type: '' };

  submitted = false;
  message: string;

  ngOnInit() {
    for (let y = 1900; y <= 2019; y++) {
      this.years.push(y);
    }
    this.getMovies();
  }

  update(): void {
    this.submitted = true;
    this.rest.updateMovie(this.movies.id, this.movieDetails)
        .subscribe(result => this.message = 'Movie Updated Successfully!');
  }

  getMovies(): void {
    this.http.get('http://localhost:8080/api/movie/getAll')
      .subscribe(
        res => {
          this.movies = res;
          console.log(this.movies);
        }
      );
  }

}
