define(['react', 'lodash', 'panelContainer.rt'], function(React, _, template){
    'use strict';

    return React.createClass({
        displayName: 'panelContainer',
        getInitialState: function(){
            this.panelStyle = {
                width :'100px',
                height: '100px',
                border: '1px dashed black',
                left: '100px'
            }
            return {};
        },
        render: template
    });
})