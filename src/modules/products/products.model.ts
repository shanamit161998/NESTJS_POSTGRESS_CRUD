export class Product {
    id: String
    title: String
    description: String
    price: Number

    constructor(id: String,title: String,description: String,price: Number){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}