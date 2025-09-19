import changePlace from "./app";
import { createImg } from "./app";

test('changePlace', () => {
  createImg = jest.fn();
  changePlace();
  expect(createImg).toHaveBeenCalled();
});
