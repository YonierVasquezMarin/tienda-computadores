import { Component } from '@angular/core';
import { ProductModel } from 'src/models/product.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {
  productos: ProductModel[] = [
    {
      nombre: 'Asus VivoBook',
      precio: 3900000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'MacBook Pro',
      precio: 12000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'Dell XPS',
      precio: 8000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'HP Pavilion',
      precio: 5000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'Lenovo ThinkPad',
      precio: 6000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'Acer Aspire',
      precio: 4000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'Samsung Galaxy Book',
      precio: 7000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'Huawei MateBook',
      precio: 6000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'MSI Prestige',
      precio: 9000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'LG Gram',
      precio: 8000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'Razer Blade',
      precio: 10000000,
      sinAgregarAlCarrito: true,
    },
    {
      nombre: 'Microsoft Surface',
      precio: 11000000,
      sinAgregarAlCarrito: true,
    },
  ];

  toggleProductoEnCarrito(producto: ProductModel) {
    producto.sinAgregarAlCarrito = !producto.sinAgregarAlCarrito;
  }
}
