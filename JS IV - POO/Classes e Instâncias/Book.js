class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.publish = true
    }

}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book)