import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct, RemoveProduct } from 'src/actions/products.actions';
import { ProductModel } from 'src/models/product.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {
  productos: ProductModel[] = [
    {
      id: 1,
      nombre: 'Asus VivoBook',
      precio: 3900000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 2,
      nombre: 'MacBook Pro',
      precio: 12000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 3,
      nombre: 'Dell XPS',
      precio: 8000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 4,
      nombre: 'HP Pavilion',
      precio: 5000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 5,
      nombre: 'Lenovo ThinkPad',
      precio: 6000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 6,
      nombre: 'Acer Aspire',
      precio: 4000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 7,
      nombre: 'Samsung Galaxy Book',
      precio: 7000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 8,
      nombre: 'Huawei MateBook',
      precio: 6000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 9,
      nombre: 'MSI Prestige',
      precio: 9000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 10,
      nombre: 'LG Gram',
      precio: 8000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 11,
      nombre: 'Razer Blade',
      precio: 10000000,
      sinAgregarAlCarrito: true,
    },
    {
      id: 12,
      nombre: 'Microsoft Surface',
      precio: 11000000,
      sinAgregarAlCarrito: true,
    },
  ];

  constructor(public store: Store) { }

  toggleProducto(producto: ProductModel) {
    this.#toggleProductoEnCarrito(producto);
    this.#cambiarEstadoDelProducto(producto);
  }

  #cambiarEstadoDelProducto(producto: ProductModel) {
    producto.sinAgregarAlCarrito = !producto.sinAgregarAlCarrito;
  }

  #toggleProductoEnCarrito(producto: ProductModel) {
    this.#obtenerEstadoDelProducto(producto)
      ? this.#guardarProductoEnCarrito(producto)
      : this.#eliminarProductoDelCarrito(producto);
  }

  #obtenerEstadoDelProducto(producto: ProductModel) {
    return producto.sinAgregarAlCarrito === true;
  }

  #guardarProductoEnCarrito(producto: ProductModel) {
    this.store.dispatch(new AddProduct(producto));
  }

  #eliminarProductoDelCarrito(producto: ProductModel) {
    this.store.dispatch(new RemoveProduct(producto));
  }

}
