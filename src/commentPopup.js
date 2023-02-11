import { addComment, getComments, countComments } from './comment.js';

const commentPopup = async (popupComment, show, num) => {
  popupComment.innerHTML += `
    <div class="popup">
    <span class="close-btn">X</span>
        <div class="popup-content">
            
            <img src="${show.image}" class="image"/>
            <h1>${show.title}</h1>
            <div class="popup-detail">
            </div>
            <h4 id='count-${show.id}' class='count-display'>Comments ${num} </h4>
            <div class='comments-div' id="com-div-${show.id}">

            </div>
            <h4>Add a comment</h4>
            <input type="text" placeholder="Your name" name="name" class="comment-input"/>
            <input type="textarea" placeholder="Your insights" name="comment" class="comment-input"/>
            <button class="comment-btn add-comment" id="add-comment-${show.id}">Comment</button>
        </div>
        </div>
    `;
  document.body.appendChild(popupComment);
};

const commentClicked = async (show) => {
  // console.log('show: ', show);

  const popupComment = document.createElement('div');
  popupComment.classList.add('popup-window');
  popupComment.style.display = 'block';

  let comments = await getComments(show.id);
  const num = countComments(comments);

  commentPopup(popupComment, show, num);

  const closeBtn = popupComment.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    popupComment.style.display = 'none';
  });

  const commentDiv = popupComment.querySelector(`#com-div-${show.id}`);
  comments.forEach((com) => {
    const p = document.createElement('p');
    p.innerHTML = `${com.creation_date} ${com.username}: ${com.comment}`;
    commentDiv.appendChild(p);
  });

  const addCommentBtn = popupComment.querySelector(`#add-comment-${show.id}`);
  addCommentBtn.addEventListener('click', async () => {
    const commentInput = addCommentBtn.previousElementSibling;
    const nameInput = commentInput.previousElementSibling;
    if (commentInput.value !== '' && nameInput.value !== '') {
      await addComment(show.id, nameInput.value, commentInput.value);
      nameInput.value = '';
      commentInput.value = '';
    }
    comments = await getComments(show.id);
    commentDiv.innerHTML = '';
    popupComment.querySelector(`#count-${show.id}`).textContent = `Comments ${comments.length}`;
    await comments.forEach((com) => {
      const p = document.createElement('p');
      p.innerHTML = `${com.creation_date} ${com.username}: ${com.comment}`;
      commentDiv.appendChild(p);
    });
  });
};

export default commentClicked;