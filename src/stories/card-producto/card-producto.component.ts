import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.scss'],
})
export default class CardProductoComponent {
  @Input()
  nombre: string = '';

  @Input()
  precio: number = 0;

  @Input()
  productoSinAgregar: boolean = false;

  @Output()
  toggleProduct = new EventEmitter<Event>();

  toggleProductoEnCarrito() {
    this.toggleProduct.emit();
  }
}
