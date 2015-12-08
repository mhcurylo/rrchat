import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return  <li className="source">{this.props.source.toJS()}
                 {this.props.source.name ? this.props.source.name : 'anon'} 
            </li>;
     
    }
});