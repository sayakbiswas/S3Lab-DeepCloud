var React = require('react');
var PropTypes = React.PropTypes;
var ModelStore = require('../components/ModelStore');

var ModelStoreContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
		};
	},
	componentDidMount: function() {
		$('select.dropdown').dropdown();
		$('.ui.rating').rating();
	},
	componentWillReceiveProps: function() {
	},
	render: function() {
		return(
            <ModelStore />
        );
	}
});

module.exports = ModelStoreContainer;
