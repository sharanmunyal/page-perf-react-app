var React = require('react');

var MyName = React.createClass({
	render: function () {
		return (
			<div>
				My Name is {this.props.name}
			</div>
			)
	}
});

module.exports = MyName;