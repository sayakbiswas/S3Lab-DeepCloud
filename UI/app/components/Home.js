var React = require('react');
var styles = require('../styles/styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return(
      <div style={styles.transparentBg} className="jumbotron col-sm-12 text-center">
        <h1>Deep Cloud</h1>
      </div>
    )
  }
});

module.exports = Home;
