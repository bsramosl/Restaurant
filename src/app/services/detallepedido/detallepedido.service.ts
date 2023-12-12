import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { DetallePedido } from '../../models/detallepedido';


@Injectable({
  providedIn: 'root'
})
export class DetallepedidoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/detpedido'
   }

  getList(): Observable<DetallePedido[]> {
    return this.http.get<DetallePedido[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  
  delete(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`)

  }

  save(datos: DetallePedido):Observable<void>{
    return this.http.post<void>
    (`${this.myAppUrl}${this.myApiUrl}`,datos)
  }

  get(id: number): Observable<DetallePedido>{
    return this.http.get<DetallePedido>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  update(id: number, datos: DetallePedido): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, datos)
  }
}