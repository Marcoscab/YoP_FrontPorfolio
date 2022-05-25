import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public userLogOnStatus: boolean = false;

    //Atributos para Proyecto
    public listProyecto: Proyecto[];

    public proyectoNuevo: Proyecto = new Proyecto(null, "", "", "", "", "", "");
  
    public posicionArrayProyecto: number = -1;
  
    public idProyectoSelc: number = -1;

  constructor(private userService:UserService, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.userService.userLogOn$.subscribe(
      (response)=>{this.userLogOnStatus=response}
    );
    this.getProyecto();

  }

//----------------METODOS PROYECTO----------------//
public getProyecto() {
  this.proyectoService.getProyecto().subscribe(
    (response) => { this.listProyecto = response; }
  );
}

public addProyecto() {
  this.proyectoService.addProyecto(this.proyectoNuevo).subscribe(
    (response) => {
      this.getProyecto();
      this.proyectoNuevo = new Proyecto(null, "", "", "", "", "", "");
      document.getElementById("btn-cancelar-proyectoAgregar").click();
    }
  );
}

public deleteProyecto(i: number) {
  this.idProyectoSelc = this.listProyecto[i].id;
  this.proyectoService.deleteProyecto(this.idProyectoSelc).subscribe(
    (response) => {
      this.posicionArrayProyecto = -1;
      this.getProyecto();
    }
  );
  document.getElementById("btn-cancelar-borrarProyecto").click();
}

public updateProyecto(i: number) {
  this.proyectoService.updateProyecto(this.listProyecto[i]).subscribe(
    (response) => {
      this.getProyecto();
      this.posicionArrayProyecto = -1;
    }
  );
  document.getElementById("btn-cancelar-editProyecto").click();
}


public consultaDeleteProyecto(i: number) {
  this.posicionArrayProyecto = i;

}


}
