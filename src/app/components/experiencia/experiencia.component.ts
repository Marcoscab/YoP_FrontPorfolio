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

public listExperiencia:Experiencia[];

  public userLogOnStatus:boolean=false;

  public experienciaNueva:Experiencia= new Experiencia(null,"","","","","","","");

  constructor(private experienciaService:ExpercienciaService, private userService:UserService) { }

  ngOnInit(): void {
  
    this.userService.userLogOn$.subscribe(
      (response)=>{this.userLogOnStatus=response;}
    );
    
    this.getExperiencia();
  }


  public getExperiencia(){
    this.experienciaService.getExperciencia().subscribe(
      (response)=>{this.listExperiencia=response;
      console.log(response);}
    );
  }


  public addExperiencia(){
    this.experienciaService.addExperiencia(this.experienciaNueva).subscribe(
      (response)=>{console.log(response);}
    );
    this.experienciaNueva= new Experiencia(null,"","","","","","","");
    document.getElementById("btn-cancelar-experienciaAgregar").click();
    this.getExperiencia;
  }

}
