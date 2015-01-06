define(['react', 'lodash', './hello.rt', 'utils'], function (React, _, template, /** utils */utils) {
    'use strict';


    return React.createClass({
        displayName: 'Hello',
        getInitialState: function(){
            return {
                location : {
                    lat: 0,
                    long: 0
                }
            }
        },
        handleLatChange: function(lat){
            this.setState({
                location : {
                    lat: lat,
                    long: this.state.location.long
                }
            })
        },
        handleLongChange: function(long){
            this.setState({
                location : {
                    lat: this.state.location.lat,
                    long: long
                }
            })
        },
        render: function(){
            this.latValueLink = {
                value: this.state.location.lat,
                requestChange: this.handleLatChange
            }
            this.longValueLink = {
                value: this.state.location.long,
                requestChange: this.handleLongChange
            }
            return template.apply(this);
        }
    });
});
