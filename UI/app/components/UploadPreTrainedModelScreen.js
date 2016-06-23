var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function UploadPreTrainedModelScreen(props) {
	return(
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
			<h2>Upload Pre Trained Model</h2>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitData} encType="multipart/form-data">
					<div className="form-group input-group">
					  <label className="input-group-btn">
						<span className="btn btn-primary">
							Choose File
							<input
								type="file"
								name="upload"
								multiple="multiple"
								style={styles.invisible}
								onChange={props.onUpdateFile} />
						</span>
					  </label>
					<input
						type="text"
						className="form-control"
						readOnly
						value={props.fileName} />
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
		                <button
		                    className="btn btn-block btn-success"
		                    type="submit">
		                    Upload
		                </button>
		            </div>
				</form>
				<div className="col-sm-12 results-section">
					<div className="col-sm-12">
						{props.result}
					</div>
					<div className="col-sm-12">
						<Link to="/predict">
							<button
								className="btn btn-lg btn-success">
								Go to Predict
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

UploadPreTrainedModelScreen.propTypes = {
	onSubmitData: PropTypes.func.isRequired,
	onUpdateFile: PropTypes.func.isRequired,
	fileName: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired
}

module.exports = UploadPreTrainedModelScreen;