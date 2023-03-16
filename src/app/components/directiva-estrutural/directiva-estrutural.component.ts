import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-estrutural',
  templateUrl: './directiva-estrutural.component.html',
  styleUrls: ['./directiva-estrutural.component.css'],
})
export class DirectivaEstruturalComponent {
  exibirNome: boolean = true;

  alterar() {
    this.exibirNome = !this.exibirNome;
  }
}
