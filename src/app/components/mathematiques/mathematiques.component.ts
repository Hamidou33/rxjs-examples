import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mathematiques',
  standalone: true,
  templateUrl: './mathematiques.component.html',
  styleUrl: './mathematiques.component.scss'
})
export class MathematiquesComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
