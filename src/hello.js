define(['react', 'lodash', './hello.rt', 'deepLinkingMixin'], function (React, _, template, deepLinkMixin) {
    'use strict';


    return React.createClass({
        displayName: 'Hello',
        mixins: [deepLinkMixin],
        getInitialState: function(){
            this.inChange = false;
            return {
                location : {
                    lat: 0,
                    long: 0
                }
            }
        },
        render: function(){
            this.latValueLink = {
                value: this.state.location.lat,
                onChange: this.handleLatChange
            }
            this.longValueLink = {
                value: this.state.location.long,
                onChange: this.handleLongChange
            }
            return template.apply(this);
        }
    });
});
