import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded = false;

    constructor(private dataSource: RestDataSource) {}

    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }

        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
        .subscribe(orders => this.orders = orders);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order)
        .subscribe(o => {this.orders.splice(this.orders.findIndex(or => or.id === o.id), 1, order); 
        });
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id === o.id));
        });
    }
}
