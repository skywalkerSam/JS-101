// create a simple facebook.com backend using JS

const database = [
    {username:"starboy", password:"stargirl", timeline:"Hello, Starboy & Stargirl!"},
    {username:"sam", password:"sammy", timeline:"Hello, Mr. Sam & Mrs. Sammy!"},
    {username:"skywalker", password:"tris", timeline:"Hello, Mr. Skywalker!"}
];


function signIn(username, password) {
    const prompt = require("prompt-sync")({ signIn: true });
    var username = prompt("Enter your username: ");
    var password = prompt("Enter your password: ");
    let i = 0;
    while (i <= database.length){
        if (username != database[i].username){
            i++
        } else if (password != database[i].password ){
            console.log("\n\t Incorrect Credentials, Try Again!\n");
            break
        }
         else if (username === database[i].username && password === database[i].password) {
            console.log('\n\t'+database[i].timeline+'\n')
            break
        }
    }
}
        


signIn();
