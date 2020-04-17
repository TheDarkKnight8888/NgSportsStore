import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
    templateUrl: './productEditor.component.html'
})
export class ProductEditorComponent {
    editing = false;
    product = new Product();

    constructor(private repository: ProductRepository, private router: Router, activeRoute: ActivatedRoute) {
        this.editing = activeRoute.snapshot.params['mode'] === 'edit';
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(Number(activeRoute.snapshot.params['id'])));
        }
    }

    save(form: NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl('/admin/main/products');
    }

}
