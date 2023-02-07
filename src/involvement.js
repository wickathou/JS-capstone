const invoUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BDiHo1eWo7TvFu0NP10u/'

const getComments = async (movieIdentifier) => {
  try {
    const res = await fetch(`${invoUrl}comments?item_id=${movieIdentifier}`)
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

const getLikes = async (movieIdentifier) => {
  try {
    const res = await fetch(`${invoUrl}likes/`)
    const data = await res.json()
    const movieLikes = data.find(movie => movie.item_id === `${movieIdentifier}`)
    console.log(movieLikes.likes);
  } catch (error) {
    return error
  }
}

getAllLikes()

getLikes('blade_runner')

getComments('blade_runner')