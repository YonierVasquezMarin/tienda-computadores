import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-producto',
  templateUrl: './btn-toggle-producto-en-carrito.component.html',
  styleUrls: ['./btn-toggle-producto-en-carrito.scss'],
})
export default class BtnToggleProductoEnCarritoComponent {
  @Input()
  productoSinAgregar: boolean = true;

  @Output()
  toggleProductoEnCarrito = new EventEmitter<void>();

  toggleProducto() {
    this.toggleProductoEnCarrito.emit();
  }
}
