var React = require('react');
var ReactDOM = require('react-dom');
var MyName = require('./MyName.js');

var Main = React.createClass({
	render: function () {
		return (
			<div>
				<div> Hello World</div>
				<MyName name='Sharan' />
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));