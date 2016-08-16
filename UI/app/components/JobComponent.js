var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var generalUtils = require('../utils/GeneralUtils.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

function JobComponent(props) {
	const {job, ...otherProps} = props;
	var jobDetailsLink = {
		pathname: "/dashboard/jobDetails",
		query: {
			jobId: props.job.job_id,
			procId: props.job.pid
		}
	};
	return(
		<TableRow {...otherProps}>
			<TableRowColumn>
				<Link to={jobDetailsLink}>
					{props.job.job_id}
				</Link>
			</TableRowColumn>
			<TableRowColumn>
				{generalUtils.capitalizeFirstLetter(props.job.jobtype)}
			</TableRowColumn>
			<TableRowColumn>
				{generalUtils.capitalizeFirstLetter(props.job.jobstatus)}
			</TableRowColumn>
		</TableRow>
		/*<tr>
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
		</tr>*/
	);
}

JobComponent.propTypes = {
	job: PropTypes.object.isRequired
};

module.exports = JobComponent;
