let email = "starboy@planetearth.org";

function maskEmail(email) {
  email.trim();
  let originalEmail = email;
  let breakPoint = email.indexOf("@");
  let identifier = email.slice(0, breakPoint);
  let identifierStart = identifier.slice(0, 1);
  let identifierEnd = identifier.slice(-1, originalEmail.length + 1);
  let identifiersToMask = identifier.slice(1, -1);
  let theNumberOfAstrisks = identifiersToMask.length;
  let maskedIdentifier =
    identifierStart +
    "*".repeat(theNumberOfAstrisks) +
    identifierEnd +
    email.slice(breakPoint, originalEmail.length + 1);

  return maskedIdentifier;
}

console.log(maskEmail(email));
// console.log(maskEmail("apple.pie@example.com"))
