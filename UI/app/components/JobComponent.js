var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var generalUtils = require('../utils/GeneralUtils.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function JobComponent(props) {
	return(
		<tr>
			<td>
				<Link to={"/jobDetails/" + props.job.job_id}>
					{props.job.job_id}
				</Link>
			</td>
			<td>
				{generalUtils.capitalizeFirstLetter(props.job.jobtype)}
			</td>
			<td>
				{generalUtils.capitalizeFirstLetter(props.job.jobstatus)}
			</td>
		</tr>
	);
}

JobComponent.propTypes = {
	job: PropTypes.object.isRequired
};

module.exports = JobComponent;
