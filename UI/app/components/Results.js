var React = require('React');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;

function Results(props) {
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
      <h1>{props.header}</h1>
      <div class="results-row-header">
        <div class="col-sm-6"><h4>Test Image<h4></div>
        <div class="col-sm-6"><h4>Predictions</h4></div>
      </div>
      <div class="results-row-header">
        <div class="col-sm-6"></div>
        <div class="col-sm-6"></div>
      </div>
      <div class="row">
        <div class="col-sm-4">Layer</div>
        <div class="col-sm-4">Activations</div>
        <div class="col-sm-4">Weights</div>
      </div>
    </div>
  );
}

module.exports = Results;
