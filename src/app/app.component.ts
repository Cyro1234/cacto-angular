import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CardComponent, CarrosselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cacs';
  slides = [
    'assets/vermelho.png',
    'assets/verde.png',
    'assets/azul.png'
  ];
}
