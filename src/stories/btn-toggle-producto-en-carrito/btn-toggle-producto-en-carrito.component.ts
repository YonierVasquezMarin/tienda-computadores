import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btn-toggle-producto-en-carrito',
  templateUrl: './btn-toggle-producto-en-carrito.component.html',
  styleUrls: ['./btn-toggle-producto-en-carrito.scss'],
})
export default class BtnToggleProductoEnCarritoComponent {
  @Input()
  productoSinAgregar: boolean = true;

  @Output()
  toggleProductoEnCarrito = new EventEmitter();

  toggleProducto() {
    this.toggleProductoEnCarrito.emit();
  }
}
