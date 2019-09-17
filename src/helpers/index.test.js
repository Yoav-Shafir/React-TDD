import { maxNum } from "./index";

describe("maxNum()", () => {
  describe("given an empty array", () => {
    it("returns 0", () => {
      expect(maxNum([])).toEqual(0);
    });
  });
  describe("given an array of numbers", () => {
    it("returns the max number", () => {
      expect(maxNum([1, 2, 3])).toEqual(3);
    });
  });
});
