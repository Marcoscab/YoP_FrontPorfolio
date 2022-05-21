import { Certificado } from './../../models/certificado.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { CertificadoService } from 'src/app/services/certificado.service';
import { PersonaService } from 'src/app/services/persona.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public persona: Persona = new Persona(1, "", "", new Date(), "", "", "", "", "", "");
  private url: String = ""
  public userLogOnStatus: boolean = false;
  public listCertificados: Certificado[];
  public nuevoCertificado: Certificado = new Certificado(null, "");
  public idCertificadoSelc:number=0;
  public posicionArrayCertificado:number=0;

  constructor(private userService: UserService, private personaService: PersonaService, private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    this.personaService.getData().subscribe(
      (response) => {
        this.persona = response;
        console.log(response);
      }
    );

    this.userService.userLogOn$.subscribe(
      (userSatus: boolean) => { this.userLogOnStatus = userSatus; }
    );

    this.certificadoService.getCertificado().subscribe(
      (response) => {
        this.listCertificados = response;
        console.log(response);

      }
    );

  }


  //Metodos para Acerca de.
  public getPersona() {
    this.personaService.getData().subscribe(
      (response) => { this.persona = response; }
    );
  }

  public editPersona() {
    document.getElementById("btn-cancelar-acercade").click();
    this.personaService.updatePersona(this.persona).subscribe(
      (respuesta: Persona) => { this.getPersona(); },
      (error: HttpErrorResponse) => { alert(error.message) }
    );

  }


  //Metodos para Certificados

  public getCertificado() {
    this.certificadoService.getCertificado().subscribe(
      (response) => { this.listCertificados = response; }
    );
  }

  public saveCertificado(): void {
    this.certificadoService.addCertificado(this.nuevoCertificado).subscribe(
      (response: Certificado) => {
        this.getCertificado();
        this.nuevoCertificado.certificado = "";
      }
    );
    document.getElementById("btn-cancelar-agrearCertificado").click();

  }

  public deleteCertificado(i: number) {
    this.idCertificadoSelc = this.listCertificados[i].id;
    this.certificadoService.deleteCertificado(this.idCertificadoSelc).subscribe(
      (response) => { this.getCertificado(); }
    );
    document.getElementById("btn-cancelar-borrarCertificado").click();
  }


  public consultaDeleteCertificado(i: number){
    this.posicionArrayCertificado=i;
     }


     public updateCertificado(i:number){
      this.certificadoService.updateCertificado(this.listCertificados[i]).subscribe(
        (response)=>{
          console.log(response);
          this.getCertificado();//Actualizo listado certificados.
        }
      );
      document.getElementById("btn-cancelar-editCertificado").click();

     }



}
