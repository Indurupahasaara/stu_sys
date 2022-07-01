import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  stulog():void{
    this.router.navigate(['/registration'])
  }

  leclog() :void{
    this.router.navigate(['/lec'])
  }

  logout() :void{
    this.router.navigate(['/sign'])
  }
}
