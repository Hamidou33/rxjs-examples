import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [
    SharedModule,
    NgOptimizedImage
  ],
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
