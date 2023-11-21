import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {
  }
  opChoices(label: string): void {
    switch (label) {
      case label:
        this.router.navigate(['/' + `${label}`]).then();
        console.log('label', label)
        break;
      default:
        break;
    }
  }
}
