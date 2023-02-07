const tvmazeUrl = 'https://api.tvmaze.com/'

// WORKING CODE 

const getShow = async (showIdentifier) => {
  try {
    const res = await fetch(`${tvmazeUrl}singlesearch/shows?q=${showIdentifier}`)
    const data = await res.json()
    console.log(data.id);
  } catch (error) {
    console.log(error);
    return error
  }
  // return data.id
}

const getImage = async (showId) => {
  try {
    const res = await fetch(`${tvmazeUrl}shows/${showId}/images`)
    const data = await res.json()
    const image = data.find(img => img.main === true)
    console.log(image.resolutions.medium.url);
    return image.resolutions.medium.url
  } catch (error) {
    console.log(error);
    return error
  }
}

// getShow('mandalorian')
// getShow('blade runner')
getImage(38963)