import getShow from './tvmaze.js';
import {getLikes, getComments} from './involvement.js';

export default class Show {
  constructor (id, title, summary = '', image = '', likes = 0, comments = 0) {
    this.id = id
    this.title = title
    this.summary = summary
    this.image = image
    this.likes = likes
    this.comments = comments
  }

  getApiComments = () => {
    this.comments = getComments(this.id)
  }

  getApiLikes = () => {
    this.likes = getLikes(this.id)
  }
}