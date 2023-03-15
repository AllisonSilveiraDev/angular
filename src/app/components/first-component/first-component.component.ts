import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Matheus';
  age: number = 28;
  job = 'Programmer';
  hobbies = ['Tocar violão', 'jogar videogame', 'estudar'];
  car = {
    name: 'Polo',
    year: 2021,
  };
  constructor() {}
}
