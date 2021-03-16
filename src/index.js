import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import './index.css';
import Store from './Store'
import Expensr from './Expensr'

ReactDOM.render(
  <Store><Expensr /></Store>,
  document.getElementById('root')
);
