/**
 * In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
 */

let count = 0;

function cardCounter(card) {
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count += 1;
    if (count <= 0) {
      return count + " Hold";
    } else {
      return count + " Bet";
    }
  } else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count -= 1;
    if (count <= 0) {
      return count + " Hold";
    } else {
      return count + " Bet";
    }
  } else {
    if (count <= 0) {
      return count + " Hold";
    } else {
      return count + " Bet";
    }
  }
}

console.log(cardCounter(6));
console.log(cardCounter("A"));
console.log(cardCounter(9));
console.log(cardCounter(10));
console.log(cardCounter("k"));
