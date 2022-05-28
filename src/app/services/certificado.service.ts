
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificado } from './../models/certificado.model';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  private url: string = "http://localhost:8080/porfolio";
  private urlRemote:string = "https://ms-porfolio.herokuapp.com/porfolio";

  constructor(private http:HttpClient) { }


public getCertificado(): Observable<Certificado[]>{

  return this.http.get<Certificado[]>(this.urlRemote+"/certificado/all");

}

public addCertificado(certificado:Certificado): Observable<Certificado>{

  var json ={
    "id": certificado.id,
    "certificado":certificado.certificado
}
   return this.http.post<Certificado>(this.urlRemote+"/certificado/add",json);
}


public deleteCertificado(id:number): Observable<void>{

  return this.http.delete<void>(this.urlRemote+ "/certificado/delete/"+id)
}

public updateCertificado(certificado:Certificado): Observable<Certificado>{

  var json ={
    "id": certificado.id,
    "certificado":certificado.certificado
}
   return this.http.put<Certificado>(this.urlRemote+"/certificado/edit/"+certificado.id,json);
}




}
