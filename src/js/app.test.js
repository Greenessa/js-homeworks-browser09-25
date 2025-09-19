import changePlace from "./app";
import { createImg } from "./app";
import { removeImg } from "./app";

test('changePlace', () => {
  createImg = jest.fn();
  removeImg = jest.fn();
  changePlace();
  expect(createImg).toHaveBeenCalled();
  expect(removeImg).toHaveBeenCalled();
});
