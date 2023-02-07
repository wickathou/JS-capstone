const invoUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BDiHo1eWo7TvFu0NP10u/'

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
    // const result = await res.json()
    console.log(res.status);
    // console.log(res.json());
  } catch (error) {
    console.log(error);
    return error
  }
}

// postComment('blade_runner', 'Mike', 'Ok')

const postLike = async (showIdentifier) => {
  const likes = await getLikes(showIdentifier) + 1
  const data = {
    'item_id': showIdentifier,
    'likes': likes
  }
  console.log(data);
  try {
    const res = await fetch(`${invoUrl}comments?item_id=${showIdentifier}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    // const result = await res.json()
    // console.log(result);
    console.log(res.statusText);
  } catch (error) {
    console.log(error);
    return error
  }
}



// WORKING CODE 

const getComments = async (showIdentifier) => {
  try {
    const res = await fetch(`${invoUrl}comments?item_id=${showIdentifier}`)
    const data = await res.json()
    console.log(data);
  } catch (error) {
    return error
  }
}

const getAllLikes = async () => {
  try {
    const res = await fetch(`${invoUrl}likes/`)
    const data = await res.json()
    console.log(data);
  } catch (error) {
    return error
  }
}

const getLikes = async (showIdentifier) => {
  try {
    const res = await fetch(`${invoUrl}likes/`)
    const data = await res.json()
    const movieLikes = data.find(movie => movie.item_id === `${showIdentifier}`)
    console.log(movieLikes.likes);
    return movieLikes.likes
  } catch (error) {
    return error
  }
}

// getAllLikes()

// getLikes('blade_runner')

// getComments('blade_runner')
postLike('blade_runner')