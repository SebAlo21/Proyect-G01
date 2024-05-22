import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,LoginButtonComponent,LoginFormComponent,LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isActivateForm:boolean=false;
  isLogged:boolean=false;
  username:string='';


userlogged(){
    if(this.isLogged){
      this.isLogged=false;
      this.activeForm()
    }else{
      this.isLogged=true;
      this.activeForm()
      this.username='';
    }
  }

 activeForm(){
  if(this.isActivateForm){
    this.isActivateForm=false;
  }else{
    this.isActivateForm=true;
  }
 }

 getUsername(name:string){
  this.username=name
 }

 getStateForm(state:boolean){
  this.isActivateForm=state;
  
 }

}

