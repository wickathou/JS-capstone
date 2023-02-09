const getAllLikes = async () => {
  try {
    const data = [
      {"item_id":216,"likes":3},
      {"likes":1,"item_id":210},
      {"likes":2,"item_id":51394}]
    return data;
  } catch (error) {
    return error;
  }
};


const postLikeApi = async (data) => {
  data
}

export { getAllLikes, postLikeApi };