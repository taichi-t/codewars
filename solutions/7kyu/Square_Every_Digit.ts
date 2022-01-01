export class Kata {
  static squareDigits(num: number) {
    const spreadedNums: string[] = [...String(num)];
    const squaredNums = spreadedNums.map((num) =>
      String(Number(num) * Number(num))
    );
    const joined = squaredNums.join("");
    return Number(joined);
  }
}

// export class Kata {
//   static squareDigits(num: number) {
//     return +num.toString()
//                .split('')
//                .map(n => Math.pow(+n,2))
//                .join('');
//   }
// }
