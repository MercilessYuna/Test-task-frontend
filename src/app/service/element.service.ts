import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Element } from '../model/element'

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private URL: string;

    constructor(private http: HttpClient) {
      this.URL = 'http://localhost:8081/api/array';
    }

    public postElement(element: Element) {
      return this.http.post(this.URL, element);
    }

    public getElementsByArrayId(id: number): Observable<Element[]> {
      return this.http.get<Element[]>(this.URL + "/array/" + id);
    }
}
