import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-jointure',
  standalone: true,
  templateUrl: './jointure.component.html',
  styleUrl: './jointure.component.scss'
})
export class JointureComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
