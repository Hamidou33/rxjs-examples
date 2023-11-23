import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-creation-jointures',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './creation-jointures.component.html',
  styleUrl: './creation-jointures.component.scss'
})
export class CreationJointuresComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
