var React = require('react');
var styles = require('../styles/styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var JobsListComponentContainer = require('../containers/JobsListComponentContainer');
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

var Dashboard = React.createClass({
  render: function(){
    return(
		<div style={styles.gridContainer}>
			<GridList
				cols={2}
				cellHeight={400}
				style={styles.gridList}>
				<GridTile style={styles.gridTile}>
					<Paper zDepth={2} style={styles.gridPaper}>
						<Toolbar style={styles.toolbar}>
							<ToolbarGroup firstChild={true} style={styles.toolbarGroup}>
								<ToolbarTitle text="MNIST Image Prediction" style={styles.toolbarTitle}/>
							</ToolbarGroup>
						</Toolbar>
						<div style={styles.paperMainContents}>
							<Link to="/trainModel">
								<RaisedButton
									label="Train Model"
									backgroundColor="#8BC34A"
									style={styles.dashboardButton} />
							</Link>
							<br />
							<Link to="/uploadPreTrainedModel">
								<RaisedButton
									label="Upload Pre-Trained Model"
									backgroundColor="#8BC34A"
									style={styles.dashboardButton} />
							</Link>
							<br />
							<Link to="/predict">
								<RaisedButton
									label="Predict"
									backgroundColor="#8BC34A"
									style={styles.dashboardButton} />
							</Link>
							<br />
							<Link to="/newImageClassification">
								<RaisedButton
									label="New Image Classification Dataset"
									backgroundColor="#8BC34A"
									style={styles.dashboardButton} />
							</Link>
						</div>
					</Paper>
				</GridTile>
				<GridTile style={styles.gridTile}>
					<Paper zDepth={2} style={styles.gridPaper}>
						<Toolbar style={styles.toolbar}>
							<ToolbarGroup firstChild={true} style={styles.toolbarGroup}>
								<ToolbarTitle text="Your Jobs!" style={styles.toolbarTitle} />
							</ToolbarGroup>
						</Toolbar>
						<div style={styles.paperMainContents}>
							<JobsListComponentContainer />
						</div>
					</Paper>
				</GridTile>
			</GridList>
		</div>
      /*<div style={styles.transparentBg} className="col-sm-12 text-center">
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
      </div>*/
  	);
  }
});

module.exports = Dashboard;
