import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl, FormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { loginServices } from '../../services/login-service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  errorlogin:boolean=false
  formLogin:FormGroup=new FormGroup({})
  private router: Router = new Router;
  
  constructor(private usuarioService:loginServices,private cokkie:CookieService){ }

  ngOnInit(): void {
    this.formLogin=new FormGroup({
      correo: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      contraseña:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(22)
      ])
    })
  }

async enviarDatosLogin(){ 
    try {
     const response= await this.usuarioService.enviarCredencial(this.formLogin.value).toPromise()
    
      const {token}=response.data 
      const myFecha:Date=new Date()
      myFecha.setHours(myFecha.getHours()+1)
      this.cokkie.set('tokenUsuario',token,myFecha)
      this.router.navigate(['/']);
 
    } catch (error) {
      console.log("Error de auten",error)
      this.errorlogin=true
    }
  } 
}
