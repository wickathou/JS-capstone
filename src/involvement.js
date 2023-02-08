const invoUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BDiHo1eWo7TvFu0NP10u/'

// WORKING CODE 

const postComment = async (showIdentifier, username, comment) => {
  const data = {
    'item_id': showIdentifier,
    'username': username,
    'comment': comment
  }
  try {
    const res = await fetch(`${invoUrl}comments?item_id=${showIdentifier}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(res.status);
  } catch (error) {
    console.log(error);
    return error
  }
}


const postLike = async (showIdentifier) => {
  try {
    let likes = await getLikes(showIdentifier) + 1;
    const data = {
      'item_id': showIdentifier,
      'likes': likes
    }
    const res = await fetch(`${invoUrl}likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return likes
  } catch (error) {
    console.log(error);
    return error
  }
}


const getComments = async (showIdentifier) => {
  try {
    let allComments = {
      comments: {},
      amount: 0
    }
    const res = await fetch(`${invoUrl}comments?item_id=${showIdentifier}`)
    const data = await res.json()
    if (res.status === 200) {
      const amount = data.length;
      allComments = {...data, amount}
      // console.log(allComments);
      return allComments
    } else {
      // console.log(allComments);
      return allComments
    }
  } catch (error) {
    console.log(error);
    return false
  }
}

const getAllLikes = async () => {
  try {
    const res = await fetch(`${invoUrl}likes/`)
    const data = await res.json()
    // console.log(data);
    return data
  } catch (error) {
    return error
  }
}

const getLikes = async (showIdentifier) => {
  try {
    const allLikes = await getAllLikes()
    // console.log(allLikes);
    const showLikes = await allLikes.find(show => show.item_id === showIdentifier)
    if (await showLikes) {
      // console.log(await showLikes.likes);
      return showLikes.likes
    } else {
      // console.log('Not found');
      return 0
    }
  } catch (error) {
    console.log(error);
    return error
  }
}

const getUserInfo = async (showIdentifier) => {
  const showLikes = await getLikes(showIdentifier)
  const showComments = await getComments(showIdentifier)
  const data = {
    likes: showLikes,
    comments: showComments.amount
  }
  // console.log(data);
  return data
}

export {getLikes, getComments, getUserInfo, postComment, postLike}

// getAllLikes()

// getLikes('blade_runner')
// getLikes(210)
// getLikes(216)
// getLikes(210)
// getUserInfo('blade_runner')
// getUserInfo(216)
// getUserInfo(210)

// getComments(216)
// getComments(210)

// postComment(216, 'Jalke', 'Alright')