var React = require('react');
var styles = require('../styles/styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var DashboardContent = require('./DashboardContent.js');
var ReactSidebar = require('react-sidebar').default;
var TopMenu = require('./TopMenu');

var Dashboard = React.createClass({
	getInitialState: function() {
		return {
			sidebarOpen: true,
			sidebarDocked: true
		};
	},
	onSetSidebarOpen: function(open) {
		this.setState({sidebarOpen: open});
	},
	componentWillMount: function() {
		var mql = window.matchMedia(`(min-width: 800px)`);
		mql.addListener(this.mediaQueryChanged);
		this.setState({mql: mql, sidebarDocked: mql.matches});
	},
	componentWillUnmount: function() {
		this.state.mql.removeListener(this.mediaQueryChanged);
	},
	mediaQueryChanged: function() {
		this.setState({sidebarDocked: this.state.mql.matches});
	},
	render: function() {
		console.log('render dashboard');
		var SideBarContent = <div className="ui labeled icon borderless pointing vertical inverted menu sidebarMenu">
								<Link className="active item" to="/dashboard">
									<i className="dashboard icon"></i>
									Dashboard
								</Link>
								<a href="http://deepc05.acis.ufl.edu:9999/" className="item" target="_blank">
									<i className="book icon"></i>
									Notebook
								</a>
								<Link to='/Contact' className="item">
									<i className="call icon"></i>
									Contact Us
								</Link>
								<Link to="/dashboard/jobsList" className="item">
									<i className="tasks icon"></i>
									Jobs
								</Link>
							</div>;
		return(
			<ReactSidebar sidebar={SideBarContent}
				open={this.state.sidebarOpen}
				docked={this.state.sidebarDocked}
				onSetOpen={this.onSetSidebarOpen}
				styles={styles.sidebarStyle}
				shadow={false} >
					<div className="pusher" style={styles.pusherStyle}>
						<div className="ui container">
							<TopMenu />
							{this.props.children}
						</div>
					</div>
			</ReactSidebar>
		);
	}
});

module.exports = Dashboard;
