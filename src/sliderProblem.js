define(['react', 'lodash', 'mixins', './sliderProblem.rt'], function (React, _, /** mixins */ mixins, template) {
    'use strict';
    return React.createClass({
        displayName: 'Hello',
        getInitialState: function(){
          return {
              panelHeight: 300,
              innerBoxPosition: 50,
              innerBoxHeight: 100
          }
        },
        mixins: [mixins.deepLinkMixin],
        render: template
    });
});
