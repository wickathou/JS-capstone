import getShow from './tvmaze';

class Show {
  constructor (title, likes = 0, comments = 0) {
    this.title = title
    this.likes = likes
    this.comments = comments
  }

  createShow (title) {
    getShow(title)
  }
}