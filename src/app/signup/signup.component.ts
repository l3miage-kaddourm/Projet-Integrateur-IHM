import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    console.log("User Data:", this.user);
    this.authService.setCurrentUser(this.user);
    this.router.navigate(['/']);
  }
}
