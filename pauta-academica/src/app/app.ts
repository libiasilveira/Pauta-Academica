import { Component, signal } from '@angular/core';
import { Gerenciador } from './components';

@Component({
  selector: 'app-root',
  imports: [Gerenciador],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pauta-academica');
}
