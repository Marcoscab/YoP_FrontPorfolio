import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

private url:string = "http://localhost:8080/porfolio/";
private idPersona:string="1";

  constructor(private http:HttpClient) { }


  getData():Observable<Persona>{

    return this.http.get<Persona>(this.url+this.idPersona);
  }




}
