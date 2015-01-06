define(['react', 'lodash', './hello.rt', 'deepLinkingMixin'], function (React, _, template, deepLinkingMixin) {
    'use strict';


    return React.createClass({
        displayName: 'Hello',
        mixins: [deepLinkingMixin],
        getInitialState: function(){
            return {
                location : {
                    lat: 0,
                    lon: 0
                }
            }
        },
        render: function(){
            return template.apply(this);
        }
    });
});
