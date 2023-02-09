const getAllLikes = async () => {
  try {
    const res = await fetch(`${invoUrl}likes/`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

const postLikeApi = async (data) => {
  await fetch(`${invoUrl}likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export {postLikeApi, getAllLikes}