import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    
  }
  
}
