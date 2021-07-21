import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Silence from './examples/Silence'
import TrafficFastmovingFreeway from './examples/Traffic-Fastmoving-Freeway'
import TLsim from './examples/TLsim'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/Silence" component={Silence} />
        <Route path="/Traffic-Fastmoving-Freeway" component={TrafficFastmovingFreeway} />
        <Route path="/" component={TLsim} />

      </Switch>
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
