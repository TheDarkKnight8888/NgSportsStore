import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';


@Injectable()
export class StaticDataSource {

    private products: Product[] = [
        new Product(1, 'Product1', 'Category 1', 'Product 1 (Cateegory 1)', 100),
        new Product(2, 'Product2', 'Category 1', 'Product 2 (Cateegory 1)', 100),
        new Product(3, 'Product3', 'Category 1', 'Product 3 (Cateegory 1)', 100),
        new Product(4, 'Product4', 'Category 1', 'Product 4 (Cateegory 1)', 100),
        new Product(5, 'Product5', 'Category 1', 'Product 5 (Cateegory 1)', 100),
        new Product(6, 'Product6', 'Category 2', 'Product 6 (Cateegory 2)', 100),
        new Product(7, 'Product7', 'Category 2', 'Product 7 (Cateegory 2)', 100),
        new Product(8, 'Product8', 'Category 2', 'Product 8 (Cateegory 2)', 100),
        new Product(9, 'Product9', 'Category 2', 'Product 9 (Cateegory 2)', 100),
        new Product(10, 'Product10', 'Category 2', 'Product 10 (Cateegory 2)', 100),
        new Product(11, 'Product11', 'Category 3', 'Product 11 (Cateegory 3)', 100),
        new Product(12, 'Product12', 'Category 3', 'Product 12 (Cateegory 3)', 100),
        new Product(13, 'Product13', 'Category 3', 'Product 13 (Cateegory 3)', 100),
        new Product(14, 'Product14', 'Category 3', 'Product 14 (Cateegory 3)', 100),
        new Product(15, 'Product15', 'Category 3', 'Product 15 (Cateegory 3)', 100),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}
