var React = require('react');
var PropTypes = React.PropTypes;
var KillJobButton = require('../components/KillJobButton');

var KillJobButtonContainer = React.createClass({
	getInitialState: function() {
		console.log('props',this.props);
		return {
			jobID: this.props.jobID,
			procID: this.props.procID,
			isDisabled: this.props.isDisabled
		};
	},
	handleClickButton: function(e) {
		e.preventDefault();
		var xhr = new XMLHttpRequest();
		var onReady = function(e) {
			if(xhr.readyState == 4 && xhr.status == 200) {
				console.log('Kill successful');
				this.props.onKillJob();
			}
		}.bind(this);
		var onError = function(e) {
			this.handleErrorResponse();
		}.bind(this);
		var formData = new FormData();
		formData.append('job_id', this.state.jobID);
		formData.append('pid', this.state.procID);
		xhr.open('post', 'https://deepc05.acis.ufl.edu/killProcess', true);
		xhr.addEventListener('error', onError, false);
		xhr.send(formData);
		xhr.addEventListener('readystatechange', onReady, false);
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			isDisabled: nextProps.isDisabled
		});
	},
	render: function() {
		return(
			<KillJobButton
				onClickButton={this.handleClickButton}
				isDisabled={this.state.isDisabled} />
		);
	}
});

module.exports = KillJobButtonContainer;
