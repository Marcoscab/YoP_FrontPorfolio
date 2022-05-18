import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userFromDb: Usuario;
  userFromFront:Usuario = new Usuario(1,"","");
  userLogOn:boolean=false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (response: Usuario) => {
        this.userFromDb = response;
        console.log(this.userFromDb.userName);
      }
    );
  }

  LogOnUsuer(){
    
    if((this.userFromDb.userName===this.userFromFront.userName) && (this.userFromDb.password===this.userFromFront.password)){
      this.userService.updateUserLogOnStatus(true);
      this.userLogOn=true;
    }else{
      alert("Usuario o contraseña incorrectos")
    }

    document.getElementById("btn-cancelar").click();

  }

  LogOutUser(){
    this.userService.updateUserLogOnStatus(false);
    this.userLogOn=false;
  }



}
