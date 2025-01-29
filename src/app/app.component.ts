import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { GradienteComponent } from './components/gradiente/gradiente.component';
import CoresCustomizadas from '../utils/CoresCustomizadas';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconeComponent } from './components/icone/icone.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CardComponent, CarrosselComponent, GradienteComponent, NavbarComponent, IconeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit(): void {
    document.body.style.backgroundColor = CoresCustomizadas.padraoSite();
  }

  CoresCustomizadas = CoresCustomizadas;

  title = 'cacs';
  slides = [
    'assets/vermelho.png',
    'assets/verde.png',
    'assets/azul.png'
  ];
}
