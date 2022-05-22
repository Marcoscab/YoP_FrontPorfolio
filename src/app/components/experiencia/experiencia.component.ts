import { ExpercienciaService } from './../../services/experciencia.service';
import { Experiencia } from './../../models/experiencia.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public listExperiencia: Experiencia[];

  public userLogOnStatus: boolean = false;

  public experienciaNueva: Experiencia = new Experiencia(null, "", "", "", "", "", "", "");

  public posicionArrayExperiencia: number = -1;

  public idExperienciaSelc:number=-1;

  constructor(private experienciaService: ExpercienciaService, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.userLogOn$.subscribe(
      (response) => { this.userLogOnStatus = response; }
    );

    this.getExperiencia();
  }


  public getExperiencia() {
    this.experienciaService.getExperciencia().subscribe(
      (response) => {this.listExperiencia = response;}
    );
  }


  public addExperiencia() {
    this.experienciaService.addExperiencia(this.experienciaNueva).subscribe(
      (response) => {this.getExperiencia(); }
    );
    this.experienciaNueva = new Experiencia(null, "", "", "", "", "", "", "");
    document.getElementById("btn-cancelar-experienciaAgregar").click();
    
  }

  public updateExperiencia(i:number){
    this.experienciaService.updateExperiencia(this.listExperiencia[i]).subscribe(
     (response)=>{
       this.posicionArrayExperiencia=-1;
       this.getExperiencia();//Actualizo listado
     }
   );
   document.getElementById("btn-cancelar-editExperiencia").click();

  }


  public deleteExperiencia(i: number) {
    this.idExperienciaSelc = this.listExperiencia[i].id;
    this.experienciaService.deleteExperiencia(this.idExperienciaSelc).subscribe(
      (response) => {
        this.posicionArrayExperiencia=-1;
        this.getExperiencia();
      }
    );
    document.getElementById("btn-cancelar-borrarExperiencia").click();
     }

  public consultaDeleteExperiencia(i: number) {
    this.posicionArrayExperiencia = i;

  }

}
