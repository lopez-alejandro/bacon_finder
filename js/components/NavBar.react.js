var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return (

        <nav id = "nav_bar"className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">

              <a className="navbar-brand" href="#">Bacon Score</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Search</a></li>
                <li><a href="#">Find Connection</a></li>
              </ul>

            </div>

          </div>
        </nav>

    );
  }
});

module.exports = NavBar;
