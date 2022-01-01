import { Challenge } from "./Multiples_of_3_or_5";

describe("multiples of 3 or 5", function () {
  it("should handle basic tests", function () {
    expect(Challenge.solution(10)).toEqual(23);
  });
});
