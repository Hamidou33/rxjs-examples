import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-multicasting',
  standalone: false,
  templateUrl: './multicasting.component.html',
  styleUrl: './multicasting.component.scss'
})
export class MulticastingComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
