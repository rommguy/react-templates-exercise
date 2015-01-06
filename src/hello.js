define(['react', 'lodash', './hello.rt', 'deepLinkingMixin'], function (React, _, template, mixins) {
    'use strict';


    return React.createClass({
        displayName: 'Hello',
        mixins: [mixins],
        getInitialState: function(){
            return {
                location : {
                    lat: 0,
                    lon: 50
                }
            }
        },
        render: function(){
            return template.apply(this);
        }
    });
});
