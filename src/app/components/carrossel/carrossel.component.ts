import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GradienteComponent } from '../gradiente/gradiente.component';

@Component({
  selector: 'app-carrossel',
  imports: [CommonModule, GradienteComponent],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent {
  @Input() slides: string[] = [];
  indice: number = 0;

  voltar() {
    this.indice = this.indice === 0 ? this.slides.length - 1 : this.indice - 1;
  }

  avancar() {
    this.indice = this.indice === this.slides.length - 1 ? 0 : this.indice + 1;
  }

  get transform() {
    return `translateX(-${this.indice * 100 / this.slides.length}%)`;
  }

  get tamanhoImagem() {
    return { width: `${100 / this.slides.length}%` };
  }

  get configBotao() {
    return 'p-1 rounded-full shadow bg-white/90 hover:bg-white';
  }
}
