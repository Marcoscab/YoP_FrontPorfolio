import { Proyecto } from './../models/proyecto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private url: string = "http://localhost:8080/porfolio";
  private urlRemote:string = "https://ms-porfolio.herokuapp.com/porfolio";

  constructor(private http:HttpClient) {}

public getProyecto():Observable<Proyecto[]>{

    return this.http.get<Proyecto[]>(this.urlRemote+"/proyecto/all");
  }

  public addProyecto(proyecto: Proyecto): Observable<void> {

    let json = {
      "id": proyecto.id,
      "nombre": proyecto.nombre,
      "tipo": proyecto.tipo,
      "descripcion": proyecto.descripcion,
      "fecha_creacion": proyecto.fecha_creacion,
      "url_imagen": proyecto.url_imagen,
      "url_sitio": proyecto.url_sitio
    };

    return this.http.post<void>(this.urlRemote + "/proyecto/add", json);
  }


  public updateProyecto(proyecto:Proyecto): Observable<void> {

    let json = {
      "id": proyecto.id,
      "nombre": proyecto.nombre,
      "tipo": proyecto.tipo,
      "descripcion": proyecto.descripcion,
      "fecha_creacion": proyecto.fecha_creacion,
      "url_imagen": proyecto.url_imagen,
      "url_sitio": proyecto.url_sitio
    };

    return this.http.put<void>(this.urlRemote + "/proyecto/edit/" + proyecto.id, json);

  }


  public deleteProyecto(id: number): Observable<void> {

    return this.http.delete<void>(this.urlRemote + "/proyecto/delete/" + id);
  }

}
