import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icone',
  templateUrl: './icone.component.html',
  styleUrls: ['./icone.component.css']
})
export class IconeComponent {
  @Input() icone: string = '';
  @Input() largura: number = 44;

  constructor(private sanitizer: DomSanitizer) {}

  get iconeSrc(): SafeHtml {
    switch (this.icone) {
      case 'carrinho':
        return this.sanitizer.bypassSecurityTrustHtml(this.carrinho);
      case 'usuario':
        return this.sanitizer.bypassSecurityTrustHtml(this.usuario);
      case 'search':
        return this.sanitizer.bypassSecurityTrustHtml(this.search);
      default:
        return this.sanitizer.bypassSecurityTrustHtml(this.holder);
    }
  }

  private carrinho = `
    <svg width="${this.largura}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66663 2.66666H13.3333L20.48 38.3733C20.7238 39.6011 21.3917 40.7039 22.3667 41.4888C23.3418 42.2737 24.5618 42.6906 25.8133 42.6667H51.7333C52.9848 42.6906 54.2048 42.2737 55.1798 41.4888C56.1549 40.7039 56.8228 39.6011 57.0666 38.3733L61.3333 16H16M26.6666 56C26.6666 57.4728 25.4727 58.6667 24 58.6667C22.5272 58.6667 21.3333 57.4728 21.3333 56C21.3333 54.5272 22.5272 53.3333 24 53.3333C25.4727 53.3333 26.6666 54.5272 26.6666 56ZM56 56C56 57.4728 54.806 58.6667 53.3333 58.6667C51.8605 58.6667 50.6666 57.4728 50.6666 56C50.6666 54.5272 51.8605 53.3333 53.3333 53.3333C54.806 53.3333 56 54.5272 56 56Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  private usuario = `
    <svg width="${this.largura}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M53.3333 56V50.6667C53.3333 47.8377 52.2095 45.1246 50.2091 43.1242C48.2087 41.1238 45.4956 40 42.6666 40H21.3333C18.5043 40 15.7912 41.1238 13.7908 43.1242C11.7904 45.1246 10.6666 47.8377 10.6666 50.6667V56M42.6666 18.6667C42.6666 24.5577 37.891 29.3333 32 29.3333C26.1089 29.3333 21.3333 24.5577 21.3333 18.6667C21.3333 12.7756 26.1089 8 32 8C37.891 8 42.6666 12.7756 42.6666 18.6667Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  private holder = `
    <svg width="${this.largura}" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M135 45L45 135M45 45L135 135" stroke="#1E1E1E" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  private search = `
    <svg width="${this.largura}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.3" d="M42 42L33.3 33.3M38 22C38 30.8366 30.8366 38 22 38C13.1634 38 6 30.8366 6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}