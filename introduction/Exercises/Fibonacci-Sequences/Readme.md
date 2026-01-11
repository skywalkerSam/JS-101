# [Fibonacci Sequences](https://en.wikipedia.org/wiki/Fibonacci_sequence)

[Part of the Introduction to Web Development, Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/web-development-101-introduction-programming/3-programming-languages)

With TypeScript

```TypeScript
export function fibonacciSeq(params: number): number {
  params -= 1;  //matching the sequence
  let x: number = 0;
  let y: number = 1;
  let nextTerm: number = 0;

  for (let i: number = 0; i <= params; i++) {
    console.log(x)
    nextTerm = x + y;
    x = y;
    y = nextTerm;
  }
  return x;
}
```

w/ Assembly (yeah, fr*)

```armasm
area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

If you got that, you have my utmost respect.)

Until next time...

😅✌️
