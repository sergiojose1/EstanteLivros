import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {
//buscar livros na API do Google Books com base em um termo de busca (query).
  apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  apiKey = 'AIzaSyCpVl7_EubbId2NUvUxHIphHQ1TF-Ve0aw';

  constructor(private http: HttpClient) { }

  getBooks(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}&maxResults=20`;
    return this.http.get(url);
  }
}
