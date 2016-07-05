var React = require('react');
var PropTypes = React.PropTypes;
var TrainingAccuracyChart = require('../components/TrainingAccuracyChart');
var Highcharts = require('highcharts');

var TrainingAccuracyChartContainer = React.createClass({
	propTypes: {
		shouldRenderChart: PropTypes.bool.isRequired,
		container: PropTypes.string.isRequired,
		options: PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			shouldRenderChart: this.props.shouldRenderChart,
			container: this.props.container,
			options: this.props.options
		};
	},
	componentDidMount: function() {
		if(this.props.shouldRenderChart === true) {
			this.setState({
				shouldRenderChart: this.props.shouldRenderChart,
				container: this.props.container,
				options: this.props.options
			});
			this.chart = new Highcharts[this.props.type || "Chart"](
				this.props.container,
				this.props.options
			);
		}
	},
	componentWillReceiveProps: function(nextProps) {
		if(nextProps.shouldRenderChart === true) {
			console.log('options', nextProps.options);
			this.setState({
				shouldRenderChart: nextProps.shouldRenderChart,
				container: nextProps.container,
				options: nextProps.options
			});
			this.chart = new Highcharts[this.props.type || "Chart"](
				nextProps.container,
				nextProps.options
			);
		}
	},
	componentWillUnmount: function() {
		if(this.chart) {
			this.chart.destroy();
		}
	},
	render: function() {
		console.log('rendering chart');
		return(
			<TrainingAccuracyChart
				container = {this.state.container} />
		);
	}
});

module.exports = TrainingAccuracyChartContainer;
