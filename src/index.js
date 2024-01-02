import './pages/header.js';
import _ from 'lodash';
import './styles/style.css';
import headerDiv from './pages/header.js';
import homeContent from './pages/home.js';
import menuContent from './pages/menu.js';

const content = document.getElementById('content');

const header = headerDiv();
content.appendChild(header);

//const homeCon = homeContent()
//content.appendChild(homeCon);

const menuCon = menuContent();
content.appendChild(menuCon);
