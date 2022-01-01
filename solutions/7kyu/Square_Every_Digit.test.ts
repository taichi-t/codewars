import { Kata } from "./Square_Every_Digit";

describe("squareDigits", function () {
  it("should pass a sample test", function () {
    expect(Kata.squareDigits(9119)).toEqual(811181);
    expect(Kata.squareDigits(0)).toEqual(0);
  });
});
