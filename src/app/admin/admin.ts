import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {}
