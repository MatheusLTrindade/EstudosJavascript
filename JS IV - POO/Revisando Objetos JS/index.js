function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = (quantity) => {
        this.inStock += quantity
    }
    this.save = () => {
        // salva no banco de dados
    }
}

const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure", "mediavel"]

const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon)
console.log(eragon.title)

const eldest = new Book("Eldest", 644, tags, author)
console.log(eldest)

eragon.addOnStock(50)
console.log(eragon.inStock)

eldest.published = true
console.log(eldest)
