import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  
  resultado: any = 0;

  somar(valor: any) {
    this.resultado = valor + valor;
    alert(this.resultado);
  }
}
