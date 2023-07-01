import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductModel } from "src/models/product.model";

export class AddProduct {
    static readonly type = '[Products] Add';
    constructor(public producto: ProductModel) {}
}

export class RemoveProduct {
    static readonly type = '[Products] Remove';
    constructor(public producto: ProductModel) {}
}

export interface StoreProductsStateModel {
    products: ProductModel[];
    totalQuantityOfProducts: number;
}

@State<StoreProductsStateModel>({
    name: 'products',
    defaults: {
        products: [],
        totalQuantityOfProducts: 0
    }
})
@Injectable()
export class StoreProducts {
    @Selector()
    static products(state: StoreProductsStateModel) {
        return state.products;
    }

    @Selector()
    static totalQuantityOfProducts(state: StoreProductsStateModel) {
        return state.totalQuantityOfProducts;
    }

    @Action(AddProduct)
    addProduct(ctx: StateContext<StoreProductsStateModel>, action: AddProduct) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            products: [...state.products, action.producto],
            totalQuantityOfProducts: state.totalQuantityOfProducts + 1
        })
    }

    @Action(RemoveProduct)
    removeProduct(ctx: StateContext<StoreProductsStateModel>, action: RemoveProduct) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            products: state.products.filter(producto => producto.id !== action.producto.id),
            totalQuantityOfProducts: state.totalQuantityOfProducts - 1
        })
    }
}