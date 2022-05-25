import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LenguajeProgramacion } from '../models/lenguaje-programacion.model';

@Injectable({
  providedIn: 'root'
})
export class LenguajeProgramacionService {


  private url: string = "http://localhost:8080/porfolio";

  constructor(private http:HttpClient) { }


  public getLenguaje():Observable<LenguajeProgramacion[]>{

    return this.http.get<LenguajeProgramacion[]>(this.url+"/habilidad/lenguaje/all");
  }

  public addLenguaje(lenguaje:LenguajeProgramacion): Observable<void> {

    let json = {
      "id": lenguaje.id,
      "lenguaje": lenguaje.lenguaje,
      "nivel": lenguaje.nivel
    };

    return this.http.post<void>(this.url + "/habilidad/lenguaje/add", json);
  }


  public updateLenguaje(lenguaje:LenguajeProgramacion): Observable<void> {

    let json = {
      "id": lenguaje.id,
      "lenguaje": lenguaje.lenguaje,
      "nivel": lenguaje.nivel
    };

    return this.http.put<void>(this.url + "/habilidad/lenguaje/edit/" + lenguaje.id, json);

  }


  public deleteLenguaje(id: number): Observable<void> {

    return this.http.delete<void>(this.url + "/habilidad/lenguaje/delete/" + id);
  }





}
