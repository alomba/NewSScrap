import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscripcionAPIService {

  constructor(private http: HttpClient) {}

  getUsers():any {
    return this.http.get('https://634694e3745bd0dbd3811262.mockapi.io/news/news');
  }
  
}
