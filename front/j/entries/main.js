import { createElement } from 'react';
import { render } from 'react-dom';

import MainComponent from 'main/MainComponent';

const props = global.initialProps || {};
const mount = global.document.querySelector('#mount');

render(createElement(MainComponent, props), mount);
