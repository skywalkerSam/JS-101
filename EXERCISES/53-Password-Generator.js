const STRINGS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword(passwordLength) {
  let theGeneratedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    let strIndex = Math.floor(Math.random() * (STRINGS.length - i) + i);
    theGeneratedPassword += STRINGS.slice(strIndex, strIndex + 1);
  }

  return theGeneratedPassword;
}

const password = generatePassword(9);
console.log(`Generated password: ${password}`);
