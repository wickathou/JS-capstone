const tvmazeUrl = 'https://api.tvmaze.com/';
const summaryCleanRegex = /<[^>]*>/g;

// WORKING CODE

const getShow = async (showIdentifier) => {
  try {
    const res = await fetch(`${tvmazeUrl}singlesearch/shows?q=${showIdentifier}`);
    const data = await res.json();
    const { id } = data;
    const { name } = data;
    const summary = data.summary.replace(summaryCleanRegex, '');
    const showDetails = { id, name, summary };
    return showDetails;
  } catch (error) {
    return error;
  }
};

const getImage = async (showId) => {
  try {
    const res = await fetch(`${tvmazeUrl}shows/${showId}/images`);
    const data = await res.json();
    const image = await data.find((img) => img.main === true);
    return image.resolutions.medium.url;
  } catch (error) {
    return error;
  }
};

const showInfo = async (showTitle) => {
  const showDetails = await getShow(showTitle);
  const image = await getImage(showDetails.id);
  const allShowInfo = await { ...showDetails, image };
  return allShowInfo;
};

export { showInfo, getShow, getImage };
