define(['react', 'lodash', './hello.rt', 'utils'], function (React, _, template, /** utils */utils) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',
        getInitialState: function(){
            return {
                name : utils.getUrlParam('name')
            }
        },
        render: template
    });
});
