
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificado } from './../models/certificado.model';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  private url: string = "http://localhost:8080/porfolio";

  constructor(private http:HttpClient) { }


public getCertificado(): Observable<Certificado[]>{

  return this.http.get<Certificado[]>(this.url+"/certificado/all");

}

public addCertificado(certificado:Certificado): Observable<Certificado>{

  var json ={
    "id": certificado.id,
    "certificado":certificado.certificado
}
   return this.http.post<Certificado>(this.url+"/certificado/add",json);
}


public deleteCertificado(id:number): Observable<void>{

  return this.http.delete<void>(this.url+ "/certificado/delete/"+id)
}

public updateCertificado(certificado:Certificado): Observable<Certificado>{

  var json ={
    "id": certificado.id,
    "certificado":certificado.certificado
}
   return this.http.put<Certificado>(this.url+"/certificado/edit/"+certificado.id,json);
}




}
