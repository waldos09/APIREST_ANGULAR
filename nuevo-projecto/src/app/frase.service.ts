import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { endWith, map } from 'rxjs/operators';
import { Frase } from './frase';

@Injectable({
  providedIn: 'root'
})
export class FraseService {
private urlEndPoint:string="http://localhost:8080/apiFrases/frases";
private httpHeaders=new HttpHeaders({"ContentType":"appLocation/json"})
  constructor(private http:HttpClient) { }
  mostrarFrases():Observable<Frase[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Frase[])
    )
  };

  leerFrase(id:number):Observable<Frase>{
    return this.http.get<Frase>(`${this.urlEndPoint}/${id}`)
  };

  crearFrase(frase:Frase):Observable<Frase>{
    return this.http.post<Frase>(this.urlEndPoint,frase,{headers:this.httpHeaders})
  };

  eliminarFrase(id:number):Observable<Frase>{
    return this.http.delete<Frase>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})
  }

  actualizarFrase(frase:Frase):Observable<Frase>{
    return this.http.post<Frase>(`${this.urlEndPoint}/${frase.idFrase}`,frase,{headers:this.httpHeaders})
  }
}
