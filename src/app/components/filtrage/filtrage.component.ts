import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-filtrage',
  standalone: false,
  templateUrl: './filtrage.component.html',
  styleUrl: './filtrage.component.scss'
})
export class FiltrageComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
