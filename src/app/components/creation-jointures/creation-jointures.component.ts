import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-creation-jointures',
  standalone: false,
  templateUrl: './creation-jointures.component.html',
  styleUrl: './creation-jointures.component.scss',

})
export class CreationJointuresComponent {
  constructor(private route: Router) {
  }

  goToHome(): void {
    this.route.navigate(['/home']).then()
  }
}
