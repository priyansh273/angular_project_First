import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(`${this.apiUrl}/people/`).pipe(
      map((response: any) => response.results)
    );
  }

  getSpecies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/species/`).pipe(
      map((response: any) => response.results)
    );
  }

  getFilms(): Observable<any> {
    return this.http.get(`${this.apiUrl}/films/`).pipe(
      map((response: any) => response.results)
    );
  }

  getCharacterDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/people/${id}`);
  }
}
