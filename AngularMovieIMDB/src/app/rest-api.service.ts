import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  addMovies(movie): Observable<any> {
    console.log(movie);
    return this.http.post<any>(endpoint + 'create', JSON.stringify(movie), httpOptions).pipe(
// tslint:disable-next-line: no-shadowed-variable
      tap((movie) => console.log(`Added movie w/ id=${movie.id}`)),
      catchError(this.handleError<any>('addMovies'))
    );
  }

  addActors(actors): Observable<any> {
    console.log(actors);
    return this.http.post<any>(endpoint + 'create/actor', JSON.stringify(actors), httpOptions).pipe(
// tslint:disable-next-line: no-shadowed-variable
      tap((actors) => console.log(`Added actor w/ id=${actors.id}`)),
      catchError(this.handleError<any>('addActors'))
    );
  }

  /* updatepost(id, post): Observable<any> {
    return this.http.put(endpoint + 'posts/' + id, JSON.stringify(post), httpOptions).pipe(
      tap(_ => console.log(`updated post id=${id}`)),
      catchError(this.handleError<any>('updatepost'))
    );
  }

  deletepost(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'posts/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted post id=${id}`)),
      catchError(this.handleError<any>('deletepost'))
    );
  }
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
