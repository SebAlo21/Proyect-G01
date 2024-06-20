import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { loginServices } from '../../services/login-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  formLogin:FormGroup=new FormGroup({})
  errorRegistro:boolean=false
  constructor(private usuarioService:loginServices,private router:Router){}
  
  ngOnInit(): void {
    this.formulario()
  }
  
  formulario(){
    this.formLogin=new FormGroup({
      nombre:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
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
  
  async enviarDatosRegistro(){ 
    try {
      const response= await this.usuarioService.registrarUsuarios(this.formLogin.value).toPromise()
      if(response.data){
        this.router.navigate(['/login']);  
      }else{
        this.errorRegistro=true
      }
    } catch (errorResponse) {
      this.errorRegistro=true
    }
  } 

  
  
}
