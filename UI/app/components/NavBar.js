var React = require('react');
var styles = require('../styles/styles');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var firebaseUtils = require('../utils/firebaseUtils');

var NavBar=React.createClass( {
 getInitialState: function(){
    return {
      loggedIn: firebaseUtils.isLoggedIn()
    }
  },
  handleLogout: function(loggedIn){
    this.setState({
      loggedIn: loggedIn
    });
  },
  componentWillMount: function(){
    firebaseUtils.onChange = this.handleLogout;
  },
  processLogout:function(){
	firebaseUtils.logout();  
  },
  
 render:function() {
	var loginOrOut;
    var register;
    if(this.state.loggedIn){
      loginOrOut = <li><Link to="/"className="active" onClick={this.processLogout}>Logout</Link></li>;
      register = null
    } else {
      loginOrOut = <li><Link to="/login" className="active">Login</Link></li>;
      register = <li><Link to="/register" className="active"> Register </Link></li>;
    }
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
		  <li><Link to="/dashboard" className="active"> Dashboard </Link></li>
		  {loginOrOut}
		  {register}
            <li>
              <Link to='/Contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}});

module.exports = NavBar;
