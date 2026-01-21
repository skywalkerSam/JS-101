// Promises

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))


// ASYNC AWAIT - Syntactic Sugar, built on top of promises. Makes code easier to read and write...?

// Example 1
async function playerStart() {
    const first_move = await movePlayer(100, 'Left')   // PAUSE
    await movePlayer(400, 'Left')   // PAUSE
    await movePlayer(10, 'Right')   // PAUSE
}

// Simple promise example
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log)

// Async Await example
async function fetchUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await users.json()
    console.log(data)
}
// Don't forget to call the function!


urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all
            (urls.map(url => fetch(url)
                .then(response => response.json())
            ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log("Something went wrong!", err)
    }
}


// Deja Vu :)
