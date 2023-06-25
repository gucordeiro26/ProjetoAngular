import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  exibirValor = '';

  clickBotao(button: string) {
    this.exibirValor += button;
  }

  Limpar() {
    this.exibirValor = '';
  }

  Calcular() {
    try {
      const resultado = eval(this.exibirValor);
      this.exibirValor = resultado.toString();
    } catch (error) {
      this.exibirValor = 'Error';
    }
  }

  calcularPercentual() {
    try {
      const percentage = eval(this.exibirValor) / 100;
      this.exibirValor = percentage.toString();
    } catch (error) {
      this.exibirValor = 'Error';
    }
  }

  apagarUltimaNumero() {
    this.exibirValor = this.exibirValor.slice(0, -1);
  }
}