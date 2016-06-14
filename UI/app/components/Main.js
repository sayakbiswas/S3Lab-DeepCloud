var React = require('react');
var ReactRouter = require('react-router');
var NavBar = require('./NavBar');

var Main = React.createClass({
  render: function() {
    return(
      <div>
        <NavBar />
        <div className='main-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
