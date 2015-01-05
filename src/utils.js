define(['lodash'], function(_){
    function getUrlParam(paramName){
        var search = window.location.search.substr(1);
        var queryParams = {};
        var params = search.split('&').forEach(function(singleParamString){
            var singleParamArr = singleParamString.split('=');
            queryParams[singleParamArr[0]] = singleParamArr[1];
        });
        return queryParams[paramName];
    }

    /** @class utils */
    return {
        getUrlParam: getUrlParam
    }
})