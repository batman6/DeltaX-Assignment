import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMovies();
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
