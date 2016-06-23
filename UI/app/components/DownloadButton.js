var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;

function DownloadButton(props) {
	return(
		<button
			className="btn btn-block btn-success" onClick={props.onClickDownload}>
			Download Model
		</button>
	);
}

DownloadButton.propTypes = {
	onClickDownload: PropTypes.func.isRequired
};

module.exports = DownloadButton;
