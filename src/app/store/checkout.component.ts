import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';

@Component({
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
    orderSent = false;
    submitted = false;

    constructor(public reepository: OrderRepository, public order: Order) {}

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.reepository.saveOrder(this.order)
            .subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}
