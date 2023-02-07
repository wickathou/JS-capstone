const tvmazeUrl = 'https://api.tvmaze.com/'







// WORKING CODE 

const getShow = async (showIdentifier) => {
  try {
    const res = await fetch(`${tvmazeUrl}singlesearch/shows?q=${showIdentifier}`)
    const data = await res.json()
    console.log(data);
  } catch (error) {
    console.log(error);
    return error
  }
}

// getShow('mandalorian')
getShow('blade runner')