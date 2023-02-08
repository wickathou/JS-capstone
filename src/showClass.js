import {getShow} from './tvmaze.js';
import {getLikes, getComments, getUserInfo} from './involvement.js';

export class Show {
  constructor (id, title, summary = '', image = '', likes = 0, comments = 0) {
    this.id = id
    this.title = title
    this.summary = summary
    this.image = image
    this.likes = likes
    this.comments = comments
  }
}