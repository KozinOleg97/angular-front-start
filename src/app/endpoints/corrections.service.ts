import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../data-types/card";
import {Observable} from "rxjs";
import {Correction} from "../data-types/correction";

@Injectable({
  providedIn: 'root'
})
export class CorrectionsService {

  constructor(private httpClient: HttpClient) {
  }


  private baseURL = "http://192.168.1.157:8080/api/v1";


  addCorrection(card_id: number, correction: Correction): Observable<number> {
    return this.httpClient.post<number>(`${this.baseURL}/corrections/${card_id}`, correction);
  }





}
