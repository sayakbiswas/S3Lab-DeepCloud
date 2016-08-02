var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
import RaisedButton from 'material-ui/RaisedButton';
var generalUtils = require('../utils/GeneralUtils.js');

function SuspendResumeButton(props) {
	return(
		<RaisedButton
			label={generalUtils.capitalizeFirstLetter(props.action)}
			backgroundColor="#8BC34A"
			labelColor="white"
			style={styles.suspendResumeButton}
			onClick={props.onClickButton}
			disabled={props.isDisabled} />
	);
}

SuspendResumeButton.propTypes = {
	action: PropTypes.string.isRequired,
	onClickButton: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool.isRequired
};

module.exports = SuspendResumeButton;