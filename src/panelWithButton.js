define(['react', 'lodash', './panelWithButton.rt', 'deepLinkingMixin'], function (React, _, template, deepLinkingMixin) {
    'use strict';

    return React.createClass({
        displayName: 'panelWithButton',
        mixins: [deepLinkingMixin],
        render: template
    });
});