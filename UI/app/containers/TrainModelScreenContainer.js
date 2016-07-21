var React = require('react');
var PropTypes = React.PropTypes;
var TrainModelScreen = require('../components/TrainModelScreen');

var TrainModelScreenContainer = React.createClass({
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
	  fileName: '',
	  result: '',
	  shouldDisplayButton: false,
	  modelDownloadLink: '',
	  shouldRenderChart: false,
	  container: 'accuracy-epoch-chart',
	  options: {},
	  epochValues: [],
	  dataValues: []
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
	var self = this;
	reader.onloadend = function() {
		self.setState({
			file: file,
			fileName: file.name
		});
	};
	reader.readAsDataURL(file);
  },
  handleSubmitData: function(e) {
	var self = this;
	this.setState({
		result: 'Uploading and training ...'
	});
    e.preventDefault();
	var xhr = new XMLHttpRequest();
	var prevDataLength = 0;
	var nextReadPosition = 0;
	var isChartDrawn = false;
	var onProgress = function(e) {
		if(e.lengthComputable) {
			var percentComplete = (e.loaded / e.total) * 100;
			console.log('percentComplete', percentComplete);
		}
	};
	/*var onReady = function(e) {
		if(xhr.readyState == 4 && xhr.status == 200) {
			console.log('unparsed response', xhr.responseText);
			var response = JSON.parse(xhr.responseText);
			console.log('response', response);
			self.handleServiceResponse(response);
		}
	};*/
	var onError = function(e) {
		self.handleErrorResponse();
	};
	var formData = new FormData();
	formData.append('width', this.state.imageWidth);
	formData.append('height', this.state.imageHeight);
	formData.append('nClass', this.state.classNum);
	formData.append('alpha', this.state.learningRate);
	formData.append('upload', this.state.file);
	xhr.open('post', 'http://deepc05.acis.ufl.edu:8888/uploadCompleteScript', true);
	xhr.addEventListener('error', onError, false);
	xhr.addEventListener('progress', onProgress, false);
	xhr.send(formData);
	//xhr.addEventListener('readystatechange', onReady, false);
	var pollTimer = setInterval(function(){
		var unprocessedResponseLength = xhr.responseText.length;
		var unprocessedResponse = xhr.responseText;
		if(prevDataLength != unprocessedResponseLength) {
			//console.log('unparsed continuous response :: ', unprocessedResponse);
			prevDataLength = unprocessedResponseLength;
			var response = unprocessedResponse.substring(nextReadPosition, unprocessedResponseLength);
			//console.log('response :: ', response);
			nextReadPosition = unprocessedResponseLength;
			var processedResponse = JSON.parse(response);
			//console.log('processedResponse :: ', processedResponse);
			if(!isChartDrawn) {
				self.handleServiceResponse(processedResponse);
				isChartDrawn = true;
			} else {
				self.handleUpdateChart(processedResponse);
			}
		}
		if (xhr.readyState == 4 && prevDataLength == unprocessedResponseLength) {
			clearInterval(pollTimer);
		}
	}, 100);
  },
  handleServiceResponse: function(responseObject) {
	var accuracyList = JSON.parse(responseObject.Accuracy);
	var epochValues = [];
	var dataValues = [];
	for(var i = 0; i < accuracyList.length; i++) {
		epochValues[i] = parseInt(accuracyList[i].Epoch);
		dataValues[i] = parseFloat(accuracyList[i].Accuracy) * 100;
	}
	var optionValues = {
		title: {
			text: 'Accuracy vs. Epoch'
		},
		xAxis: {
			title: {
				text: 'Epoch'
			},
			categories: epochValues
		},
		yAxis: {
			title: {
				text: 'Accuracy (%)'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: [{
			name: 'Accuracy',
			data: dataValues
		}]
	};
	this.setState({
		result: 'Model successfully trained with accuracy: ' + (accuracyList[accuracyList.length - 1].Accuracy * 100).toFixed(2) + '%',
		modelDownloadLink: responseObject.trainedModel,
		shouldDisplayButton: true,
		shouldRenderChart: true,
		container: 'accuracy-epoch-chart',
		options: optionValues
	});
  },
  handleUpdateChart: function(responseObject) {
	var accuracyList = JSON.parse(responseObject.Accuracy);
	var latestEpochValues = [];
	var latestDataValues = [];
	for(var i = 0; i < accuracyList.length; i++) {
		latestEpochValues[i] = parseInt(accuracyList[i].Epoch);
		latestDataValues[i] = parseFloat(accuracyList[i].Accuracy) * 100;
	}
	this.setState({
		result: 'Model successfully trained with accuracy: ' + (accuracyList[accuracyList.length - 1].Accuracy * 100).toFixed(2) + '%',
		modelDownloadLink: responseObject.trainedModel,
		shouldDisplayButton: true,
		shouldRenderChart: false,
		epochValues: latestEpochValues,
		dataValues: latestDataValues
	});
  },
  handleErrorResponse: function() {
	this.setState({
		result: 'Model could not be trained successfully!',
		modelDownloadLink: '',
		shouldDisplayButton: false,
		shouldRenderChart: false,
		container: 'accuracy-epoch-chart',
		options: {}
	});
  },
  render: function() {
	  return(
		  <TrainModelScreen
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
			fileName={this.state.fileName}
			result={this.state.result}
			modelDownloadLink={this.state.modelDownloadLink}
			shouldDisplayButton={this.state.shouldDisplayButton}
			shouldRenderChart={this.state.shouldRenderChart}
			container={this.state.container}
			options={this.state.options}
			epochValues={this.state.epochValues}
			dataValues={this.state.dataValues} />
	  );
  }
});

module.exports = TrainModelScreenContainer;
