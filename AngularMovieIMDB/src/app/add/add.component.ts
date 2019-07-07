import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  actors: any;
  years = [];

  // tslint:disable-next-line: max-line-length
  movieDetails: { name: string, year: 0, plot: string, cast: any, poster: string, type: string } = { name: '', year: 0, plot: '', cast: [], poster: '', type: '' };
  actorDetails: { name: string, dob: string, bio: string, sex: string } = { name: '', dob: '', bio: '', sex: ''};

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, public rest: RestApiService, private route: ActivatedRoute, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  ngOnInit() {
    for (let y = 1900; y <= 2019; y++) {
      this.years.push(y);
    }
    this.getActors();

  }


  getActors(): void {
    this.http.get('http://localhost:8080/api/movie/getAllActors')
      .subscribe(
        res => {
          this.actors = res;
          console.log(this.actors);
        }
      );
  }

  submit() {
    this.rest.addMovies(this.movieDetails).subscribe((result) => {
      console.log('Added Successfully');
    }, (err) => {
      console.log(err);
    });
    document.getElementById('confirmation').innerHTML = 'Movie Added';
  }

  submitActor() {
    this.rest.addActors(this.actorDetails).subscribe((result) => {
      console.log('Added Successfully');
    }, (err) => {
      console.log(err);
    });
    document.getElementById('confirmationActor').innerHTML = 'Actor Added';
  }
}
