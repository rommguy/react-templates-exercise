define(['react', 'lodash', 'mixins', 'templateWrapper.rt'], function (React, _, /** mixins */ mixins, template) {
    'use strict';

    return React.createClass({
        displayName: 'templateWrapper',
        mixins: [mixins.deepLinkMixin],
        render: template
    });
});
