import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Joaquin';

  userData = {
    email: 'joaquin@gmail.com',
    role: 'Administrator',
  };

  title = 'curso-angular';
}
