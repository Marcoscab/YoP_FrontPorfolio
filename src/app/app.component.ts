import { UserService } from './services/user.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from './models/persona.model';
import { PersonaService } from './services/persona.service';
import { Usuario } from './models/usuario.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'porfolioapp';
  public per: Persona;
 
  constructor(private scroller: ViewportScroller, private router: Router, private personaService: PersonaService, private userService: UserService) {

  }
  ngOnInit(): void {
    // this.router.navigate(["/"]);

  }

  goToSkills() {
    this.scroller.scrollToAnchor("skills");
  }
}
