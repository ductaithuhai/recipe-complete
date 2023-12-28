import './pages/header.js';
import _ from 'lodash';
import './styles/style.css';
import headerDiv from './pages/header.js';
function component() {
  const element = document.createElement('div');

  // Lodash, now import by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}
const content = document.getElementById('content');
const header = headerDiv();
content.appendChild(component());
content.appendChild(header);
