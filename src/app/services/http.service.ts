import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, GameDetails } from '../models';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) { }


  getListOfGames(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${env.apiURL}/games`, {})
  }

  getDetailsOfGame(id: number) {
    return this.http.get<GameDetails>(`${env.apiURL}/games/${id}`, {})
  }
}
