var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;

function PredictScreen(props) {
	return(
		<div className="ui one column grid">
			<div className="row">
				<div className="column">
					<div className="ui fluid raised card">
						<div className="content">
							<div className="header center aligned">Prediction</div>
							<div className="description">
								<form className="ui form" onSubmit={props.onSubmitData} encType="multipart/form-data">
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
									<button className="ui primary button" type="submit">Predict</button>
								</form>
								{(function() {
									if(props.result != '') {
										if(props.result.includes("failed")) {
											return(
												<div className="ui error message">
													{props.result}
												</div>
											);
										} else {
											return(
												<div className="ui success message">
													<div className="ui two column grid">
														<div className="row">
															<div className="column">
																Uploaded Image: <img height="100" width="100" src={props.imagePreviewUrl} />
															</div>
															<div className="column">
																{props.result}
															</div>
														</div>
													</div>
												</div>
											);
										}
									}
								}) ()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

PredictScreen.propTypes = {
	onSubmitData: PropTypes.func.isRequired,
	onUpdateFile: PropTypes.func.isRequired,
	fileName: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired,
	imagePreviewUrl: PropTypes.string.isRequired
};

module.exports = PredictScreen;
