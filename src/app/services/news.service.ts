import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Newses } from '../news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<Newses[]>{
    return this.http.get<Newses[]>('https://newsapi.org/v2/everything?q=bitcoin&from=2020-03-25&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98');
  }
}
