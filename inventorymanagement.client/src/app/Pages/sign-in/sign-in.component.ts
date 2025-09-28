import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  formBuilder: FormBuilder = inject(FormBuilder);
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    
    this.submitted = true;
    const { email, password } = this.form.value;

    if (this.form.invalid) {
      return;
    }

    const fakeToken = '12345';
    this.authService.login(fakeToken);
    this.router.navigate(['/dashboard']);
  }
}
