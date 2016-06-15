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
      learningRate: 0.01,
	  file: '',
	  fileName: ''
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
  handleUpdateFile: function(e) {
	e.preventDefault();
	var reader = new FileReader();
	var file = e.target.files[0];
	console.log('file', file);
	reader.onloadend = () => {
		this.setState({
			file: file,
			fileName: file.name
		});
	}
	reader.readAsDataURL(file);
  },
  handleSubmitData: function(e) {
    e.preventDefault();
	var xhr = new XMLHttpRequest();
	var onProgress = function(e) {
		if(e.lengthComputable) {
			var percentComplete = (e.loaded / e.total) * 100;
			console.log('percentComplete', percentComplete);
		}
	};
	var onReady = function(e) {

	};
	var onError = function(e) {

	};
	var formData = new FormData();
	formData.append('width', this.state.imageWidth);
	formData.append('height', this.state.imageHeight);
	formData.append('nClass', this.state.classNum);
	formData.append('alpha', this.state.learningRate);
	formData.append('upload', this.state.file);
	xhr.open('post', 'http://localhost:8888/uploadCompleteScript', true);
	xhr.addEventListener('error', onError, false);
	xhr.addEventListener('progress', onProgress, false);
	xhr.send(formData);
	xhr.addEventListener('readystatechange', onReady, false);
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
  	      	onUpdateLearningRate={this.handleUpdateLearningRate}
			onUpdateFile={this.handleUpdateFile}
			fileName={this.state.fileName} />
	  );
  }
});

module.exports = UploadDataScreenContainer;
