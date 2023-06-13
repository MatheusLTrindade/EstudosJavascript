class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const nike = new Product("Tenis", "Nike Air Force 1", 150.00)
console.log(nike)

nike.addToStock(10)
console.log(nike)

const priceWithDiscount = nike.calculateDiscount(10)
console.log(`Price: $${priceWithDiscount}`)