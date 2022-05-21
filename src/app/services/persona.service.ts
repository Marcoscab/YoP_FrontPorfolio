import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }


  public getData(): Observable<Persona> {

    return this.http.get<Persona>("http://localhost:8080/porfolio/1");
  }

  public updatePersona(persona: Persona): Observable<Persona> {

    console.log(persona);
    return this.http.put<Persona>("http://localhost:8080/porfolio/editar2/1", persona);
  }


}
