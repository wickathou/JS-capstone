/**
 * @jest-environment jsdom
 */
import { getLikes, postLike } from '../involvement.js';

jest.mock('../likesApi.js');

describe('Test like actions', () => {
  test('Retrieve likes count for an specific show', () => {
    getLikes(210).then((res) => {
      expect(res).toBe(1);
    });
  });
  test('Gets zero likes for unknow shows', () => {
    getLikes(1).then((res) => {
      expect(res).toBe(0);
    });
  });
  test('Posts a like for a show', () => {
    postLike(216).then((res) => {
      expect(res).toBe(4);
    });
  });
  test('Posts a like for a new show', () => {
    postLike(2).then((res) => {
      expect(res).toBe(1);
    });
  });
});
