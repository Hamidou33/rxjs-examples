import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-utilitaires',
  standalone: true,
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
