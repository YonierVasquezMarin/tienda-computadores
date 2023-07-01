import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { StoreProducts } from 'src/actions/products.actions';
import { Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'header-tienda',
  templateUrl: './header-tienda.component.html',
  styleUrls: ['./header-tienda.component.scss']
})
export class HeaderTiendaComponent {
  @Select(StoreProducts.totalQuantityOfProducts)
  totalQuantityOfProducts!: Observable<number>;
}
