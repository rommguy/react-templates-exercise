define(['lodash'], function(_){
   'use strict';
    function getPropertyParent(stateObj, pathArray){
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

    var  LinkedDeepStateMixin = {
        linkDeepState: function(statePath){

            return {
                value: getInPath(this.state, statePath.split('.')),
                requestChange: function(value){
                    var pathArray = statePath.split('.');
                    var propertyName = pathArray[pathArray.length - 1];
                    pathArray = pathArray.slice(0, pathArray.length - 1);
                    var newState = _.cloneDeep(this.state);

                    var clonedPropertyParent = getPropertyParent(newState, pathArray);
                    clonedPropertyParent[propertyName] = value;
                    this.setState(newState);
                }.bind(this)
            }
        }
    };

    return {
        LinkedDeepStateMixin: LinkedDeepStateMixin
    }
});
