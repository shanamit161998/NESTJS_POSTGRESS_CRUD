import { Body, Controller, Post } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Post()
    addProduct(@Body('title') prodTitle, @Body('description') prodDesc, @Body('price') prodPrice): any {
        const generatedId = this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {
            id: generatedId
        }
    }

    @Get()
    getAllProducts() {
        return this.productService.getProducts()
    }

    @Get(':id')
    getSingleProduct(@Param('id') prodString: String) {
        return this.productService.getSingleProduct(prodString)
    }
}
