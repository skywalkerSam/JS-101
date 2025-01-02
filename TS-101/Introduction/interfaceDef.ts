// Defining types w/ interface

type Girl = {
    name: string;
}

type Boy = {
    name: string;
}

const form: Girl = {
    name: "Stargirl"
}

// here's the thing about using `interface`
interface Humanoid<F> {
    model: string;
    age: number;
    form: F;
}

const someGirl: Humanoid<Girl> = {
    model: "0104",
    age: 21,
    form
}

// NOTE: When yo do an `async` function, it always returns a `Promise<something>`
