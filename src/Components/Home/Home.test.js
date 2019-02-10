import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Store from '../Store/Store'

const appStore = new Store()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home store = {appStore} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
