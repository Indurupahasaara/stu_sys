import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  username!: string;
  password!: string;
  constructor(
  
    public formbuilder: FormBuilder,
     private router:Router) { 
  
     }

  ngOnInit(): void {
  }

  login(){
    if (this.username =='induru'&& this.password =='12345'){

      this.router.navigate(['/lec'])
      this.router.navigate(['/registration'])
    }{
      alert('User name or password incorrect');
    }
  }

  

}


