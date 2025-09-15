import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-seller',
  imports: [FormsModule, NgIf, RouterLink, RouterOutlet],
  templateUrl: './seller.html',
  styleUrls: ['./seller.scss'],
})
export class Seller {
  showClientForm = false; // <-- flag for modal

  client = {
    email: '',
  };

  openClientForm() {
    this.showClientForm = true;
  }

  closeClientForm() {
    this.showClientForm = false;
  }

  saveClient() {
    console.log('Client enregistré :', this.client);
    // 👉 ici tu peux envoyer vers ton service backend ou stocker dans un state
    this.closeClientForm();
  }
}
