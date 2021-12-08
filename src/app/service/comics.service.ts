import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicBase } from '../model/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  public async getComics() {
    return await this.http.get<ComicBase>("http://localhost:4200/api/issues/?api_key=8b3c37ea676751820294b32837f66a24ae9af7f6&format=json").toPromise();
  }
}
