import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "./DataTypes/card";
import {ENVIRONMENT} from "./app.module";


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseURL = "http://localhost:8080/api/v1/cards";

  constructor(private httpClient: HttpClient) {
  }

  getCardList(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${this.baseURL}`)
  }

  createCard(card: Card): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, card);
  }

  getCardById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(`${this.baseURL}/${id}`);
  }

  updateCard(id: number, card: Card): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, card);
  }

  deleteCard(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}



