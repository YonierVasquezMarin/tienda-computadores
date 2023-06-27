import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.scss'],
})
export default class CarritoComprasComponent {
  @Input()
  cantidad: number = 0;

  @Output()
  irAlCarrito = new EventEmitter<Event>();
}
