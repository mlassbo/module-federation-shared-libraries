import './style.css';
import {VERSION} from 'lodash';

function renderComponent() {
  const element = document.getElementById('mfe1');
  element.innerHTML = '<span class="mfe1">mfe1: ' + VERSION + '</span>';
}

renderComponent();