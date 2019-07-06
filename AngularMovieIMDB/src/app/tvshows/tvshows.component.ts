import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  shows: any;

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getShows();
  }

  getShows(): void {
    this.http.get('http://localhost:8080/api/movie/getAllShows')
      .subscribe(
        res => {
          this.shows = res;
          console.log(this.shows);
        }
      );
  }

}
