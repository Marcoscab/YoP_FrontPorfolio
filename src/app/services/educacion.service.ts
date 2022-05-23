import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private url: string = "http://localhost:8080/porfolio";


  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {

    return this.http.get<Educacion[]>(this.url + "/educacion/all");
  }


  public addEducacion(educacion: Educacion): Observable<Educacion> {

    let json = {
      "id": educacion.id,
      "entidad": educacion.entidad,
      "titulo": educacion.titulo,
      "fecha_cursado": educacion.fecha_cursado,
      "domicilio": educacion.domicilio,
      "url_logo": educacion.url_logo
    };

    return this.http.post<Educacion>(this.url + "/educacion/add", json);

  }

  public updateEducacion(educacion: Educacion): Observable<void> {
    let json = {
      "id": educacion.id,
      "entidad": educacion.entidad,
      "titulo": educacion.titulo,
      "fecha_cursado": educacion.fecha_cursado,
      "domicilio": educacion.domicilio,
      "url_logo": educacion.url_logo
    };

    return this.http.put<void>(this.url + "/educacion/edit/" + educacion.id, json);

  }


  public deleteEducacion(id: number): Observable<void> {

    return this.http.delete<void>(this.url + "/educacion/delete/" + id);
  }









}
