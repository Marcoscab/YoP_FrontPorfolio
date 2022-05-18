import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:8080/porfolio/";

  //Variable para saber si el usuario esta logueado.
  private _userLogOnSource = new Subject<boolean>();

  userLogOn$ = this._userLogOnSource.asObservable();


  constructor(private http: HttpClient) { }

  public getUser(): Observable<Usuario> {

    return this.http.get<Usuario>(this.url + "user/1");
  }


  updateUserLogOnStatus(userLogOnStatus: boolean) {
    this._userLogOnSource.next(userLogOnStatus);
  }



}
