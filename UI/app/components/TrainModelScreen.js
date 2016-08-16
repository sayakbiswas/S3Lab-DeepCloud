var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var DownloadButtonContainer = require('../containers/DownloadButtonContainer');
var TrainingAccuracyChartContainer = require('../containers/TrainingAccuracyChartContainer');

function TrainModelScreen(props) {
  return(
	<div className="ui two column grid">
		<div className="row">
			<div className="column">
				<div className="ui fluid raised card">
					<div className="content">
						<div className="header center aligned">Upload Data for Training</div>
						<div className="description">
							<form className="ui form" onSubmit={props.onSubmitData} encType="multipart/form-data">
								<div className="field">
									<label>Image Width:</label>
									<input
										type="number"
										placeholder="0"
										value={props.imageWidth}
										onChange={props.onUpdateImageWidth} />
								</div>
								<div className="field">
									<label>Image Height:</label>
									<input
										type="number"
										placeholder="0"
										value={props.imageHeight}
										onChange={props.onUpdateImageHeight} />
								</div>
								<div className="field">
									<label>Number of Classes:</label>
									<input
										type="number"
										placeholder="0"
										value={props.classNum}
										onChange={props.onUpdateClassNum} />
								</div>
								<div className="field">
									<label>Learning Rate:</label>
									<input
										type="number"
										placeholder="0"
										step="any"
										value={props.learningRate}
										onChange={props.onUpdateLearningRate} />
								</div>
								<div className="field">
									<div className="ui left action input">
										<label htmlFor="file" className="ui icon button">
											<i className="attach icon"></i>
											Choose File
										</label>
										<input
											type="file"
											id="file"
											name="upload"
											multiple="multiple"
											style={styles.invisible}
											onChange={props.onUpdateFile} />
										<input
											type="text"
											readOnly
											value={props.fileName} />
									</div>
								</div>
								<button className="ui primary button" type="submit">Train</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="column results-section">
				<div className="ui fluid raised card">
					<div className="content">
						<div className="header center aligned">Training Results</div>
						<div className="description">
							<div>
								{props.result}
								<span id="download-button">
									<DownloadButtonContainer
										modelDownloadLink={props.modelDownloadLink}
										shouldDisplayButton={props.shouldDisplayButton} />
								</span>
							</div>
							<div id="result-charts">
								<TrainingAccuracyChartContainer
									shouldRenderChart={props.shouldRenderChart}
									container={props.container}
									options={props.options}
									epochValues={props.epochValues}
									dataValues={props.dataValues} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

TrainModelScreen.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
  imageWidth: PropTypes.number.isRequired,
  onUpdateImageWidth: PropTypes.func.isRequired,
  imageHeight: PropTypes.number.isRequired,
  onUpdateImageHeight: PropTypes.func.isRequired,
  classNum: PropTypes.number.isRequired,
  onUpdateClassNum: PropTypes.func.isRequired,
  learningRate: PropTypes.number.isRequired,
  onUpdateLearningRate: PropTypes.func.isRequired,
  onUpdateFile: PropTypes.func.isRequired,
  fileName: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  modelDownloadLink: PropTypes.string.isRequired,
  shouldDisplayButton: PropTypes.bool.isRequired,
  shouldRenderChart: PropTypes.bool.isRequired,
  container: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  epochValues: PropTypes.array.isRequired,
  dataValues: PropTypes.array.isRequired
};

module.exports = TrainModelScreen;
