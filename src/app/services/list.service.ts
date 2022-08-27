import { Injectable } from '@angular/core';

import { Item } from '../items';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private apiUrl = 'http://localhost:3000/people'

  constructor(private http: HttpClient) { }

  remove(items: Item[], item: Item) {
    return items.filter((a) => item.name !== a.name);
  }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl)
  }
}
