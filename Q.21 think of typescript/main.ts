// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name:string
    price: number
}
// create two objects
const book: item = {
    name: 'Typescript essential',
    price: 450
}
const mango: item = {
    name: 'mango',
    price: 250
}
console.log(`book.name: ${book.name}, ${book.price}`)
console.log(`mango.name: ${mango.name}, ${mango.price}`)