import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idioma } from '../models/idioma.model';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  private url: string = "http://localhost:8080/porfolio";
  private urlRemote:string = "https://ms-porfolio.herokuapp.com/porfolio";

  constructor(private http: HttpClient) { }

  public getIdioma(): Observable<Idioma[]> {

    return this.http.get<Idioma[]>(this.urlRemote + "/habilidad/idioma/all");

  }

  public addIdioma(idioma: Idioma): Observable<void> {

    let json = {
      "id": idioma.id,
      "idioma": idioma.idioma,
      "nivel": idioma.nivel
    };

    return this.http.post<void>(this.urlRemote + "/habilidad/idioma/add", json);
  }


  public updateIdioma(idioma: Idioma): Observable<void> {

    let json = {
      "id": idioma.id,
      "idioma": idioma.idioma,
      "nivel": idioma.nivel
    };

    return this.http.put<void>(this.urlRemote + "/habilidad/idioma/edit/" + idioma.id, json);

  }


  public deleteIdioma(id: number): Observable<void> {

    return this.http.delete<void>(this.urlRemote + "/habilidad/idioma/delete/" + id);
  }

}
