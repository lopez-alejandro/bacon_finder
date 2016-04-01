var React = require('react');
var ReactDOM = require('react-dom');

var BaconApp = require('./components/BaconApp.react.js');
var NavBar = require('./components/NavBar.react.js');
var Search = require('./components/search/SearchView.react.js');

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component = {BaconApp}>
      <IndexRoute component = {Search}></IndexRoute>
      <Route path="search" component={Search}></Route>
    </Route>
  </Router>,
  document.getElementById('bacon_app')
);
