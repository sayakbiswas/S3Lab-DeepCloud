var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

function NewImageClassification(props) {
	return(
		<div style={styles.gridContainer}>
			<GridList
				cols={2}
				cellHeight={400}
				style={styles.gridList}>
				<Subheader>New Image Classification Dataset</Subheader>
				<GridTile style={styles.gridTile}>
					<Paper zDepth={2} style={styles.gridPaper}>
						<Toolbar style={styles.toolbar}>
							<ToolbarGroup firstChild={true} style={styles.toolbarGroup}>
								<ToolbarTitle text="Image Options" style={styles.toolbarTitle}/>
							</ToolbarGroup>
						</Toolbar>
						<div style={styles.paperMainContents}>
							<SelectField
								floatingLabelText="Image Type"
								floatingLabelStyle={styles.labelText}
								value={props.imageType}
								onChange={props.onUpdateImageType}>
									<MenuItem value="color" primaryText="Color" />
									<MenuItem value="grayscale" primaryText="Grayscale" />
							</SelectField>
							<br />
							<TextField
								floatingLabelText="Image Height"
								floatingLabelStyle={styles.labelText}
								value={props.imageHeight}
								type="number"
								onChange={props.onUpdateImageHeight} />
							<br />
							<TextField
								floatingLabelText="Image Width"
								floatingLabelStyle={styles.labelText}
								value={props.imageWidth}
								type="number"
								onChange={props.onUpdateImageWidth} />
						</div>
					</Paper>
				</GridTile>
				<GridTile style={styles.gridTile}>
					<Paper zDepth={2} style={styles.gridPaper}>
						<Toolbar style={styles.toolbar}>
							<ToolbarGroup firstChild={true} style={styles.toolbarGroup}>
								<ToolbarTitle text="Dataset Options" style={styles.toolbarTitle} />
							</ToolbarGroup>
						</Toolbar>
						<div style={styles.paperMainContents}>
							<RaisedButton
								label="Training Images Archive"
								labelPosition="before"
								primary={true} >
									<input
										type="file"
										name="upload"
										multiple="multiple"
										style={styles.uploadButton}
										onChange={props.onUpdateFile} />
							</RaisedButton>
							<TextField
								name="fileName"
								readOnly
								value={props.fileName}
								style={styles.uploadButtonText} />
							<br />
							<TextField
								floatingLabelText="Validation Set %"
								floatingLabelStyle={styles.labelText}
								value={props.validationPercent}
								type="number"
								onChange={props.onUpdateValidationPercent} />
							<br />
							<TextField
								floatingLabelText="Test Set %"
								floatingLabelStyle={styles.labelText}
								value={props.testingPercent}
								type="number"
								onChange={props.onUpdateTestingPercent} />
							<br />
							<TextField
								floatingLabelText="Dataset Name"
								floatingLabelStyle={styles.labelText}
								value={props.datasetName}
								onChange={props.onUpdateDatasetName} />
						</div>
					</Paper>
				</GridTile>
			</GridList>
			<RaisedButton
				label="Create Dataset & Train"
				type="submit"
				primary={true} />
		</div>
	);
}

NewImageClassification.propTypes = {
	imageType: PropTypes.string.isRequired,
	onUpdateImageType: PropTypes.func.isRequired,
	imageWidth: PropTypes.number.isRequired,
	onUpdateImageWidth: PropTypes.func.isRequired,
	imageHeight: PropTypes.number.isRequired,
	onUpdateImageHeight: PropTypes.func.isRequired,
	onUpdateFile: PropTypes.func.isRequired,
	fileName: PropTypes.string.isRequired,
	validationPercent: PropTypes.number.isRequired,
	onUpdateTestingPercent: PropTypes.func.isRequired,
	testingPercent: PropTypes.number.isRequired,
	onUpdateTestingPercent: PropTypes.func.isRequired,
	datasetName: PropTypes.string.isRequired,
	onUpdateDatasetName: PropTypes.func.isRequired
};

module.exports = NewImageClassification;
