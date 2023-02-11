import apiKey from './apiKey.js';
import { countComments } from './commentCounter.js';

const commentUrl = (`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments`);

const getComments = async (showId) => {
  const comments = await fetch(`${commentUrl}?item_id=${showId}`);
  if (comments.status === 400) {
    return [];
  }
  const commentsData = await comments.json();
  return commentsData;
};

const addComment = async (showId, name, message) => {
  await fetch(commentUrl, {

    method: 'POST',
    body: JSON.stringify({
      item_id: showId,
      username: name,
      comment: message,

    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });

  const commentsArray = await getComments(showId);
  countComments(commentsArray);
  return commentsArray;
};

export { addComment, getComments, countComments };