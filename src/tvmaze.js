const tvmazeUrl = 'https://api.tvmaze.com/'
const summaryCleanRegex = /<[^>]*>/g

// WORKING CODE 



const showInfo = async (showTitle) => {
  const showDetails = await getShow(showTitle)
  const image = await getImage(showDetails.id)
  const allShowInfo = await {...showDetails, image}
  console.log(allShowInfo);
  return allShowInfo
}

const getShow = async (showIdentifier) => {
  try {
    const res = await fetch(`${tvmazeUrl}singlesearch/shows?q=${showIdentifier}`)
    const data = await res.json()
    // console.log(data);
    // console.log(data.name);
    // console.log(data.id);
    let {id, name, summary} = data
    summary = summary.replace(summaryCleanRegex, '')
    const showDetails = {id, name, summary}
    // console.log(showDetails);
    // return data.id
    return showDetails
  } catch (error) {
    console.log(error);
    return error
  }
  // return data.id
}

const getImage = async (showId) => {
  // console.log(showId);
  try {
    const res = await fetch(`${tvmazeUrl}shows/${showId}/images`)
    const data = await res.json()
    const image = await data.find(img => img.main === true)
    // console.log(image);
    // console.log(image.resolutions.medium.url);
    return image.resolutions.medium.url
  } catch (error) {
    console.log(error);
    return error
  }
}

export {showInfo, getShow, getImage}

// showList.forEach(async showTitle => {
//     const id = await getShow(showTitle)
//     const pic = await getImage(id)
//     console.log(await [id, pic]);
//   });
// showList.forEach(async showTitle => {
//   showInfo(showTitle)
// });
  
// console.log(getShow('mandalorian'));
// showInfo('mandalorian')
// getImage(15299)