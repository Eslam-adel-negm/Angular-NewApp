import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient:HttpClient) { }

  getEgyNews():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=b4e3a9b6416946c8a0d24c7e04a7a5ec')
  }

  getUsaNews():Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b4e3a9b6416946c8a0d24c7e04a7a5ec')
  }
}
