// This lab is about converting special characters in a string with their corresponding HTML entities.

function convertHTML(str) {
    let newStr = str;
    newStr = newStr.replaceAll("&", "&amp;")
    newStr = newStr.replaceAll("<", "&lt;")
    newStr = newStr.replaceAll(">", "&gt;")
    newStr = newStr.replaceAll('"', "&quot;")
    newStr = newStr.replaceAll("'", "&apos;")
    return newStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
