import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Movie } from '../../models/movie.interface';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<Movie>;
  termino: string = '';
  tipo: string = '';

  constructor(private moviservice: MovieService) { }

  ngOnInit() {
  }

  buscarCambio(): void {
    this.results = this.moviservice.buscarMovies(this.termino, this.tipo);
  }

}
