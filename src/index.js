import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
  const element = document.createElement('div');
  const h2 = document.createElement('h2');
  const btn = document.createElement('button');

  h2.innerHTML = _.join(['Hello', 'shahier'], ' ');

  element.appendChild(h2);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());