var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var generalUtils = require('../utils/GeneralUtils.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var DownloadButtonContainer = require('../containers/DownloadButtonContainer');

function ModelDetails(props) {
    return(
        <div className="ui container">
            <div className="ui grid">
                <div className="row">
                    <div className="column">
                        <div className="ui fluid raised card gettingstartedcard modeldetailscard">
                            <div className="content">
                                <div className="ui grid">
                                    <div className="row">
						                <div className="eight wide column left aligned modelname">
                                            <img src="app/img/model_icon.png" className="modelicon"/>3-Layer CNN
                                            <div className="modeldescription">
                                                Headline of 3-Layer CNN
                                            </div>
                                            <div className="modeldownload">
                                                <DownloadButtonContainer
											        modelDownloadLink=""
											        shouldDisplayButton={true} />
                                            </div>
                                        </div>
                                        <div className="eight wide column right aligned">
                                            Rating:
                                            <span className="ui star rating" data-rating="4" data-max-rating="5"></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="column modelexplanation">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id leo pulvinar, faucibus nibh et, fermentum ante. Donec ac convallis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero elementum, efficitur risus ac, eleifend nisi. Mauris rutrum ultrices magna, id finibus libero commodo ac. Nullam massa ex, ullamcorper a maximus condimentum, laoreet vel tortor. Vestibulum commodo odio nec massa sagittis volutpat. Vestibulum vel consectetur eros, non feugiat neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In metus quam, laoreet sit amet pretium quis, auctor ac velit. Phasellus pellentesque non ligula vehicula tempor. Nunc varius turpis sit amet enim cursus maximus. Vestibulum justo libero, posuere sed est non, sagittis pretium tellus.
                                            </p>
                                            <p>
                                                Duis porta odio sed urna aliquet, sit amet lobortis neque placerat. Mauris nisi ligula, tincidunt et scelerisque in, luctus sed lectus. Pellentesque luctus mauris suscipit lacus sodales, quis varius sem suscipit. Sed ac faucibus augue. Phasellus rutrum condimentum tortor, vitae viverra diam commodo id. Ut euismod mi orci. Fusce sed sodales enim, eu pretium eros. Sed ante nunc, tincidunt ornare nisi at, scelerisque hendrerit augue. Donec justo libero, posuere sed leo sed, pellentesque consequat elit. In bibendum felis quis felis facilisis scelerisque. Aenean mollis lorem eu dui pharetra, ac ultricies purus laoreet. Pellentesque iaculis sem id nisl consectetur eleifend.
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
                                                <DownloadButtonContainer
											        modelDownloadLink=""
											        shouldDisplayButton={true} />
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
                                            <div className="header">Comments</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModelDetails.propTypes = {
};

module.exports = ModelDetails;