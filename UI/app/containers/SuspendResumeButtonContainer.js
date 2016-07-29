var React = require('react');
var PropTypes = React.PropTypes;
var SuspendResumeButton = require('../components/SuspendResumeButton');

var SuspendResumeButtonContainer = React.createClass({
	getInitialState: function() {
		return {
			action: this.props.action
		};
	},
	handleClickButton: function(e) {
		e.preventDefault();
		var xhr = new XMLHttpRequest();
		var onReady = function(e) {
			if(xhr.readyState == 4 && xhr.status == 200) {
				console.log('Suspend successful');
			}
		}
		var onError = function(e) {
			self.handleErrorResponse();
		};
		var formData = new FormData();
		formData.append('job_id', 'this.state.jobID');
		formData.append('pid', 'this.state.procID');
		xhr.open('post', 'http://deepc05.acis.ufl.edu:8888/suspendProcess', true);
		xhr.addEventListener('error', onError, false);
		xhr.send(formData);
		xhr.addEventListener('readystatechange', onReady, false);
	},
	render: function() {
		return(
			<SuspendResumeButton
				action={this.state.action}
				onClickButton={this.handleClickButton} />
		);
	}
});

module.exports = SuspendResumeButtonContainer;
