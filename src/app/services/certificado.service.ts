
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificado } from './../models/certificado.model';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  constructor(private http:HttpClient) { }


public getCertificado(): Observable<Certificado[]>{

  return this.http.get<Certificado[]>("http://localhost:8080/porfolio/certificado/all");

}

public addCertificado(certificado:Certificado): Observable<Certificado>{

  var json ={
    "id": certificado.id,
    "certificado":certificado.certificado
  }
 
  return this.http.post<Certificado>("http://localhost:8080/porfolio/certificado/add",json);
}


public deleteCertificado(id:number): Observable<void>{

  return this.http.delete<void>("http://localhost:8080/porfolio/certificado/delete/"+id)
 
}

}
