var React = require('React');
var PropTypes = React.PropTypes;

var ResultsContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired;
  },
  render: function() {
    <Results />
  }
});

module.exports = ResultsContainer;
