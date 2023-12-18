import _ from 'lodash';
import './style.css';
import Icon from './pig.png';
function component() {
  const element = document.createElement('div');

  // Lodash, now import by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);


  return element;
}

document.body.appendChild(component());