import './style.scss';
import Shows from './shows.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';

const showList = ['mandalorian', 'the last of us', 'house of the dragon', 'the boys', 'wednesday', 'true detective', 'succession', 'white lotus', 'rick and morty'];

const showListDom = document.getElementById('show-list');

const showTop = new Shows(showListDom);

showTop.generateInitial(showList);
