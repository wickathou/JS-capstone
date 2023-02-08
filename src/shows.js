import {Show} from './showClass.js';
import {showInfo} from './tvmaze.js';
import {getUserInfo, postLike} from './involvement.js';

export default class Shows {
  constructor (entryDom) {
    this.shows = []
    this.count = 0
    this.entryDom = entryDom
  }

  #addToDom = (showElement) => {
    this.entryDom.appendChild(showElement);
  }

  generateInitial = (showList) => {
    showList.forEach(async showTitle => {
      const tvmazeShowInfo = await showInfo(showTitle)
      const involvementShowInfo = await getUserInfo(tvmazeShowInfo.id)
      const newShow = await new Show(tvmazeShowInfo.id, tvmazeShowInfo.name, tvmazeShowInfo.summary, tvmazeShowInfo.image,involvementShowInfo.likes, involvementShowInfo.comments)
      this.shows.push(await newShow)
      this.count = await this.shows.length
      this.#addToDom(this.showEntryDom(newShow))
    });
  }

  addLikes = (id, div) => {
    const likeBtn = div.querySelector(`#like-${id}`)
    const likeCount = div.querySelector(`#likes-count-${id}`)
    likeBtn.addEventListener('click',async () => {
      console.log(`like-${id} clicked`);
      likeCount.textContent = await postLike(id)
    })
  }

  showEntryDom = (show) => {
    const div = document.createElement('div');
    div.classList = 'col-4';
    div.innerHTML = `
      <div class="card p-3">
        <div class="card-img-top d-flex align-items-center justify-content-center">
          <img src="${show.image}" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">${show.title}<span class="ms-2 badge bg-primary rounded-pill">${show.id}</span></h5>
          <p class="card-text">${show.summary.substring(0, 100)}...</p>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center justify-content-between">
              <a href="#" class="btn btn-primary">Check comments</a>
              <button id="like-${show.id}" class="ms-2 btn btn-primary text-light"><i class="fa-solid fa-thumbs-up"></i></button>
            </div>
            <div>
              <div class="d-flex align-items-center justify-content-between">
                Likes
                <span id="likes-count-${show.id}" class="ms-2 badge bg-primary rounded-pill">${show.likes}</span>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                Comments
                <span id="comments-count-${show.id}" class="ms-2 badge bg-primary rounded-pill">${show.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    this.addLikes(show.id, div)
    return div;
  }
}

// const showTop = new Shows()

// showTop.generateInitial(showList)
