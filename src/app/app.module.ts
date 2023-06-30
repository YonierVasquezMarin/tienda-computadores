import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import CarritoComprasComponent from 'src/stories/carrito-compras/carrito-compras.component';
import { HeaderTiendaComponent } from './header-tienda/header-tienda.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import CardProductoComponent from 'src/stories/card-producto/card-producto.component';
import BtnToggleProductoEnCarritoComponent from 'src/stories/btn-toggle-producto-en-carrito/btn-toggle-producto-en-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComprasComponent,
    HeaderTiendaComponent,
    ListaProductosComponent,
    CardProductoComponent,
    BtnToggleProductoEnCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
