import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputComponent } from '@/shared/components/form-input.component/form-input.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormInputComponent, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Input() isLoading = false;
  @Output() login = new EventEmitter<any>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.login.emit(this.loginForm.value);
  }
}
