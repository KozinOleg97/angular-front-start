import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../../data-types/card";


//import {ENVIRONMENT} from "../../../app.module";


@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor(private httpClient: HttpClient) {
  }


  private baseURL = "http://192.168.1.157:8080/api/v1";

  getCardList(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${this.baseURL}/cards`)
  }

  createCard(card: Card): Observable<number> {
    //card.date_of_issue = Date.now().toString();
    return this.httpClient.post<number>(`${this.baseURL}/cards`, card);
  }

  getCardById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(`${this.baseURL}/cards/${id}`);
  }

  updateCard(id: number, card: Card): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/cards/${id}`, card);
  }

  deleteCard(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/cards/${id}`);
  }

  uploadFile(file: File): Observable<number> {

    const formData: FormData = new FormData();

    formData.append(`file`, file, file.name);

    const headers = new HttpHeaders({'enctype': 'multipart/form-data'});

    return this.httpClient.post<number>(`${this.baseURL}/files`, formData, {headers: headers});
  }


  // downloadFile(id: number): Observable<Blob> {
  //   let options = new RequestOptions({responseType: });
  //   return this.http.get(this._baseUrl + '/' + id, options)
  //     .map(res => res.blob())
  //     .catch(this.handleError)
  // }

  // async downloadLargeFile(id: number): Promise<ArrayBuffer> {
  //   return await this.httpClient.get(`${this.baseURL}/ `, {
  //     responseType: "arraybuffer",
  //   }).pipe(map((file: ArrayBuffer) => {
  //     return file;
  //   })).toPromise
  // }

}



