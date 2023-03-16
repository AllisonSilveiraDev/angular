import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 6 },
    { name: 'Tom', type: 'Cat', age: 2 },
    { name: 'Frida', type: 'Dog', age: 7 },
    { name: 'Bom', type: 'Horse', age: 16 },
    { name: 'Louro', type: 'Bird', age: 35 },
  ];

  animailsDetails = '';

  showAge(animal: Animal): void {
    this.animailsDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
