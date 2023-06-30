import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.scss'],
})
export default class CardProductoComponent {
  @Input()
  cantidad: number = 0;

  @Output()
  irAlCarrito = new EventEmitter<Event>();

  toggleProductoEnCarrito() {
    
  }
}
