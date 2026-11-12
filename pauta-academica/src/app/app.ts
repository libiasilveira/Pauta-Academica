import { Component, signal } from '@angular/core';
import { Gerenciador } from '.src/app/components';

@Component({
  selector: 'app-root',
  imports: [Gerenciador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pauta-academica');
}
