import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Pokemon } from '../Pokemon';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseApiUrl = environment.baseApiUrl;

  private apiUrl = this.baseApiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/pokemon`)
  };

  getCaughtPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/caught`)
  };

  postCaught(pokemon:Pokemon): Observable<Pokemon> {
    const {name, imageUrl } = pokemon
    return this.http.post<Pokemon>(`${this.apiUrl}/caught`,{name, imageUrl})
  };
}
