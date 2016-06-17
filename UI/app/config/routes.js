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

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='Contact' component={ContactContainer} />
      <Route path='trainModel' component={TrainModelScreenContainer} />
	  <Route path='predict' component={PredictScreenContainer} />
      <Route path='results' header='Results' component={ResultsContainer} />
    </Route>
  </Router>
);

module.exports = routes;
