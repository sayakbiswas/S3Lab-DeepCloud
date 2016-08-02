var React = require('react');
var PropTypes = React.PropTypes;
var DownloadButton = require('../components/DownloadButton');

var DownloadButtonContainer = React.createClass({
	propTypes: {
		shouldDisplayButton: PropTypes.bool.isRequired,
		modelDownloadLink: PropTypes.string.isRequired
	},
	getInitialState: function() {
		return{
			shouldDisplayButton: this.props.shouldDisplayButton,
			modelDownloadLink: this.props.modelDownloadLink
		};
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			shouldDisplayButton: nextProps.shouldDisplayButton,
			modelDownloadLink: nextProps.modelDownloadLink
		});
	},
	setDisplayButton: function(value) {
		this.setState({
			shouldDisplayButton: value
		});
	},
	setModelDownloadLink: function(value) {
		this.setState({
			modelDownloadLink: value
		});
	},
	handleClickDownload: function(e) {
  	  window.open('http://deepc05.acis.ufl.edu:8889'+this.state.modelDownloadLink, '_blank');
    },
	render: function() {
		if(this.state.shouldDisplayButton === true) {
			console.log('displaying DownloadButton');
			return(
				<DownloadButton
					onClickDownload = {this.handleClickDownload} />
			);
		} else {
			return null;
		}

	}
});

module.exports = DownloadButtonContainer;
