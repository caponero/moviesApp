import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string = '';
  private apiKey: string = '7667673e';

  constructor(private http: HttpClient) { }

  buscarMovies(title: string, tipo: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${tipo}&apikey=${this.apiKey}`;
    //console.log(this.url);
    //console.log(this.http.get<Movie>(this.url));
    return this.http.get<Movie>(this.url).pipe(map(results => results['Search']));
    

  }

  getDetails(id: string){
    return this.http.get<Movie>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);

  }
}
