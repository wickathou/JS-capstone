import { countComments } from '../commentCounter.js';

describe('countComments', () => {
  it('should return the correct comment count', () => {
    const comments = [{ username: 'user1', comment: 'comment1' }, { username: 'user2', comment: 'comment2' }, { username: 'user3', comment: 'comment3' }];

    const commentCount = countComments(comments);

    expect(commentCount).toBe(3);
  });
});
