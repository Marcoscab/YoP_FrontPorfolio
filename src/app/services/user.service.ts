import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private url:string ="http://localhost:8080/porfolio/";

private userFromDb:Usuario;

private logueado=false;


  constructor(private http:HttpClient) { }

  public getUser(): Observable<Usuario> {

    return this.http.get<Usuario>(this.url+"user/1");
  }

 

}
