export default class Show {
  constructor(id, title, summary = '', image = '', likes = 0, comments = 0) {
    this.id = id;
    this.title = title;
    this.summary = summary;
    this.image = image;
    this.likes = likes;
    this.comments = comments;
  }
}