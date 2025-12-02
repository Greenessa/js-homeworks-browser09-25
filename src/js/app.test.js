/**
 * @jest-environment jsdom
 */

import demo from "./app";

describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Demo: Hello!" },
    { str: "", expected: "Demo: " },
    { str: 100, expected: "Demo: 100" },
  ])("demo($str)", ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });
});



// import { changePlace } from "./app";
// import { createImg } from "./app";
// import { removeImg } from "./app";

// test('changePlace', () => {
//   let mockCreateImg = createImg;
//   mockCreateImg = jest.fn();
//   let mockRemoveImg = removeImg;
//   mockRemoveImg = jest.fn();
//   changePlace();
//   expect(mockCreateImg).toHaveBeenCalled();
//   expect(mockRemoveImg).toHaveBeenCalled();
// });
