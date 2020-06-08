import './style.css';
import {VERSION} from 'lodash';

function renderComponent() {
  const element = document.getElementById('mfe2');
  element.innerHTML = '<span class="mfe2">mfe2: ' + VERSION + '</span>';
}

renderComponent();