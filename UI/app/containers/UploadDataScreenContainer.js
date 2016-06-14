var React = require('react');
var PropTypes = React.PropTypes;
var UploadDataScreen = require('../components/UploadDataScreen');

var UploadDataScreenContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      imageWidth: 28,
      imageHeight: 28,
      classNum: 10,
      learningRate: 0.01
    };
  },
  handleUpdateImageWidth: function(e) {
    this.setState({
      imageWidth: e.target.value
    });
  },
  handleUpdateImageHeight: function(e) {
    this.setState({
      imageHeight: e.target.value
    });
  },
  handleUpdateClassNum: function(e) {
    this.setState({
      classNum: e.target.value
    });
  },
  handleUpdateLearningRate: function(e) {
    this.setState({
      learningRate: e.target.value
    });
  },
  handleSubmitData: function(e) {
    e.preventDefault();
	var formData = {

	}
  },
  render: function() {
	  return(
		  <UploadDataScreen
  	      	onSubmitData={this.handleSubmitData}
  	      	imageWidth={this.state.imageWidth}
  	      	onUpdateImageWidth={this.handleUpdateImageWidth}
  	      	imageHeight={this.state.imageHeight}
  	      	onUpdateImageHeight={this.handleUpdateImageHeight}
  	      	classNum={this.state.classNum}
  	      	onUpdateClassNum={this.handleUpdateClassNum}
  	      	learningRate={this.state.learningRate}
  	      	onUpdateLearningRate={this.handleUpdateLearningRate} />  
	  );
  }
});

module.exports = UploadDataScreenContainer;
