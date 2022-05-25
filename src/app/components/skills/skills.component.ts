import { LenguajeProgramacionService } from './../../services/lenguaje-programacion.service';
import { LenguajeProgramacion } from './../../models/lenguaje-programacion.model';
import { Idioma } from './../../models/idioma.model';
import { IdiomaService } from './../../services/idioma.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public userLogOnStatus: boolean = false;

  //Atributos para Idioma
  public listIdioma: Idioma[];

  public idiomaNuevo: Idioma = new Idioma(null, "", "");

  public posicionArrayIdioma: number = -1;

  public idIdiomaSelc: number = -1;

  //Atributos para Lenguaje
  public listLenguaje: LenguajeProgramacion[];

  public lenguajeNuevo: LenguajeProgramacion = new LenguajeProgramacion(null, "", "");

  public posicionArrayLenguaje: number = -1;

  public idLenguajeSelc: number = -1;

  constructor(
    private userService: UserService,
    private idiomaService: IdiomaService,
    private lenguajeService: LenguajeProgramacionService) { }

  ngOnInit(): void {
    this.userService.userLogOn$.subscribe(
      (response) => { this.userLogOnStatus = response; }
    );
    this.getIdioma();
    this.getLenguaje();
    console.log(this.listLenguaje);
  }


  //----------------METODOS IDIOOMA----------------//
  public getIdioma() {
    this.idiomaService.getIdioma().subscribe(
      (response) => { this.listIdioma = response; }
    );
  }

  public addIdioma() {
    this.idiomaService.addIdioma(this.idiomaNuevo).subscribe(
      (response) => {
        this.getIdioma();
        this.idiomaNuevo = new Idioma(null, "", "");
        document.getElementById("btn-cancelar-idiomaAgregar").click();
      }
    );
  }

  public deleteIdioma(i: number) {
    this.idIdiomaSelc = this.listIdioma[i].id;
    this.idiomaService.deleteIdioma(this.idIdiomaSelc).subscribe(
      (response) => {
        this.posicionArrayIdioma = -1;
        this.getIdioma();
      }
    );
    document.getElementById("btn-cancelar-borrarIdioma").click();
  }

  public updateIdioma(i: number) {
    this.idiomaService.updateIdioma(this.listIdioma[i]).subscribe(
      (response) => {
        this.getIdioma();
        this.posicionArrayIdioma = -1;
      }
    );
    document.getElementById("btn-cancelar-editIdioma").click();
  }


  public consultaDeleteIdioma(i: number) {
    this.posicionArrayIdioma = i;

  }

  //----------------METODOS LENGUAJE----------------//
  public getLenguaje() {
    this.lenguajeService.getLenguaje().subscribe(
      (response) => { this.listLenguaje = response; }
    );
  }

  public addLenguaje() {
    this.lenguajeService.addLenguaje(this.lenguajeNuevo).subscribe(
      (response) => {
        this.getLenguaje();
        this.lenguajeNuevo = new LenguajeProgramacion(null, "", "");
        document.getElementById("btn-cancelar-lenguajeAgregar").click();
      }
    );
  }

  public deleteLenguaje(i: number) {
    this.idLenguajeSelc = this.listLenguaje[i].id;
    this.lenguajeService.deleteLenguaje(this.idLenguajeSelc).subscribe(
      (response) => {
        this.posicionArrayLenguaje = -1;
        this.getLenguaje();
      }
    );
    document.getElementById("btn-cancelar-borrarLenguaje").click();
  }

  public updateLenguaje(i: number) {
    this.lenguajeService.updateLenguaje(this.listLenguaje[i]).subscribe(
      (response) => {
        this.getLenguaje();
        this.posicionArrayLenguaje = -1;
      }
    );
    document.getElementById("btn-cancelar-editLenguaje").click();
  }


  public consultaDeleteLenguaje(i: number) {
    this.posicionArrayLenguaje = i;

  }




}
