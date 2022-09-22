// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat) {
    return cats.push(cat)
}

function destructivelyPrependCat(cat) {
    return cats.unshift(cat)
}

function destructivelyRemoveLastCat(cat) {
    return cats.pop(cat)
}

function destructivelyRemoveFirstCat(cat) {
    return cats.shift(cat)
}