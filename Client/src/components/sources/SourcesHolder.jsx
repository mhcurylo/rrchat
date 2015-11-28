import React from 'react';
import SingleSource from './SingleSource';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './Sources.styl';

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div className="chat__element chat__sources">
			<h4>Sources</h4>
			<ul className="sources">
				{this.props.sourcesOrder.map(source =>
					 <SingleSource key={source} 
					 	sisource={this.props.sources.get(source)}
					 	url={this.props.url}/>)}
			</ul>
		</div>;
	}
});