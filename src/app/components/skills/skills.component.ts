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

  public listIdioma: Idioma[];

  public idiomaNuevo: Idioma = new Idioma(null, "", "");

  public posicionArrayIdioma: number = -1;

  public idIdiomaSelc: number = -1;

  constructor(private userService: UserService, private idiomaService: IdiomaService) { }

  ngOnInit(): void {
    this.userService.userLogOn$.subscribe(
      (response) => { this.userLogOnStatus = response; }
    );
    this.getIdioma();
  }

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

  public updateIdioma(i:number){
    this.idiomaService.updateIdioma(this.listIdioma[i]).subscribe(
      (response)=>{
        this.getIdioma();
        this.posicionArrayIdioma=-1;
      }
    );    
    document.getElementById("btn-cancelar-editIdioma").click();
  }


  public consultaDeleteIdioma(i: number) {
    this.posicionArrayIdioma = i;

  }


}
