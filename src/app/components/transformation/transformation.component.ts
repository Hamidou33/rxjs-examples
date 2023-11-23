import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transformation',
  standalone: false,
  templateUrl: './transformation.component.html',
  styleUrl: './transformation.component.scss'
})
export class TransformationComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
