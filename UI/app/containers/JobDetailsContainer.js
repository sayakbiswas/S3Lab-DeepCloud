var React = require('react');
var PropTypes = React.PropTypes;
var JobDetails = require('../components/JobDetails');

var JobDetailsContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		//console.log('query', this.props.location.query);
		return {
			jobID: this.props.location.query.jobId,
			procID: this.props.location.query.procId,
			jobType: '',
			jobStatus: '',
			finalAccuracy: '',
			prediction: '',
			model: '',
			options: {}
		};
	},
	componentDidMount: function() {
		var jobsList = JSON.parse(localStorage.getItem('jobsList'));
		var accuracyList = [];
		for(var i = 0; i < jobsList.length; i++) {
			if(this.props.location.query.jobId == jobsList[i].job_id) {
				console.log(jobsList[i].accuracy);
				this.setState({
					jobType: jobsList[i].jobtype,
					jobStatus: jobsList[i].jobstatus,
					prediction: jobsList[i].prediction,
					model: jobsList[i].model
				});
				accuracyList = JSON.parse(jobsList[i].accuracy);
				break;
			}
		}
		var epochValues = [];
		var dataValues = [];
		for(var i = 0; i < accuracyList.length; i++) {
			epochValues[i] = parseInt(accuracyList[i].Epoch);
			dataValues[i] = parseFloat(accuracyList[i].Accuracy) * 100;
		}
		var optionValues = {
			title: {
				text: 'Accuracy vs. Epoch'
			},
			xAxis: {
				title: {
					text: 'Epoch'
				},
				categories: epochValues
			},
			yAxis: {
				title: {
					text: 'Accuracy (%)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Accuracy',
				data: dataValues
			}]
		};
		this.setState({
			options: optionValues,
			finalAccuracy: (accuracyList[accuracyList.length - 1].Accuracy * 100).toFixed(2) + '%'
		});
	},
	render: function() {
		console.log('state', this.state);
		return(
			<JobDetails
				jobID={this.state.jobID}
				procID={this.state.procID}
				jobType={this.state.jobType}
				jobStatus={this.state.jobStatus}
				finalAccuracy={this.state.finalAccuracy}
				prediction={this.state.prediction}
				model={this.state.model}
				options={this.state.options} />
		);
	}
});

module.exports = JobDetailsContainer;
