import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct(title: String, description: String, price: Number): String {
        const prodId = new Date().valueOf().toString()
        const newProduct = new Product(prodId, title, description, price)
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products]
    }

    getSingleProduct(prodString: String) {
        const product = this.products.find((x) => x.title == prodString)
        if (!product) {
            throw new NotFoundException('Could Not find product');
        }
        return { ...product }
    }
}
