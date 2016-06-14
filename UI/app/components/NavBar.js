var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function NavBar(props) {
  return(
    <div className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand"><span>Home</span></a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-ex-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="#">Login</a>
            </li>
            <li>
              <Link to='/Contact'>Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

module.exports = NavBar;
