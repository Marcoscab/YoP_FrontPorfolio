import { Persona } from '../../models/persona.model';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public persona: Persona;
  private url: String = ""

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getData().subscribe((data) => {
      this.persona = data;
      
    });
  }

  public getPersona() {
    this.personaService.getData().subscribe(
      (data) => {
        this.persona = data;
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public editPersona() {
    document.getElementById("btn-cancelar").click();
    this.personaService.updatePersona(this.persona).subscribe(
      (respuesta: Persona) => {
        this.getPersona();
      },
      (error: HttpErrorResponse) => { alert(error.message) }
    );
    
  }


}
