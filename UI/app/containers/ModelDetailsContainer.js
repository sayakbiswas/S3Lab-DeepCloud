var React = require('react');
var PropTypes = React.PropTypes;
var ModelDetails = require('../components/ModelDetails');

var ModelDetailsContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
		};
	},
	componentDidMount: function() {
		//$('select.dropdown').dropdown();
		$('.ui.rating').rating();
	},
	componentWillReceiveProps: function() {
	},
	render: function() {
		return(
            <ModelDetails />
        );
	}
});

module.exports = ModelDetailsContainer;
