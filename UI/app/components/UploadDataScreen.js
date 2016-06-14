var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;

function UploadDataScreen(props) {
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
      <h2>Upload Data</h2>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitData} encType="multipart/form-data">
          <div className="form-group">
            Image Width:
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={props.imageWidth}
              onChange={props.onUpdateImageWidth} />
          </div>
          <div className="form-group">
            Image Height:
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={props.imageHeight}
              onChange={props.onUpdateImageHeight} />
          </div>
          <div className="form-group">
            Number of Classes:
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={props.classNum}
              onChange={props.onUpdateClassNum} />
          </div>
          <div className="form-group">
            Learning Rate:
            <input
              type="number"
              className="form-control"
              placeholder="0"
			  step="any"
              value={props.learningRate}
              onChange={props.onUpdateLearningRate} />
          </div>
          <div className="form-group">
            <label className="btn btn-default btn-file">
              Choose Files <input type="file" name="upload" multiple="multiple" style={styles.invisible} />
            </label>
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                  className="btn btn-block btn-success"
                  type="submit">
                  Upload File
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

UploadDataScreen.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
  imageWidth: PropTypes.number.isRequired,
  onUpdateImageWidth: PropTypes.func.isRequired,
  imageHeight: PropTypes.number.isRequired,
  onUpdateImageHeight: PropTypes.func.isRequired,
  classNum: PropTypes.number.isRequired,
  onUpdateClassNum: PropTypes.func.isRequired,
  learningRate: PropTypes.number.isRequired,
  onUpdateLearningRate: PropTypes.func.isRequired
};

module.exports = UploadDataScreen;
