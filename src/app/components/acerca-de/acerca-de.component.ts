import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
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

  constructor(private userService: UserService, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getData().subscribe(
      (response) => {this.persona = response;}
    );  

    this.userService.userLogOn$.subscribe(
      (userSatus: boolean) => {this.userLogOnStatus = userSatus;}
    );
  }


  //Metodos para Acerca de.
  public getPersona() {
    this.personaService.getData().subscribe(
      (response) => {this.persona = response;}
    );
  }

  public editPersona() {
    document.getElementById("btn-cancelar-banner").click();
    this.personaService.updatePersona(this.persona).subscribe(
      (respuesta: Persona) => { this.getPersona(); },
      (error: HttpErrorResponse) => { alert(error.message) }
    );
    
  }




}
