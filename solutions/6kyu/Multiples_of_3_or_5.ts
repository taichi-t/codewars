// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

//failed
//問題がわからない
export class Challenge {
  static solution(number: number) {
    const multipleNums = new Set<number>();
    if (number < 0) {
      multipleNums.add(0);
    }
    if (number % 3 >= 0) {
      multipleNums.add(3);
    }
    if (number % 5 >= 0) {
      multipleNums.add(5);
    }
    if (number % 6 >= 0) {
      multipleNums.add(6);
    }
    if (number % 9 >= 0) {
      multipleNums.add(9);
    }
    let sum = 0;
    for (let value of multipleNums) {
      sum = sum + value;
    }

    return sum;
  }
}
