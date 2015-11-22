import React from 'react';
import SingleSpace from './SingleSpace';

export default React.createClass({
	render: function() {
		return <div className="spacesHolder">
			{this.props.spacesLast.map(space =>
				 <SingleSpace key={space} 
				 	space={this.props.spaces.get(space)}
				 	url={this.props.url} 	/>)} 
		</div>;
	}
});