// let human: Human;

// interface
export interface HumanBeing {
  dna: string;
  age: number;
  sex: HumanSex;
}

// type
export type Human = {
  dna: string;
  age: number;
  sex: HumanSex;
};

export type HumanSex = "male" | "female" | "cyborg";

export const human: Human = {
  dna: "AGTC",
  age: 23,
  sex: "cyborg",
};
