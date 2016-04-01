var React = require('react');

var SearchActions = require('../../actions/search/SearchActions');

var SearchBar = React.createClass({

  handleSearch: function(){
    var searchText = document.getElementById('search_input').value;
    SearchActions.movieSearch(searchText);
  },

  handleEnter: function(e){
    if(e.keyCode == 13){
      this.handleSearch();
    }
  },
  render: function(){
    return (
      <div className="form-group">
        <div className="input-group" id="search_group">
          <input onKeyUp={this.handleEnter}id="search_input"type="text" className="form-control" id="search_input"/>
          <span className="input-group-btn">
            <button onClick={this.handleSearch} id="search_button" className="btn btn-success" type="button">Search</button>
          </span>
        </div>
      </div>
    );
  }
});

module.exports = SearchBar;
