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

    function getObjectProperty(stateObj, pathArray){
        var propertyParent;
        if (pathArray.length === 0){
            propertyParent = stateObj;
        } else {
            propertyParent = _.reduce(pathArray, function(accumulator, value){
                return accumulator[value];
            }, stateObj, this);
        }
        return propertyParent;
    }

    function getInPath(obj, path){
        if (path.length === 1){
            return obj[path[0]];
        }

        return getInPath(obj[path[0]], path.slice(1));
    }

    var deepLinkMixin = {
        deepLinkState: function(statePath){

            return {
                value: getInPath(this.state, statePath.split('.')),
                requestChange: function(value){
                    var pathArray = statePath.split('.');
                    var propertyName = pathArray[pathArray.length - 1];
                    pathArray = pathArray.slice(0, pathArray.length - 1);
                    var newState = _.cloneDeep(this.state);

                    var clonedPropertyParent = getObjectProperty(newState, pathArray);
                    clonedPropertyParent[propertyName] = value;
                    this.setState(newState);
                }.bind(this)
            }
        }
    };

    /** @class mixins*/
    return {
        translationMixin: translationMixin,
        inputMixin: inputMixin,
        deepLinkMixin: deepLinkMixin
    };
});
