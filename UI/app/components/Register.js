var React = require('react');
var firebaseUtils = require('../utils/firebaseUtils');
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
var styles = require('../styles/styles');

var Register = React.createClass({
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
    firebaseUtils.createUser({email: email, password: pw}, function(err){
      if(! err ){
          this.context.router.replace('/');
      } else {
        this.setState({error: err});
      }
    }.bind(this));
  },
  render: function(){
    var errors = this.state.error ? <p> {this.state.error} </p> : '';
    return (
		<div onClick={this.handleClick}>
			{
				this.state.isShowingModal &&
				<ModalContainer onClose={this.handleClose}>
					<ModalDialog onClose={this.handleClose}>
						<div className="ui basic segment" style={styles.loginModalStyle}>
							<div className="ui header center aligned">Register</div>
							<div className="description">
								<form className="ui form" onSubmit={this.handleSubmit}>
									<div className="field">
										<label>Email</label>
										<input
											type="email"
											ref="email"
											placeholder="Email" />
									</div>
									<div className="field">
										<label>Password</label>
										<input
											ref="pw"
											type="password"
											placeholder="Password" />
									</div>
									{errors}
									<button className="ui primary button" type="submit">Register</button>
								</form>
							</div>
						</div>
					</ModalDialog>
				</ModalContainer>
			}
		</div>

    )
  }
});

module.exports = Register;
