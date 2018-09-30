import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Components/Game';
import registerServiceWorker from './registerServiceWorker';
import {gameManager} from './Managers/GameManager';

ReactDOM.render(gameManager.getGameCom(), document.getElementById('root'));
registerServiceWorker();
