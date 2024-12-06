const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("It Works!")
    } else {
        reject("Error! Something Went Wrong :(")
    }
})

const promise0 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hi")
})

const promise01 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hii")
})

const promise02 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Hiii")
})

const promise03 = new Promise((resolve, reject) => {
    setTimeout = (resolve, 6000, "Hiiii")
})


Promise.all([promise0, promise01, promise02, promise03])
    .then(values => {
        console.log(values);
    })


// A Promise...
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("It Works!")
    } else {
        reject("Error! Something Went Wrong :(")
    }
})

// Single Promise
promise.then(result => console.log(result))

// Chaining Promises
promise
    .then(result => result + "!")
    .then(result1 => result1 + "?")
    .catch(() => console.log("Error!"))
    .then(result3 => result3 + '#')
    .then(result2 => {
        console.log(result2 + '$')
    })


// Running JS in browser console sucks!


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log("Error Occurred!"))

