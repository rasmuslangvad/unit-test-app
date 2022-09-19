export const sum = (a, b) => a + b;

export const isEvenNumber = (number) => number % 2 === 0;

export const reverseString = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  return value.split("").reverse().join("");
};
