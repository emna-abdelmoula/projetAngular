import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class EvenementServiceService {
  tab: any[] = [];
  constructor(private httpClient:HttpClient) { }
  GETALL():Observable<Event[]>{
    return this.httpClient.get<Event[]>('http://localhost:3000/evenement')
  }
  ONDELETE(id: string): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/evenement/${id}`);
  }


  save(form: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/evenement', form);
  }
  edit(form: any, id: string): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:3000/evenement/${id}`, form);
  }
  getEvtById(id: String): Observable<Event> {
    return this.httpClient.get<Event>(`http://localhost:3000/evenement/${id}`);
  }

}




