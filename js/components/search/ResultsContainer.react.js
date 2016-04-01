var React = require('react');

var Result = require('./Result.react.js');

var ResultsContainer = React.createClass({

  render: function(){
    var results = [];
    var data = this.props.results;
    for(var i = 0; i < data.length; i++){
      results.push(
        <Result key={i} info={data[i]}/>
      );
    }
    return (
      <div className="col-sm-8"id="search_results_container">
        {results}

      </div>
    );
  }
});

module.exports = ResultsContainer;
