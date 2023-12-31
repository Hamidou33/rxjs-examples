import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-erreurs',
  standalone: true,
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
