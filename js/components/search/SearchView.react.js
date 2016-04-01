var React = require('react');

var Result = require('./Result.react.js');
var ResultsContainer = require("./ResultsContainer.react.js");
var SearchBar= require('./SearchBar.react.js');
var SearchStore = require('../../stores/searchStore');


function getSearchState(){
  return {
    results: SearchStore.getAllResults()
  };
}


var Search = React.createClass({

  _onChange: function(){
    this.setState(getItunesState());
  },

  // lifecycle function that is called after the component is mounted
  componentDidMount: function(){
    console.log('mounted');
    SearchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    SearchStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return (

      <div className="row"id="search_view_container">
        <div className="col-sm-4" id="search_bar_container">
          <SearchBar/>
        </div>
        <ResultsContainer/>
      </div>
    );
  }
});

module.exports = Search;
