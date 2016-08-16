var React = require('react');
var firebaseUtils = require('../utils/firebaseUtils');
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
var styles = require('../styles/styles');

var Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      error: false,
	  isShowingModal: false
    }
  },
  handleClick: function() {
	  this.setState({
		  isShowingModal: true
	  });
  },
  handleClose: function() {
	  this.setState({
		  isShowingModal: false
	  });
	  this.props.closeModal();
  },
  componentWillReceiveProps: function(nextProps) {
	  this.setState({
		  isShowingModal: nextProps.showModal
	  });
  },
  handleSubmit: function(e){
    e.preventDefault();
    var email = this.refs.email.value;
    var pw = this.refs.pw.value;
    firebaseUtils.loginWithPW({email: email, password: pw}, function(err){
      if ( ! err ) {
        // var location = this.props.location;
		// console.log(location);
        // if (location.state && location.state.nextPathname) {
        //   this.context.router.replace(location.state.nextPathname)
        // } else {
        //   this.context.router.replace('/')
        // }
		this.context.router.replace('/dashboard');
      } else {
        console.log("Login failed! ", err);
        this.setState({error: err});
      }
    }.bind(this));
  },
  handleRegisterClick: function() {
	this.handleClose();
	this.props.showRegister();
  },
  render: function(){
    var errors = this.state.error ? <p> {this.state.error} </p> : '';
    return (
		<div onClick={this.handleClick}>
			{
				this.state.isShowingModal &&
				<ModalContainer onClose={this.handleClose}>
					<ModalDialog onClose={this.handleClose}>
						<div className="col-sm-12" style={styles.loginModalStyle}>
							<h1> Login </h1>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
							  		<label> Email </label>
							  		<input className="form-control" ref="email" placeholder="Email"/>
								</div>
								<div className="form-group">
							  		<label>Password</label>
							  		<input ref="pw" type="password" className="form-control" placeholder="Password" />
								</div>
								{errors}
								<div className="col-sm-6">
									<button type="submit" className="btn btn-success">Login</button>
								</div>
								<div className="col-sm-6 text-right">
									<button type="button" className="btn btn-info" onClick={this.handleRegisterClick}>Register</button>
								</div>
						  	</form>
						</div>
					</ModalDialog>
				</ModalContainer>
			}
		</div>


    );
  }
});

module.exports = Login;
