const invoUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BDiHo1eWo7TvFu0NP10u/';

// WORKING CODE

import {postLikeApi, getAllLikes} from './likesApi';

const postLike = async (showIdentifier) => {
  try {
    const likes = await getLikes(showIdentifier) + 1;
    const data = {
      item_id: showIdentifier,
      likes,
    };
    postLikeApi(data)
    return likes;
  } catch (error) {
    return error;
  }
};

const getComments = async (showIdentifier) => {
  try {
    let allComments = {
      comments: {},
      amount: 0,
    };
    const res = await fetch(`${invoUrl}comments?item_id=${showIdentifier}`);
    const data = await res.json();
    if (res.status === 200) {
      const amount = data.length;
      allComments = { ...data, amount };
      return allComments;
    }
    return allComments;
  } catch (error) {
    return false;
  }
};

const getLikes = async (showIdentifier) => {
  try {
    const allLikes = await getAllLikes();
    const showLikes = await allLikes.find((show) => show.item_id === showIdentifier);
    if (await showLikes) {
      return showLikes.likes;
    }
    return 0;
  } catch (error) {
    return error;
  }
};

const getUserInfo = async (showIdentifier) => {
  const showLikes = await getLikes(showIdentifier);
  const showComments = await getComments(showIdentifier);
  const data = {
    likes: showLikes,
    comments: showComments.amount,
  };
  return data;
};

const postComment = async (showIdentifier, username, comment) => {
  const data = {
    item_id: showIdentifier,
    username,
    comment,
  };
  try {
    await fetch(`${invoUrl}comments?item_id=${showIdentifier}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return data;
  } catch (error) {
    return error;
  }
};



export {
  getLikes, getUserInfo, postComment, postLike,
};
