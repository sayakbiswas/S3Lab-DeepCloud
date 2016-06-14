var React = require('react');


var ContactContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      fullname: '',
	  email:'',
	  message:'Enter your message'
    }
  },
  onSubmitName:function(e){
	e.preventDefault();
	var fullname=this.state.fullname;
	this.setState({
		fullname:'',
		email:'',
		message:'Enter your message'
	});
  },
  onUpdateName:function(e){
	this.setState({
		fullname:e.target.value
	}
	);
  },
  onUpdateEmail:function(e){
  this.setState({
	email:e.target.value
  });
  },
  onUpdateMessage:function(e){
	this.setState({
		message:e.target.value
	});
  },
  render: function () {
    return (
	<div className="section text-left">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Contact Us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form role="form" onSubmit={this.onSubmitName}>
              <div className="form-group">
                <label className="control-label" htmlFor="fullName1">Full Name</label>
                <input className="form-control" id="fullName" placeholder="Enter Full Name"
                type="text" onChange={this.onUpdateName} value={this.state.fullname}/>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="exampleInputEmail1">Email address</label>
                <input className="form-control" id="exampleInputEmail1"
                placeholder="Enter email" type="email" value={this.state.email} onChange={this.onUpdateEmail}/>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="telephoneNo">Mobile Number</label>
                <input className="form-control" id="telephoneNo" placeholder="Mobile Number"
                type="tel"/>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="message">Message</label>
				<textarea  className="form-control" id="message" rows="4" cols="50" value={this.state.message} onChange={this.onUpdateMessage} />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = ContactContainer;
