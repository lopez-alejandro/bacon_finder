var React = require('react');

var NavBar= require('./NavBar.react.js');

var BaconApp = React.createClass({

  render: function(){
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = BaconApp;
