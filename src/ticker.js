define(['lodash', 'react', 'mixins', 'ticker.rt'], function(_, React, mixins, template) {
    'use strict';

    var ticker = React.createClass({

        displayName: 'ticker',
        mixins: [mixins.inputMixin],

        getInitialState: function() {
            var value = this.getValueFromProps();
            return { value: this.getInBoundValue(value !== undefined ? parseInt(value) : 0) };
        },

        getInBoundValue: function(value) {
            var numRe = /^[+-]?((0\.\d+)|([0-9]+(\d?\.\d+)?))$/;
            if (!numRe.test(value)) {
                return value;
            }

            var max = this.props.max !== undefined ? Number(this.props.max) : 100;
            var min = this.props.min !== undefined ? Number(this.props.min) : 0;

            var val = parseInt(value);
            return Math.min(max, Math.max(min, val));
        },

        handleChange: function(evt) {
            var newVal = this.getInBoundValue(evt.target.value);
            this.setState({ value: newVal });
            if (_.isNumber(newVal)) {
                this.callOnChangeIfExists(newVal);
            }
        },

        render: function() {
            return template.apply(this);
        }
    });

    return ticker;
});
