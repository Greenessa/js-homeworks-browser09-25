import changePlace from "./app";
import { createImg } from "./app";
import { removeImg } from "./app";

test('changePlace', () => {
  const mockCreateImg = createImg;
  mockCreateImg = jest.fn();
  const mockRemoveImg = removeImg;
  mockRemoveImg = jest.fn();
  changePlace();
  expect(mockCreateImg).toHaveBeenCalled();
  expect(mockRemoveImg).toHaveBeenCalled();
});
