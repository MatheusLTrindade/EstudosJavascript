const Author = require("./Author")

const jhon = new Author("Jhon Doe")
const lucas = new Author("Lucas Silva")

const post1 = jhon.writePost("Título do Post", "Lorem ipsum dolor seic amet ...")
const post2 = lucas.writePost("Título do Post2", "Lorem ipsum dolor seic amet ...")
const post3 = jhon.writePost("Título do Post3", "Lorem ipsum dolor seic amet ...")


post1.addComment("Matheus", "Muito bom!")
post1.addComment("Lucas", "Achei interessante.")
post3.addComment("Lucas", "Achei legal.")

console.log(jhon)
console.log(post1)
console.log(post2)
console.log(post3)