// +5 coded numbers decryptor (From The Wire)

const num = 1234567890;

function decryptInterception(interceptedNum) {
  let decryptedNum = null;
  interceptedNum
    .toString()
    .split(" ")
    .forEach((digit) => {
      if (digit === "1" || digit === "2" || digit === "3" || digit === "4") {
        if (!decryptedNum) {
          decryptedNum = digit + 5;
        }
        decryptedNum += digit + 5;
      }
    });

  return decryptedNum;
}

console.log(decryptInterception(num));
