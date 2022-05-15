import { Persona } from '../../models/persona.model';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public persona:Persona;
  private url:String=""

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getData().subscribe((data) =>{
      this.persona= data;
      console.log(data);
      

      
    });
  }


}
