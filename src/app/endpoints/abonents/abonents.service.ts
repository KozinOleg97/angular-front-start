import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../../data-types/card";
import {Abonent} from "../../data-types/abonent";


@Injectable({
  providedIn: 'root'
})
export class AbonentsService {

  constructor(private httpClient: HttpClient) {
  }

  private baseURL = "http://localhost:8080/api/v1";


  getAbonentList(): Observable<Abonent[]> {
    return this.httpClient.get<Abonent[]>(`${this.baseURL}/abonents`)
  }

  createAbonent(abonent: Abonent): Observable<number> {
    //card.date_of_issue = Date.now().toString();
    return this.httpClient.post<number>(`${this.baseURL}/abonents`, abonent);
  }

  getAbonentById(id: number): Observable<Abonent> {
    return this.httpClient.get<Abonent>(`${this.baseURL}/abonents/${id}`);
  }

  updateAbonent(id: number, abonent: Abonent): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/abonents/${id}`, abonent);
  }

  deleteAbonent(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/abonents/${id}`);
  }

}
