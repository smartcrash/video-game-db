import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game, GameDetails, GameDetailsWithScreenhotsAndMovies, Movie, Screenshot } from '../models';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) { }


  getListOfGames({ search, ordering }: { search?: string, ordering?: string }): Observable<APIResponse<Game[]>> {
    let params = new HttpParams()

    if (search) params = params.set('search', search)
    if (ordering) params = params.set('ordering', ordering)

    return this.http.get<APIResponse<Game[]>>(`${env.apiURL}/games`, { params })
  }

  getDetailsOfGame(id: number): Observable<GameDetailsWithScreenhotsAndMovies> {
    const gameDetailsRequest = this.http.get<GameDetails>(`${env.apiURL}/games/${id}`, {})
    const gameScreenshotsRequest = this.http.get<APIResponse<Screenshot[]>>(`${env.apiURL}/games/${id}/screenshots`, {})
    const gameMovieRequest = this.http.get<APIResponse<Movie[]>>(`${env.apiURL}/games/${id}/movies`, {})

    return forkJoin({
      gameDetailsRequest,
      gameScreenshotsRequest,
      gameMovieRequest
    }).pipe(map((responses) => ({
      ...responses['gameDetailsRequest'],
      screenshots: responses.gameScreenshotsRequest.results,
      movies: responses.gameMovieRequest.results
    })))
  }
}
