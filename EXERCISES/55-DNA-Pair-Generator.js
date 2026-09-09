/**
 * In the double helix of the DNA, the bases are always paired together: if on one strand there is an A base, on the other strand directly in front there is a T base, the other pair is C and G.
 *
 * In this lab, you will write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character.
 *
 * For example, for the input ATCG, return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]
 *
 * The A base gets paired with a T base, the T base is paired with a A base, the C is paired with the G base, and finally the G base is paired with a C base.
 *
 */

function pairElement(strand) {
  const dnaStrand = strand.toUpperCase().split("");
  const reconstructedDna = [];
  for (let i = 0; i < dnaStrand.length; i++) {
    const element = dnaStrand[i];
    if (element === "A") {
      reconstructedDna.push(["A", "T"]);
    }
    if (element === "T") {
      reconstructedDna.push(["T", "A"]);
    }
    if (element === "C") {
      reconstructedDna.push(["C", "G"]);
    }
    if (element === "G") {
      reconstructedDna.push(["G", "C"]);
    }
  }
  return reconstructedDna;
}

console.log(pairElement("ATCGA"));
