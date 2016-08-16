var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var hashHistory = ReactRouter.hashHistory;
var ResultsContainer = require('../containers/ResultsContainer');
var ContactContainer=require('../containers/ContactContainer');
var TrainModelScreenContainer = require('../containers/TrainModelScreenContainer');
var PredictScreenContainer = require('../containers/PredictScreenContainer');
var UploadPreTrainedModelScreenContainer = require('../containers/UploadPreTrainedModelScreenContainer');
var Login=require('../components/Login');
var Register=require('../components/Register');
var Dashboard=require('../components/Dashboard');
var requireAuth = require('../utils/authenticated');
var JobDetailsContainer = require('../containers/JobDetailsContainer');
var DashboardContent = require('../components/DashboardContent.js');
var JobsListComponentContainer = require('../containers/JobsListComponentContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='Contact' component={ContactContainer} />
	  //<Route path="login" component={Login} />
      //<Route path="register" component={Register} />
      //<Route path='results' header='Results' component={ResultsContainer}/>
	  <Route path="dashboard" component={Dashboard}>
	  	<IndexRoute component={DashboardContent} />
		<Route path='trainModel' component={TrainModelScreenContainer}/>
		<Route path='predict' component={PredictScreenContainer} />
		<Route path='uploadPreTrainedModel' component={UploadPreTrainedModelScreenContainer}/>
		<Route path='jobsList' component={JobsListComponentContainer} />
		<Route path='jobDetails' component={JobDetailsContainer} />
	  </Route>
    </Route>
  </Router>
);

module.exports = routes;
