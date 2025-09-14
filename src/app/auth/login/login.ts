import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/api/auth/authservice';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    HttpClientModule, // ✅ HttpClientModule is correct here
    FormsModule,
    NgIf,
    MatSnackBarModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  notifcation: string = '';
  loading: boolean = false;

  constructor(
    private router: Router,
    private authservice: AuthService,
    private snackBar: MatSnackBar
  ) {}

  navigateToRegister() {
    this.router.navigate(['/signup']);
  }

  Login(form: any) {
    if (form.invalid) {
      this.snackBar.open('❌ Please fill in all required fields.', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });
      return;
    }

    this.loading = true;
    this.authservice.login(this.email, this.password).subscribe({
      next: (response: any) => {
        this.loading = false;
        if (response.message === 'Email or password incorrect') {
          this.snackBar.open(response.message, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
        } else {
          //  localStorage.setItem('token', response.token);
          // this.snackBar.open('✅ ' + response.status, 'OK', {
          //   duration: 3000,
          //   panelClass: ['success-snackbar'],
          // });
          this.router.navigate(['/seller']);
        }
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('❌ Login failed. Try again.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
        });
      },
    });
  }
}
