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
      this.URL = 'http://localhost:8081/api';
    }

    public postElement(element: Element) {
      return this.http.post(this.URL, element);
    }

    public getElementsByArrId(id: number): Observable<Element[]> {
      return this.http.get<Element[]>(this.URL + '/' + id);
    }

    public getElements(): Observable<Element[]> {
      return this.http.get<Element[]>(this.URL);
    }

    public getMaxArr(): Observable<number> {
      return this.http.get<number>(this.URL + '/maxArr');
    }

}
