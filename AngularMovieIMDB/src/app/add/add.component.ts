import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() movieDetails = { name: String, year: Number, plot: String, cast: [], poster: String };

  actors: any;
  years = [];
  options = [];

  config = {
    displayKey: 'name',
    search: true, // true/false for the search functionlity defaults to false,
    height: 'auto',
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {},
    limitTo: this.options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name',
  };

  dataModel = [];
  dropdownOptions = [];
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
}
