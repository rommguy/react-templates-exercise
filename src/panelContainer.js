define(['react', 'lodash', 'mixins', 'panelContainer.rt'], function(React, _, mixins, template){
    'use strict';

    return React.createClass({
        displayName: 'panelContainer',
        mixins: [mixins.translationMixin],
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