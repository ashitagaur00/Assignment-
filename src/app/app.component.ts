import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Badminton-Analysis';
  constructor(private router: Router) {
    this.router.navigate(['/dashboard']);
  }
  
}

