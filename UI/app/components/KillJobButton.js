var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
import RaisedButton from 'material-ui/RaisedButton';
var generalUtils = require('../utils/GeneralUtils.js');

function KillJobButton(props) {
	return(
		<RaisedButton
			label={generalUtils.capitalizeFirstLetter('Kill Job')}
			backgroundColor="#8BC34A"
			labelColor="white"
			style={styles.suspendResumeButton}
			onClick={props.onClickButton}
			disabled={props.isDisabled} />
	);
}

KillJobButton.propTypes = {
	onClickButton: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool.isRequired
};

module.exports = KillJobButton;
