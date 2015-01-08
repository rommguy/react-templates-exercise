define(['react', 'lodash', 'mixins', 'templateWrapper.rt', 'settingsPanel.rt'], function (React, _, /** mixins */ mixins, template, contentTemplate) {
    'use strict';

    return React.createClass({
        displayName: 'templateWrapper',
        mixins: [mixins.deepLinkMixin],
        render: function(){
            var fullTemplate = template.apply(this);
            var content = contentTemplate.apply(this);
            var templateChildren = fullTemplate.props.children;
            var contentIndex = _.findIndex(templateChildren, function(child){
                return child.ref === 'content';
            });
            templateChildren.splice(contentIndex, 1, content);
            return fullTemplate;
        }
    });
});
