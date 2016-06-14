var React = require('react');
var styles = require('../styles/styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return(
      <div style={styles.transparentBg} className="jumbotron col-sm-12 text-center">
        <h1>Deep Cloud</h1>
        <p className="lead">Image Classification</p>
        <Link to="/results">
            <button className="btn btn-lg btn-success">Go</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
