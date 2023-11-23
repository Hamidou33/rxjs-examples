import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private route: Router) {
  }
  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
