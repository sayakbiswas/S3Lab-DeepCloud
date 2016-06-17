var React = require('react');
var styles = require('../styles/styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return(
      <div style={styles.transparentBg} className="jumbotron col-sm-12 text-center">
        <h1>Deep Cloud</h1>
        <p className="lead">MNIST Image Prediction</p>
		<div className="btn-group btn-group-lg">
			<div className="col-sm-6">
				<Link to="/trainModel">
		            <button className="btn btn-lg btn-success">Train Model</button>
		        </Link>
			</div>
	        <div className="col-sm-6">
				<Link to="/predict">
					<button className="btn btn-lg btn-success">Predict</button>
				</Link>
			</div>
		</div>
      </div>
    )
  }
});

module.exports = Home;
