import { Component, OnInit } from '@angular/core';
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
  
   
     private router:Router) { 
  
     }

  ngOnInit(): void {
  }

  login(){
    console.log(this.username)
    if (this.username =='induru'&& this.password =='12345') {
      alert("login Sucessfully !");
      localStorage.setItem('userId', '1');
      localStorage.setItem('userName', this.username);
      this.router.navigate(['/welcome'])
      // this.router.navigate(['/registration'])
      sessionStorage.Abondaon;
    }else{
      alert('User name or password incorrect');
    }
  } 
}


