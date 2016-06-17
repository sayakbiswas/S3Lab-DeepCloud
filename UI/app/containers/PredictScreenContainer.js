var React = require('react');
var PropTypes = React.PropTypes;
var PredictScreen = require('../components/PredictScreen');

var PredictScreenContainer = React.createClass({
	contextTypes: {
		router: PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			file: '',
			fileName: '',
			result: '',
			imagePreviewUrl: ''
		};
	},
	handleUpdateFile: function(e) {
		e.preventDefault();
		var reader = new FileReader();
		var file = e.target.files[0];
		console.log('file', file);
		reader.onloadend = function() {
			this.setState({
				file: file,
				fileName: file.name,
				imagePreviewUrl: reader.result
			});
		};
		reader.readAsDataURL(file);
	},
	handleSubmitData: function(e) {
		e.preventDefault();
		var self = this;
		this.setState({
			result: 'Working ...'
		});
		var xhr = new XMLHttpRequest();
		var onProgress = function(e) {
			if(e.lengthComputable) {
				var percentComplete = (e.loaded / e.total) * 100;
				console.log('percentComplete', percentComplete);
			}
		};
		var onReady = function(e) {
			if(xhr.readyState == 4 && xhr.status == 200) {
				var response = JSON.parse(xhr.responseText);
				self.handleServiceResponse(response);
			}
		};
		var onError = function(e) {

		};
		var formData = new FormData();
		formData.append('upload', this.state.file);
		xhr.open('post', 'https://arcane-shore-81829.herokuapp.com/MNISTPredictor', true);
		xhr.addEventListener('error', onError, false);
		xhr.addEventListener('progress', onProgress, false);
		xhr.send(formData);
		xhr.addEventListener('readystatechange', onReady, false);
	},
	handleServiceResponse: function(responseObject) {
		this.setState({
			result: 'The number in the image is: ' + responseObject.Prediction
		});
	},
	render: function() {
		return(
			<PredictScreen
				onSubmitData={this.handleSubmitData}
				onUpdateFile={this.handleUpdateFile}
				fileName={this.state.fileName}
				result={this.state.result}
				imagePreviewUrl={this.state.imagePreviewUrl} />
		);
	}
});

module.exports = PredictScreenContainer;
