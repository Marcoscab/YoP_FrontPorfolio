import { HerramientaInformatica } from './../models/herramienta-informatica.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerramientaInformaticaService {

  private url: string = "http://localhost:8080/porfolio";

  constructor(private http: HttpClient) { }

  public getHerramienta(): Observable<HerramientaInformatica[]> {

    return this.http.get<HerramientaInformatica[]>(this.url + "/habilidad/herramienta/all");
  }

  public addHerramienta(herramienta: HerramientaInformatica): Observable<void> {

    let json = {
      "id": herramienta.id,
      "herramienta": herramienta.herramienta,
      "nivel": herramienta.nivel
    };

    return this.http.post<void>(this.url + "/habilidad/herramienta/add", json);
  }


  public updateHerramienta(herramienta: HerramientaInformatica): Observable<void> {

    let json = {
      "id": herramienta.id,
      "herramienta": herramienta.herramienta,
      "nivel": herramienta.nivel
    };

    return this.http.put<void>(this.url + "/habilidad/herramienta/edit/" + herramienta.id, json);

  }


  public deleteHerramienta(id: number): Observable<void> {

    return this.http.delete<void>(this.url + "/habilidad/herramienta/delete/" + id);
  }





}
