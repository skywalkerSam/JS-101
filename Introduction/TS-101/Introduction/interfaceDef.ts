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

// const form: Boy = {
//     name: "Starboy"
// }


// here's the thing about using `interface`
interface Humanoid<F> {
    model: string;
    age: number;
    form: F;
}

interface Human<F> {
    id: string;
    age: number;
    form: F;
}


const girlA: Humanoid<Girl> = {
    model: "0104",
    age: 21,
    form
}

// const aBoy: Human<Boy> = {
//     id: "idkStarboy",
//     age: 12025,
//     form
// }

const girlB: Human<Girl> = {
    id: "trisAnyaLily",
    age: 22,
    form
}

// NOTE: When yo do an `async` function, it always returns a `Promise<something>`
