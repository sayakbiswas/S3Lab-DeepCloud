var React = require('react');
var styles = require('../styles/styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var JobsListComponentContainer = require('../containers/JobsListComponentContainer');

var Dashboard = React.createClass({
  render: function(){
    return(
      <div style={styles.transparentBg} className="col-sm-12 text-center">
        <h1>Deep Cloud</h1>
        <p className="lead">MNIST Image Prediction</p>
		<div className="btn-group btn-group-md">
			<div className="col-sm-3">
				<Link to="/trainModel">
		            <button className="btn btn-md btn-success">Train Model</button>
		        </Link>
			</div>
	        <div className="col-sm-3">
				<Link to="/predict">
					<button className="btn btn-md btn-success">Predict</button>
				</Link>
			</div>
			<div className="col-sm-3">
				<Link to="/uploadPreTrainedModel">
					<button className="btn btn-md btn-success">Pre-Trained Model</button>
				</Link>
			</div>
			<div className="col-sm-3">
				<Link to="/newImageClassification">
					<button className="btn btn-md btn-success">New Image Classification Dataset</button>
				</Link>
			</div>
		</div>
		<JobsListComponentContainer />
      </div>
  	);
  }
});

module.exports = Dashboard;
