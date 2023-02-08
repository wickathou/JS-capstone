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
  const likesApi = await getLikes(showIdentifier)
  let likes = 0
  if (likesApi) {
    likes = likesApi + 1
  }
  const data = {
    'item_id': showIdentifier,
    'likes': likes
  }
  console.log(data);
  try {
    const res = await fetch(`${invoUrl}likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(res.statusText);
  } catch (error) {
    console.log(error);
    return error
  }
}


const getComments = async (showIdentifier) => {
  let allComments = {
    comments: {},
    amount: 0
  }
  try {
    const res = await fetch(`${invoUrl}comments?item_id=${showIdentifier}`)
    const data = await res.json()
    if (res.status === 200) {
      const amount = data.length;
      allComments = {...data, amount}
      console.log(allComments);
      return allComments
    } else {
      console.log(allComments);
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
    console.log(allLikes);
    const movieLikes = await allLikes.find(movie => movie.item_id === `${showIdentifier}`)
    if (await movieLikes) {
      console.log(movieLikes);
    } else {
      console.log('Not found');
    }
    return movieLikes.likes
  } catch (error) {
    console.log(error);
    return error
  }
}

// export {getLikes, getComments}

// getAllLikes()

// getLikes('blade_runner')
// getLikes(210)
getLikes(216)

// getComments(216)
// getComments(210)

// postLike(216)

// postComment(216, 'Jalke', 'Alright')