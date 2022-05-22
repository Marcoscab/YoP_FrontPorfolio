import { Educacion } from './../../models/educacion.model';
import { EducacionService } from './../../services/educacion.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public userLogOnStatus: boolean = false;

  public listEducacion:Educacion[];

  public educacionNueva: Educacion = new Educacion(null,"","","","","");

  public posicionArrayEducacion: number = -1;

  public idEducacionSelc:number=-1;



  constructor(private educacionService:EducacionService, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.userLogOn$.subscribe(
      (response)=>{this.userLogOnStatus=response;}
    );

    this.getEducacion();

  }


  public getEducacion(){
    this.educacionService.getEducacion().subscribe(
      (response)=>{this.listEducacion=response;
      console.log(response);
    }
    );
  }

  public addEducacion(){
    this.educacionService.addEducacion(this.educacionNueva).subscribe(
      (response)=>{this.getEducacion();}
    );
    this.educacionNueva = new Educacion(null,"","","","","");
    document.getElementById("btn-cancelar-educacionAgregar").click();
  }


  public updateEducacion(i:number){
    this.educacionService.updateEducacion(this.listEducacion[i]).subscribe(
      (response)=>{
        this.getEducacion();
        this.posicionArrayEducacion=-1;
      }
    );    
  }


  public deleteEducacion(i: number) {
    this.idEducacionSelc = this.listEducacion[i].id;
    this.educacionService.deleteEducacion(this.idEducacionSelc).subscribe(
      (response) => {
        this.posicionArrayEducacion=-1;
        this.getEducacion();
      }
    );
    document.getElementById("btn-cancelar-borrarEducacion").click();
     }

  public consultaDeleteEducacion(i: number) {
    this.posicionArrayEducacion = i;

  }





}
