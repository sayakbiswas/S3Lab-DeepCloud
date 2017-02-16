var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var generalUtils = require('../utils/GeneralUtils.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var DownloadButtonContainer = require('../containers/DownloadButtonContainer');

function ModelDetails(props) {
    return (
        <div className="ui container">
            <div className="ui grid">
                <div className="row">
                    <div className="column">
                        <div className="ui fluid raised card gettingstartedcard modeldetailscard">
                            <div className="content">
                                <div className="ui grid">
                                    <div className="row">
                                        <div className="eight wide column left aligned modelname">
                                            <img src="app/img/model_icon.png" className="modelicon" />3-Layer CNN
                                            <div className="modeldescription">
                                                A CNN for image tagging
                                                <span className="ui label">
                                                    Vision
                                                </span>
                                            </div>
                                            <div className="modeldownload">
                                                <DownloadButtonContainer
                                                    modelDownloadLink=""
                                                    shouldDisplayButton={true} />
                                            </div>
                                        </div>
                                        <div className="eight wide column right aligned modelinfo">
                                            <div>
                                                Rating:
                                                <span className="ui star rating" data-rating="4" data-max-rating="5"></span>
                                            </div>
                                            <div className="devdetails">
                                                Developed By:
                                                Alex<img className="ui avatar image" src="app/img/usr_img_1.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="column modelexplanation">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id leo pulvinar, faucibus nibh et, fermentum ante. Donec ac convallis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero elementum, efficitur risus ac, eleifend nisi. Mauris rutrum ultrices magna, id finibus libero commodo ac. Nullam massa ex, ullamcorper a maximus condimentum, laoreet vel tortor. Vestibulum commodo odio nec massa sagittis volutpat. Vestibulum vel consectetur eros, non feugiat neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In metus quam, laoreet sit amet pretium quis, auctor ac velit. Phasellus pellentesque non ligula vehicula tempor. Nunc varius turpis sit amet enim cursus maximus. Vestibulum justo libero, posuere sed est non, sagittis pretium tellus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="column modelextras">
                                            <div className="header">More</div>
                                            <div className="cites">
                                                Cited By: 2
                                            </div>
                                            <div className="paperDownload">
                                                Associated Paper:
                                                <button
                                                    className="ui blue button" onClick={props.onClickDownload}>
                                                    Download Paper
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ui fluid raised card gettingstartedcard modelcommentscard">
                            <div className="content">
                                <div className="ui grid">
                                    <div className="row">
                                        <div className="column">
                                            <div className="ui comments">
                                                <h3 className="ui dividing header">Reviews</h3>
                                                <div className="comment">
                                                    <a className="avatar">
                                                        <img src="app/img/usr_img_1.png" />
                                                    </a>
                                                    <div className="content">
                                                        <a className="author">Matt</a>
                                                        <span className="ui star rating" data-rating="3" data-max-rating="5"></span>
                                                        <div className="metadata">
                                                            <span className="date">Today at 5:42PM</span>
                                                        </div>
                                                        <div className="text">
                                                            This model saved a lot of time in my research. Also, very well documented!
                                                        </div>
                                                        <div className="actions">
                                                            <a className="report">Report</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    <a className="avatar">
                                                        <img src="app/img/usr_img_2.png" />
                                                    </a>
                                                    <div className="content">
                                                        <a className="author">Elliot Fu</a>
                                                        <span className="ui star rating" data-rating="5" data-max-rating="5"></span>
                                                        <div className="metadata">
                                                            <span className="date">Yesterday at 12:30AM</span>
                                                        </div>
                                                        <div className="text">
                                                            <p>The accuracy of this model is great. I trained it for 3 hrs and got an accuracy of around 98%.
                                                    Will play around with it by changing the hyper-parameters.</p>
                                                        </div>
                                                        <div className="actions">
                                                            <a className="report">Report</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <form className="ui reply form" onSubmit={props.onAddReview}>
                                                    <div className="field">
                                                        <textarea
                                                            value={props.modelReview}
                                                            onChange={props.onUpdateModelReview} >
                                                        </textarea>
                                                    </div>
                                                    <div className="ui grid">
                                                        <div className="row">
                                                            <div className="eight wide column left aligned ratings">
                                                                <b>Rating:</b>
                                                                <span className="ui star rating"
                                                                    id="set-rating" data-rating="3" data-max-rating="5"></span>
                                                            </div>
                                                            <div className="eight wide column right aligned">
                                                                <button className="ui blue labeled submit icon button"
                                                                    id="train-model-button"
                                                                    type="submit">
                                                                    <i className="icon edit"></i> Add Review
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui basic modal error">
                <div className="ui icon header">
                    <i className="warning circle icon red"></i>
                    Error
                </div>
                <div className="content">
                    <p>There was an error while trying to post your review! Please try again.</p>
                </div>
                <div className="actions">
                    <div className="ui blue ok inverted button">
                        <i className="checkmark icon"></i>
                        OK
                    </div>
                </div>
            </div>
        </div>
    );
}

ModelDetails.propTypes = {
    onAddReview: PropTypes.func.isRequired,
    modelReview: PropTypes.string.isRequired,
    onUpdateModelReview: PropTypes.func.isRequired
};

module.exports = ModelDetails;