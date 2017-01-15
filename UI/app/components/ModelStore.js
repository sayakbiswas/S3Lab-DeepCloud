var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var styles = require('../styles/styles');
var generalUtils = require('../utils/GeneralUtils.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function ModelStore(props) {
    return(
        <div className="ui container">
            <div className="ui grid">
                <div className="row">
                    <div className="column">
                        <div className="ui fluid raised card gettingstartedcard">
                            <div className="content">
                                <div className="ui grid">
                                    <div className="row">
						                <div className="five wide column">
                                            <div className="field">
                                                <select className="ui dropdown">
                                                    <option value="">Category</option>
                                                    <option value="Vision">Vision</option>
                                                    <option value="Natural Language">Natural Language</option>
                                                    <option value="Game Bots">Game Bots</option>
                                                    <option value="Genomics">Genomics</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="six wide column center aligned">
                                            <div className="header">
                                                Model Store
                                            </div>
                                        </div>
                                        <div className="five wide column right aligned">
                                            <div className="ui icon input">
                                                <input type="text" placeholder="Search..." />
                                                <i className="inverted circular search link icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="ui fluid raised card gettingstartedcard">
							<div className="content">
                                <div className="header center aligned">Models</div>
                                <div className="description">
                                    <div className="ui three cards">
                                        <a className="ui card" href="#">
                                            <div className="content">
                                                <div className="header">3-Layer CNN</div>
                                                <div className="meta">
                                                    <span className="category">Vision</span>
                                                </div>
                                                <div className="description">
                                                    <p>Description of 3-Layer CNN</p>
                                                </div>
                                            </div>
                                            <div className="extra content">
                                                <div className="left floated">
                                                    Rating:
                                                    <div className="ui star rating" data-rating="4" data-max-rating="5"></div>
                                                </div>
                                                <div className="right floated author">
                                                    <img className="ui avatar image" src="app/img/usr_img_1.png" /> Alex
                                                </div>
                                            </div>
                                        </a>

                                        <a className="ui card" href="#">
                                            <div className="content">
                                                <div className="header">RNN/LSTM</div>
                                                <div className="meta">
                                                    <span className="category">Natural Language</span>
                                                </div>
                                                <div className="description">
                                                    <p>Description of RNN/LSTM</p>
                                                </div>
                                            </div>
                                            <div className="extra content">
                                                <div className="left floated">
                                                    Rating:
                                                    <div className="ui star rating" data-rating="3" data-max-rating="5"></div>
                                                </div>
                                                <div className="right floated author">
                                                    <img className="ui avatar image" src="app/img/usr_img_2.png" /> Matt
                                                </div>
                                            </div>
                                        </a>

                                        <a className="ui card" href="#">
                                            <div className="content">
                                                <div className="header">GAN</div>
                                                <div className="meta">
                                                    <span className="category">Vision</span>
                                                </div>
                                                <div className="description">
                                                    <p>Description of GAN</p>
                                                </div>
                                            </div>
                                            <div className="extra content">
                                                <div className="left floated">
                                                    Rating:
                                                    <div className="ui star rating" data-rating="5" data-max-rating="5"></div>
                                                </div>
                                                <div className="right floated author">
                                                    <img className="ui avatar image" src="app/img/usr_img_3.png" /> Dave
                                                </div>
                                            </div>
                                        </a>

                                        <a className="ui card" href="#">
                                            <div className="content">
                                                <div className="header">Deep-Q</div>
                                                <div className="meta">
                                                    <span className="category">Game Bot</span>
                                                </div>
                                                <div className="description">
                                                    <p>Description of Deep-Q</p>
                                                </div>
                                            </div>
                                            <div className="extra content">
                                                <div className="left floated">
                                                    Rating:
                                                    <div className="ui star rating" data-rating="4" data-max-rating="5"></div>
                                                </div>
                                                <div className="right floated author">
                                                    <img className="ui avatar image" src="app/img/usr_img_1.png" /> Alex
                                                </div>
                                            </div>
                                        </a>
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

ModelStore.propTypes = {
};

module.exports = ModelStore;