import Show from './showClass.js';
import {showInfo} from './tvmaze.js';
export default class Shows {
  constructor () {
    this.shows = []
  }

  addNew (title) {
    const showTitle = 
    getShow(title)
    const newShow = new Show()
  }

  generateInitial (showList) {
    showList.forEach(async showTitle => {
      showInfo(showTitle)
      this.addNew()
    });
  }
}


