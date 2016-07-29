var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var TrainingAccuracyChartContainer = require('../containers/TrainingAccuracyChartContainer');
var DownloadButtonContainer = require('../containers/DownloadButtonContainer');
var generalUtils = require('../utils/GeneralUtils.js');
var SuspendResumeButtonContainer = require('../containers/SuspendResumeButtonContainer');
var KillJobButtonContainer = require('../containers/KillJobButtonContainer');

function JobDetails(props) {
	console.log('jobdetails props', props);
	return(
		<div style={styles.transparentBg} className="col-sm-12 text-center">
			<h1>Job Details</h1>
			<div style={styles.containerStyle}>
				<div className="col-sm-3 col-sm-offset-2 text-right" style={styles.jobDetailRowStyle}>ID: </div>
				<div className="col-sm-4 text-left" style={styles.jobDetailRowStyle}>{props.jobID}</div>
				<div className="col-sm-3 col-sm-offset-2 text-right" style={styles.jobDetailRowStyle}>Type: </div>
				<div className="col-sm-4 text-left" style={styles.jobDetailRowStyle}>{generalUtils.capitalizeFirstLetter(props.jobType)}</div>
				<div className="col-sm-3 col-sm-offset-2 text-right" style={styles.jobDetailRowStyle}>Status: </div>
				<div className="col-sm-4 text-left" style={styles.jobDetailRowStyle}>{generalUtils.capitalizeFirstLetter(props.jobStatus)}</div>
				{(function() {
					if(props.jobType == 'training') {
						if(isNaN(props.procID)) {
							return(
								<div>
									<div className="col-sm-3 col-sm-offset-2 text-right" style={styles.jobDetailRowStyle}>Training Accuracy: </div>
									<div className="col-sm-4 text-left" style={styles.jobDetailRowStyle}>{props.finalAccuracy}</div>
									<div className="col-sm-3 col-sm-offset-2 text-right" style={styles.jobDetailRowStyle}>Model: </div>
									<div className="col-sm-4 text-left" style={styles.jobDetailRowStyle}>
										<DownloadButtonContainer
											modelDownloadLink={props.model}
											shouldDisplayButton={true} />
									</div>
									<div className="col-sm-3 col-sm-offset-2 text-right" style={styles.jobDetailRowStyle}>Chart: </div>
									<div className="col-sm-6 text-left" id="chart-container" style={styles.jobDetailRowStyle}>
										<TrainingAccuracyChartContainer
											shouldRenderChart={true}
											container='accuracy-epoch-chart'
											options={props.options} />
									</div>
								</div>
							);
						} else {
							return(
								<div>
									<SuspendResumeButtonContainer
										action={'suspend'} />
									<KillJobButtonContainer />
								</div>
							);
						}
					} else {
						return(
							<div>
								<div className="col-sm-3 col-sm-offset-2 text-right" style={styles.jobDetailRowStyle}>Prediction: </div>
								<div className="col-sm-4 text-left" style={styles.jobDetailRowStyle}>{props.prediction}</div>
							</div>
						);
					}
				}) ()}
			</div>
		</div>
	);
}

JobDetails.propTypes = {
	jobID: PropTypes.string.isRequired,
	jobType: PropTypes.string.isRequired,
	jobStatus: PropTypes.string.isRequired,
	finalAccuracy: PropTypes.string,
	prediction: PropTypes.string,
	model: PropTypes.string,
	options: PropTypes.object
};

module.exports = JobDetails;
