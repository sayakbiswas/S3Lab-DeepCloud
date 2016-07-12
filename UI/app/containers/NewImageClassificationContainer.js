var React = require('react');
var PropTypes = React.PropTypes;
var NewImageClassification = require('../components/NewImageClassification');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var NewImageClassificationContainer = React.createClass({
	contextTypes: {
		router: PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			imageType: '',
			imageWidth: 28,
			imageHeight: 28,
			file: '',
			fileName: '',
			validationPercent: 25,
			testingPercent: 0,
			datasetName: ''
		};
	},
	handleUpdateImageType: function(e, idx, val) {
		this.setState({
			imageType: val
		});
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
	handleUpdateValidationPercent: function(e) {
		this.setState({
			validationPercent: e.target.value
		});
	},
	handleUpdateTestingPercent: function(e) {
		this.setState({
			testingPercent: e.target.value
		});
	},
	handleUpdateDatasetName: function(e) {
		this.setState({
			datasetName: e.target.value
		});
	},
	render: function() {
		return(
			<MuiThemeProvider>
				<NewImageClassification
					imageType={this.state.imageType}
					onUpdateImageType={this.handleUpdateImageType}
					imageWidth={this.state.imageWidth}
					onUpdateImageWidth={this.handleUpdateImageWidth}
					imageHeight={this.state.imageHeight}
					onUpdateImageHeight={this.handleUpdateImageHeight}
					onUpdateFile={this.handleUpdateFile}
					fileName={this.state.fileName}
					validationPercent={this.state.validationPercent}
					onUpdateValidationPercent={this.handleUpdateValidationPercent}
					testingPercent={this.state.testingPercent}
					onUpdateTestingPercent={this.handleUpdateTestingPercent}
					datasetName={this.state.datasetName}
					onUpdateDatasetName={this.handleUpdateDatasetName} />
			</MuiThemeProvider>
		);
	}
});

module.exports = NewImageClassificationContainer;
