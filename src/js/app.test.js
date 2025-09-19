/**
 * @jest-environment jsdom
 */

import changePlace from "./app";
import { createImg } from "./app";
import { removeImg } from "./app";

test('changePlace', () => {
  let mockCreateImg = createImg;
  mockCreateImg = jest.fn();
  let mockRemoveImg = removeImg;
  mockRemoveImg = jest.fn();
  changePlace();
  expect(mockCreateImg).toHaveBeenCalled();
  expect(mockRemoveImg).toHaveBeenCalled();
});
