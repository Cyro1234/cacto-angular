import { Component, Input } from '@angular/core';
import CoresCustomizadas from '../../../utils/CoresCustomizadas';
import { IconeComponent } from '../icone/icone.component';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconeComponent, CommonModule, PesquisaComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() cor: string = '';

  logoSite = 'assets/LOGO.png';

  @Input() logo: string = 'true';
  @Input() icon: string = 'true';
  @Input() searchMD: string = 'false';

  getCor(): string {
    if (this.cor === "") {
      return CoresCustomizadas.verde();
    }
    return this.cor;
  }

  get temLogo(): string {

    if (this.logo === 'false') {
      return 'hidden'
    }
    return (
      ''
    )
  }

  get temIcone() {
    if (this.icon === 'false') {
      return 'hidden'
    }
    return (
      ''
    )
  }

  get temSearchMD() {
    if (this.searchMD === 'true') {
      return ''
    }
    return (
      'max-md:hidden'
    )
  }

  get temGapIcon() {
    if (this.icon === 'false') {
      return ''
    }
    return 'gap-[3vw]'
  }
}
