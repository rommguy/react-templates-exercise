define(['lodash', 'utils'], function (_, /** utils */ utils) {
    'use strict';


    var langsData = {
        en: {
            PANEL_TITLE: 'Translated panel title',
            PANEL_DESCRIPTION: 'Translated panel description'
        },
        fr: {
            PANEL_TITLE: 'Titre du panneau Traduit',
            PANEL_DESCRIPTION: 'Description du panneau Traduit'
        },
        gr: {
            PANEL_TITLE: 'Übersetzt Panel Titel',
            PANEL_DESCRIPTION: 'Übersetzt Panel Beschreibung'
        }
    }

    var lang = utils.getUrlParam('lang') || 'en';

    var translationMixin = {
        translate: function(key){
            return langsData[lang][key];
        }
    };

    var inputMixin = {
        isDisabled: function() {
            return this.props.disabled === true;
        },

        hasLabel: function() {
            return this.props.label !== undefined && this.props.label.trim().length > 0;
        },

        getLabel: function() {
            return this.props.label !== undefined ? this.props.label : '';
        },

        isValid: function(val) {
            return this.props.validator === undefined || this.props.validator(val);
        },

        getInvalidMessage: function() {
            return this.props.invalidMessage !== undefined ? this.props.invalidMessage : '';
        },

        getValueFromProps: function(props) {
            props = props || this.props;
            return props.valueLink !== undefined ? props.valueLink.value : props.value;
        },

        componentWillReceiveProps: function(nextProps) {
            var newVal = this.getValueFromProps(nextProps);
            if (this.getValueFromProps(this.props) !== newVal) {
                this.setState({ value: newVal });
            }
        },

        callOnChangeIfExists: function(newVal) {
            var onChange = this.props.valueLink ? this.props.valueLink.requestChange : this.props.onChange;
            if (onChange) {
                onChange(newVal);
            }
        }
    };

    return {
        translationMixin: translationMixin,
        inputMixin: inputMixin
    };
});
