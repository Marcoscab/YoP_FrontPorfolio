import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExpercienciaService {

  private url: string = "http://localhost:8080/porfolio";

  constructor(private http: HttpClient) { }

  public getExperciencia(): Observable<Experiencia[]> {

    return this.http.get<Experiencia[]>(this.url + "/experiencia/all");
  }

  public addExperiencia(experiencia: Experiencia): Observable<Experiencia> {

    let json = {
      "id": experiencia.id,
      "cargo": experiencia.cargo,
      "dedicacion": experiencia.dedicacion,
      "domicilio": experiencia.domicilio,
      "empresa": experiencia.empresa,
      "fecha_fin": experiencia.fecha_fin,
      "fecha_inicio": experiencia.fecha_inicio,
      "url_logo": experiencia.url_logo
    };
    return this.http.post<Experiencia>(this.url + "/experiencia/add", json);
  }

  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {

    let json = {
      "id": experiencia.id,
      "cargo": experiencia.cargo,
      "dedicacion": experiencia.dedicacion,
      "domicilio": experiencia.domicilio,
      "empresa": experiencia.empresa,
      "fecha_fin": experiencia.fecha_fin,
      "fecha_inicio": experiencia.fecha_inicio,
      "url_logo": experiencia.url_logo
    };

    let id = experiencia.id;

    return this.http.put<Experiencia>(this.url + "/experiencia/edit/" + { id }, json);
  }


  public deleteExperiencia(id: number): Observable<void> {

    return this.http.delete<void>(this.url + "/experiencia/delete/" + id);
  }


}
