import React from 'react';

export default React.createClass({
  	render: function() {
	    return <div className="signal">
			<span>{this.props.signal.get('source')}: </span>
	     	<span>{this.props.signal.get('signal')}</span>
	    </div>;
  	}
});