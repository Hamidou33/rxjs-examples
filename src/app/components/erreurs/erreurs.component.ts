import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-erreurs',
  standalone: false,
  templateUrl: './erreurs.component.html',
  styleUrl: './erreurs.component.scss'
})
export class ErreursComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
