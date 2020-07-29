import React from 'react';
import ReactDOM from 'react-dom';
import GameOfLife from "./components/GameOfLife";
import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <GameOfLife />
  </React.StrictMode>,
  document.getElementById('root')
);