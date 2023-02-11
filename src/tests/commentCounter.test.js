const { countComments } = require('../commentCounter.js');

describe('Count comments of a movie', () => {
  test('No comments', () => {
    const arr = [];
    expect(countComments(arr)).toBe(0);
  });
  test('Expect to get 2 comments back', () => {
    const comments = [{
      username: 'tati',
      comment: 'message',
    }, {
      comment: 'great movie',
      username: 'tati',
    }];
    expect(countComments(comments)).toBe(2);
  });
});