import { Component } from '@angular/core';

@Component({
  selector: 'app-creation',
  standalone: false,
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss'
})
export class CreationComponent {
  constructor() {
    console.log('je suis present');
  }
}
