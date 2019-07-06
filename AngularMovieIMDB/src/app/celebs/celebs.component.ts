import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-celebs',
  templateUrl: './celebs.component.html',
  styleUrls: ['./celebs.component.css']
})
export class CelebsComponent implements OnInit {
  actors: any;

  formatsDateTest: string[] = [
    'dd/MM/yyyy',
    ];

  constructor( private http: HttpClient) { }

  ngOnInit() {
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
}
