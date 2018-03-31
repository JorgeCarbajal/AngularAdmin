import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcetaje: number = 50;
  porcetaje1: number = 20;

  constructor() { }

  ngOnInit() {
  }
  CambiarValor(valor) {

    this.porcetaje += valor;
  }

  actaliza(event: number) {
console.log('event', event);
  }
}
