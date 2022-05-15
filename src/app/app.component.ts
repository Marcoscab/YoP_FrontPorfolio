import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from './models/persona.model';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'porfolioapp';
  public per: Persona;

  constructor(private scroller: ViewportScroller, private router: Router, private personaService: PersonaService) {

  }
  ngOnInit(): void {
    // this.router.navigate(["/"]);
    this.personaService.getData().subscribe((data: Persona) => {
      this.per = data;
      console.log(data);
    });
  }

  goToSkills() {
    this.scroller.scrollToAnchor("skills");
  }
}
