import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyListComponent } from '../../articles/my-list/my-list.component';
import { OutletContext, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,MyListComponent,RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  
  username:string=''

  isLogged:boolean=false;
  

  @Output() sendUsernameEvent=new EventEmitter<string>();
  @Output() sendStateFormEvent=new EventEmitter<boolean>();

  sendUsername(name:string){
    if(name!=''){
      this.isLogged=true
      this.sendUsernameEvent.emit(name);
      
    }else{
      window.alert("Ingresar Nombre Valido")
    }

  }
  
  sendStateForm(state:boolean){
    this.sendStateFormEvent.emit(state)
  }
  

}
