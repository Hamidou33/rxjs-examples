import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-utilitaires',
  standalone: false,
  templateUrl: './utilitaires.component.html',
  styleUrl: './utilitaires.component.scss'
})
export class UtilitairesComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
