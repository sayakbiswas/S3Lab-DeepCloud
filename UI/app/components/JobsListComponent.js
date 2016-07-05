var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var JobComponent = require('./JobComponent');
var styles = require('../styles/styles');

function JobsListComponent(props) {
	var jobsList = props.jobsList;
	return(
		<div className="col-sm-8 text-center col-sm-offset-2" style={styles.containerStyle}>
			<h3>Your Jobs!</h3>
			<div className="table-responsive">
				<table className="table table-striped table-bordered">
					<thead>
						<tr>
							<th className="text-center">Job ID</th>
							<th className="text-center">Job Type</th>
							<th className="text-center">Job Status</th>
						</tr>
					</thead>
					<tbody>
						{
							jobsList.map(function(job){
								return(
									<JobComponent
										key={job.job_id}
										job={job} />
								);
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	);
}

JobsListComponent.propTypes = {
	jobsList: PropTypes.array.isRequired
};

module.exports = JobsListComponent;
