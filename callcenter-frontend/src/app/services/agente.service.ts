import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agente } from '../models/agente.model copy';


@Injectable({
  providedIn: 'root'
})
export class AgenteService {
  private apiUrl = 'http://localhost:8000/agentes'; // ajusta si es diferente

  constructor(private http: HttpClient) {}

  getAll(): Observable<Agente[]> {
    return this.http.get<Agente[]>(this.apiUrl);
  }

  create(agente: Agente): Observable<Agente> {
    return this.http.post<Agente>(this.apiUrl, agente);
  }

  update(id: number, agente: Agente): Observable<Agente> {
    return this.http.put<Agente>(`${this.apiUrl}/${id}`, agente);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
