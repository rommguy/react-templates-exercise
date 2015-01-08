define(['react', 'lodash', 'autocompleteTag.rt'], function(React, _, template){
    'use strict';

    var mockData = [
        'economy',
        'security',
        'relations',
        'outdoor',
        'conflict',
        'games',
        'something'
    ];

    return React.createClass({
        displayName: 'panelContainer',
        getInitialState: function(){
            return {
                selectedTags: [],
                userText: ''
            }
        },
        getUserInputHandler: function(){
            return {
                value: this.state.userText,
                requestChange: function(newVal){
                    this.setState({
                        userText: newVal
                    })
                }.bind(this)
            };
        },
        optionSelected: function(option){
            this.setState({
                selectedTags: this.state.selectedTags.concat(option),
                userText:''
            });
        },
        componentWillUpdate: function(nextProps, nextState){
            var newText = nextState.userText;
            if (newText.length === 0){
                this.filteredOptions.length = 0;
            } else {
                this.filteredOptions = _.filter(mockData, function(option){
                    return (option.indexOf(newText) > -1) && !_.contains(nextState.selectedTags, option);
                })
            }
        },
        unselectOption: function(option){
            var tags = _.clone(this.state.selectedTags);
            var optionIndex = _.findIndex(tags, option);
            tags.splice(optionIndex,1)

            this.setState({
                selectedTags: tags
            });
        },
        render: template
    });
})