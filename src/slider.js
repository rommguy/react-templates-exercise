define(['jquery', 'lodash', 'react', 'mixins',
    'slider.rt'], function ($, _, React, mixins, template) {
    'use strict';

    var slider = React.createClass({

        displayName: 'slider',
        mixins: [mixins.inputMixin],

        getInitialState: function () {
            this.mouseX = 0;
            this.sliderX = 0;
            this.sliderWidth = 0;

            var conf = this.getConf();
            var value = this.getValueFromProps();
            value = this.normalizeNumber(conf, value !== undefined ? parseInt(value) : 0);
            return { value: value };
        },

        toPercent: function (conf, val) {
            return Math.round((val - conf.min) / (conf.max - conf.min) * 100);
        },

        fromPercent: function (conf, percent) {
            return conf.min + ((conf.max - conf.min) * percent / 100);
        },

        normalizeNumber: function (conf, value) {
            var num = Number(value);
            // Set num to 0 if NaN
            if (isNaN(num)) {
                num = 0;
            }
            // Align number to steps
            if (num % conf.step) {
                num = Math.round(num / conf.step) * conf.step;
            }

            if (num > conf.max) {
                num = conf.max;
            } else if (num < conf.min) {
                num = conf.min;
            }
            if (num !== Math.round(num)) {
                num = num.toFixed(2);
            }

            return num;
        },

        mouseMove: function (e) {
            var conf = this.getConf();
            this.mouseX = e.pageX;
            var percent = ((this.mouseX - this.sliderX) / this.sliderWidth) * 100;

            percent = Math.min(Math.max(percent, 0), 100);
            var newVal = this.normalizeNumber(conf, this.fromPercent(conf, percent));
            this.setState({ value: newVal });
            this.callOnChangeIfExists(newVal);
        },

        mouseUp: function () {
            var doc = $(document);
            doc.off('mousemove', this.mouseMove);
            doc.off('mouseup', this.mouseUp);
        },

        mouseDown: function () {
            var doc = $(document);
            doc.off('mousemove', this.mouseMove);
            doc.off('mouseup', this.mouseUp);
            var sliderContainer = $(this.refs.sliderContainer.getDOMNode());

            this.sliderX = sliderContainer.offset().left;
            this.sliderWidth = sliderContainer.width();

            doc.on('mousemove', this.mouseMove);
            doc.on('mouseup', this.mouseUp);
        },

        getConf: function () {
            return {
                max: this.props.max !== undefined ? Number(this.props.max) : 100,
                min: this.props.min !== undefined ? Number(this.props.min) : 0,
                step: this.props.step !== undefined ? Number(this.props.step) : 1
            };
        },

        handleTickerChange: function (newVal) {
            var conf = this.getConf();
            newVal = this.normalizeNumber(conf, newVal);
            this.setState({ value: newVal });
            this.callOnChangeIfExists(newVal);
        },

        componentWillReceiveProps: function(nextProps) {
            if (this.props.min !== nextProps.min || this.props.max !== nextProps.max) {
                var conf = this.getConf();
                var boundValue = this.normalizeNumber(conf, this.state.value);
                if (boundValue !== this.state.value) {
                    this.setState({ value: boundValue });
                }
            }
        },

        getTopLevelProps: function() {
            return _.omit(this.props, ['mix', 'max', 'value', 'onChange']);
        },

        render: function () {
            var conf = this.getConf();
            this.percent = this.toPercent(conf, this.state.value);
            return template.apply(this);
        }
    });

    return slider;
});
