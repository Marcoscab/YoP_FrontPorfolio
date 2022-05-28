import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LenguajeProgramacion } from '../models/lenguaje-programacion.model';

@Injectable({
  providedIn: 'root'
})
export class LenguajeProgramacionService {


  private url: string = "http://localhost:8080/porfolio";
  private urlRemote:string = "https://ms-porfolio.herokuapp.com/porfolio";

  constructor(private http:HttpClient) { }


  public getLenguaje():Observable<LenguajeProgramacion[]>{

    return this.http.get<LenguajeProgramacion[]>(this.urlRemote+"/habilidad/lenguaje/all");
  }

  public addLenguaje(lenguaje:LenguajeProgramacion): Observable<void> {

    let json = {
      "id": lenguaje.id,
      "lenguaje": lenguaje.lenguaje,
      "nivel": lenguaje.nivel
    };

    return this.http.post<void>(this.urlRemote + "/habilidad/lenguaje/add", json);
  }


  public updateLenguaje(lenguaje:LenguajeProgramacion): Observable<void> {

    let json = {
      "id": lenguaje.id,
      "lenguaje": lenguaje.lenguaje,
      "nivel": lenguaje.nivel
    };

    return this.http.put<void>(this.urlRemote + "/habilidad/lenguaje/edit/" + lenguaje.id, json);

  }


  public deleteLenguaje(id: number): Observable<void> {

    return this.http.delete<void>(this.urlRemote + "/habilidad/lenguaje/delete/" + id);
  }





}
