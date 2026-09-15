// In this lab you will build an odd Fibonacci sum calculator that computes the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer.

// Classic Fibonacci Seq.
function fib(number) {
  const fibSeq = [0, 1];
  for (let i = 0; i < number - 1; i++) {
    const nextFib = fibSeq[i] + fibSeq[i + 1];
    fibSeq.push(nextFib);
    // console.log(fibSeq);
  }

  return fibSeq[fibSeq.length - 1];
}

// Sum of all the Odd Fibonacci Seqs. before the `number`
function sumFibs(number) {
  const fibSeq = [0, 1];
  let i = 0;
  do {
    const nextFib = fibSeq[i] + fibSeq[i + 1];
    fibSeq.push(nextFib);
    // console.log(fibSeq)
    i++;
  } while (fibSeq[fibSeq.length - 1] <= number);

  let oddFibSum = 0;
  for (let i = 0; i < fibSeq.length; i++) {
    const element = fibSeq[i];
    if (element <= number && element % 2 !== 0) {
      oddFibSum += element;
      // console.log(oddFibSum);
    }
  }

  return oddFibSum;
}

console.log(sumFibs(4));
console.log(sumFibs(1000))
console.log(sumFibs(4000000))
console.log(sumFibs(74024))
console.log(sumFibs(74025))
