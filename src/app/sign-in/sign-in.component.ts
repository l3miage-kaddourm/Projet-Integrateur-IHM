import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrl: './sign-in.component.css'
})
export class SignInComponent {

	loginForm!: FormGroup;

	constructor(private fb: FormBuilder, private router: Router) { }

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		});
	}

	onSubmit(): void {
		if (this.loginForm.valid) {
			console.log('Form Submitted', this.loginForm.value);
			// Perform login logic here
		}
	}

	navigateToLivreur(): void {
		this.router.navigate(['/delivery-person-page']);
	}

	navigateToPlanificateur(): void {
		this.router.navigate(['/planner/dashboard']);
	}

}
