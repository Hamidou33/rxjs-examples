import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-creation',
  standalone: false,
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss'
})
export class CreationComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
