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
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='Contact' component={ContactContainer} />
      <Route path='trainModel' component={TrainModelScreenContainer} onEnter={requireAuth}/>
	  <Route path='predict' component={PredictScreenContainer}onEnter={requireAuth} />
	  <Route path='uploadPreTrainedModel' component={UploadPreTrainedModelScreenContainer}onEnter={requireAuth} />
	  <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path='results' header='Results' component={ResultsContainer} onEnter={requireAuth} />
	  <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
);

module.exports = routes;
