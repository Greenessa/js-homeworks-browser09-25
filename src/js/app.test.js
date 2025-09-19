import changePlace from "./app";
import {createImg} from "./app";

// describe("Пример теста", () => {
//   test.each([
//     { str: "Hello!", expected: "Demo: Hello!" },
//     { str: "", expected: "Demo: " },
//     { str: 100, expected: "Demo: 100" },
//   ])("demo($str)", ({ str, expected }) => {
//     expect(demo(str)).toBe(expected);
//   });
// });

test('changePlace', () => {
  createImg = jest.fn();
  changePlace();
  expect(createImg).toHaveBeenCalled();
});
