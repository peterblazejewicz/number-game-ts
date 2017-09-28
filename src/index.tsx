import './styles/index.css';

import Game from './components/Game';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
