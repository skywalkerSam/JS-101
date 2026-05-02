/**
 * A leap year is a year that is divisible by 4, except for years that are divisible by 100 and not divisible by 400.
 *
 * For example, 2000 is a leap year, but 1900 is not. Also, a leap year has an extra day in February, which is the 29th day of the month.
 */

let year = 2024;

function isLeapYear(forYear) {
  if (forYear % 4 === 0) {
    if (forYear % 100 === 0) {
      if (forYear % 400 === 0) {
        return `${forYear} is a leap year.`;
      }
      return `${forYear} is not a leap year.`;
    }
    return `${forYear} is a leap year.`;
  } else {
    return `${forYear} is not a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);

console.log(isLeapYear(1900));
